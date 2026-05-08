from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('book/', views.book_page, name='book'),
    path('benefits/', views.benefits_page, name='benefits'),
]
