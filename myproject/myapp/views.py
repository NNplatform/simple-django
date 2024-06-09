from rest_framework.response import Response
from rest_framework.views import APIView
from django.shortcuts import render
from .models import Product

def home(request):
    return render(request, 'home.html')

def product_list(request):
    products = Product.objects.all()
    return render(request, 'product_list.html', {'products': products})

def contact(request):
    return render(request, 'contact.html')

class HelloView(APIView):
    def get(self, request):
        return Response({"message": "Hello, Django REST!"})
