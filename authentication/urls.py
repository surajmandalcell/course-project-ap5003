from django.contrib import admin
from django.urls import include, path
from . import views

urlpatterns = [
    path("", views.login_user, name="login"),
    path("signup", views.sign_up, name="signup"),
]
