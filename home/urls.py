from django.conf.urls import url
from .views import *

urlpatterns = [
    url(r'^$', Home.as_view()),
    url(r'^grid$', Grid.as_view())
]
