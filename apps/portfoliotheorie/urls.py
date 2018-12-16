from django.conf.urls import url
from . import views


urlpatterns = [
    url(r'^$', views.PortfoliotheorieBlogEntries.as_view()),
    url(r'^(?P<slug>[\w-]+)$', views.PortfoliotheorieBlogPost.as_view(), name='blog-post'),
]
