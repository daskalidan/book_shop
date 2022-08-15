from django.contrib import admin

from .models import Book, Category

# Register your models here.

admin.site.register(Category)
admin.site.register(Book)

# superuser username:theboss,email:the@boss.com,password:abc123