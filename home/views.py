from django.views.generic import TemplateView

class Home(TemplateView):
    template_name = "home.html"

class Grid(TemplateView):
    template_name = "grid.pug"
