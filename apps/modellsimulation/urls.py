from django.conf.urls import url
from . import views


urlpatterns = [
    url(r'^$', views.ModellsimulationBlogEntries.as_view()),
    url(r'^(?P<slug>[\w-]+)$', views.ModellsimulationBlogPost.as_view(), name='blog-post'),
]
