from django.views.generic import TemplateView
from django.http import HttpResponse

class Home(TemplateView):
    template_name = "home.pug"

class Grid(TemplateView):
    template_name = "grid.pug"
    # new gird
