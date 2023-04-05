from django.views.generic import TemplateView
from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", include("django.contrib.auth.urls")),
    path("", include("authentication.urls")),
    path("chat/", include("chat.urls")),
    path("__reload__/", include("django_browser_reload.urls")),
]
