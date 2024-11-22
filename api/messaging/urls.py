"""
URL configuration for PROJECT project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.urls import path

from messaging import views


urlpatterns = [
    path("messages/", views.MessageList.as_view(), name="message-list"),
    path(
        "messages/<str:pk>/", views.MessageDetail.as_view(),
        name="message-detail"
    ),
    path(
        "users/<str:pk>/messages/", views.UserMessageList.as_view(),
        name="seller-review-list"
    ),
    path(
        "users/<str:pk>/messages/<str:message_pk>/",
        views.UserMessageDetail.as_view(),
        name="seller-review-detail"
    ),
]
