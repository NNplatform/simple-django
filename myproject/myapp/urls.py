from django.urls import path
from . import views

urlpatterns = [
    path('hello/', views.HelloView.as_view(), name='hello'),
    path('', views.home, name='home'),
    path('products/', views.product_list, name='product_list'),
    path('contact/', views.contact, name='contact'),
]