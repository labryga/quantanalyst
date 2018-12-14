from django.views.generic import ListView, DetailView
from . import models


class ModellsimulationBlogEntries(ListView):
    template_name = "BlogEintragList.pug"
    model = models.ModellsimulationBlog

class ModellsimulationBlogPost(DetailView):
    model = models.ModellsimulationBlog
    template_name = "BlogEintrag.pug"
