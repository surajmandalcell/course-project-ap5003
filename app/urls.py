from chat.views import chat
from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", include("django.contrib.auth.urls")),
    path("", include("authentication.urls")),
    path("chat/", include("chat.urls"), name="chat"),
]
