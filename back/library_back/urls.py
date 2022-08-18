
from django.urls import path
from . import views

from rest_framework_simplejwt.views import TokenRefreshView


urlpatterns = [
    path('', views.home),
    path('allbooks/', views.all_books),
    path('createbook/', views.create_book),
    path('deletebook/', views.delete_book),
    path('singlebook/<int:id>', views.single_book),
   #login
    path('token/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    # register
    path('register/', views.RegisterView.as_view(), name='auth_register'),
    # path('register/', views.register_user),
]