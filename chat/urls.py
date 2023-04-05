from django.views.generic import TemplateView
from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path(
        "",
        (
            TemplateView.as_view(
                template_name="/Users/surajmandal/Desktop/humber/5003-ap/course-project/application/chat/build/index.html",
            )
        ),
        name="index.html",
    ),
]
