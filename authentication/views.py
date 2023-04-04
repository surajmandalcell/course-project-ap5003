from django.shortcuts import render, redirect
from django.contrib import messages


def login_user(request):
    if request.method == "POST":
        username = request.POST["username"]
        password = request.POST["password"]
        # Login with firebase username and password
    return render(request, "auth/login.html")


def sign_up(request):
    if request.method == "POST":
        username = request.POST["username"]
        password = request.POST["password"]
    return render(request, "auth/signup.html")
