from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate, logout
from django.contrib import messages


def login_user(request):
    if request.method == "POST":
        username = request.POST["username"]
        password = request.POST["password"]
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            messages.success(request, f"Welcome back, {username}!")
            return redirect("home")
        else:
            messages.error(request, "Invalid username or password.")
    return render(request, "auth/login.html")


def sign_up(request):
    if request.method == "POST":
        username = request.POST["username"]
        password = request.POST["password"]
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            messages.success(request, f"Welcome, {username}!")
            return redirect("home")
        else:
            messages.error(request, "Invalid username or password.")
    return render(request, "auth/signup.html")
