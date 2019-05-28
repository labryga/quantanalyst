from django.conf.urls import url, include
from django.contrib import admin

urlpatterns = [
    url(r'^', include('home.urls')),
    url(r'^admin', admin.site.urls),
    # url(r'^portfoliotheorie/', include('portfoliotheorie.urls')),
    # url(r'^modellsimulation/', include('modellsimulation.urls')),
]
