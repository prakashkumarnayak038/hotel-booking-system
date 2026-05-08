from django.shortcuts import render, redirect
from .models import Booking


def home(request):
    return render(request, "index.html")


def book_page(request):
    if request.method == "POST":

        Booking.objects.create(
            name=request.POST.get('name'),
            contact=request.POST.get('contact'),
            age=request.POST.get('age'),
            gender=request.POST.get('gender'),
            checkin=request.POST.get('checkin'),
            checkout=request.POST.get('checkout'),
            members=request.POST.get('members'),
            room_type=request.POST.get('room_type'),
            id_proof=request.FILES.get('id_proof'),
            no_of_rooms=request.POST.get('no_of_rooms'),
            message=request.POST.get('message')
        )

        return redirect('home')

    return render(request, "book.html")


def benefits_page(request):
    return render(request, "Benefits.html")
