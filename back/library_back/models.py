
from django.db import models

# Create your models here.

class Category(models.Model):
    cat_name = models.CharField(max_length=100,blank=False,null=False, default='unknown')  

    def __str__(self):
        return self.cat_name

      

class Book(models.Model):
    
    name = models.CharField(max_length=100,blank=False,null=False, default='unknown')
    author = models.CharField(max_length=100,blank=False,null=False, default='unknown')
    year_published = models.PositiveIntegerField()
    price = models.DecimalField(max_digits=6, decimal_places=2,blank=False,null=False, default=99)
    category = models.ForeignKey(Category,on_delete=models.CASCADE, default=1)


    def __str__(self):
        return self.name

