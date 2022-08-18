from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status,generics


from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.permissions import IsAuthenticated

from .models import Book
from .serializers import BookSerializer, MyTokenObtainPairSerializer, RegisterSerializer


# Create your views here.


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


class RegisterView(generics.CreateAPIView):
    serializer_class = RegisterSerializer        

#alternative func base register view
# @api_view(['POST'])    
# def register_user(request):
#     User.objects.create_user(username=request.data['username'], email=request.data['email'], password=request.data['password'], is_staff=request.data['is_staff'])
#     return Response({'ueser':'created'})


@api_view()
def home(request):
    return Response({'test': 'test'})


@api_view(['GET'])
def all_books(request):
    books = Book.objects.all()
    serializer = BookSerializer(books, many=True)
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_book(request):
    print(request.user)
    new_book_serializer = BookSerializer(data=request.data)
    if new_book_serializer.is_valid():
        new_book_serializer.save()
        books = Book.objects.all()
        serializer = BookSerializer(books, many=True)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        # return Response(new_book_serializer.data, status=status.HTTP_201_CREATED)


@api_view(['GET', 'PUT'])
@permission_classes([IsAuthenticated])
def single_book(request, id):
    try:
        book = Book.objects.get(pk=id)
    except Book.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = BookSerializer(book)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = BookSerializer(book, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def delete_book(request):
    try:
        book = Book.objects.get(pk=request.data['id'])
    except Book.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    book.delete()
    books = Book.objects.all()
    serializer = BookSerializer(books, many=True)
    return Response(serializer.data)
