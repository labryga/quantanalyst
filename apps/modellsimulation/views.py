import sys
sys.path.append("..")
from project_templates.views import BlogPost

from django.views.generic import ListView, DetailView
from . import models
from home.models import HomeMenuItems


class ModellsimulationBlogEntries(ListView):
    template_name = "BlogEintragList.pug"
    model = models.ModellsimulationBlog


class ModellsimulationBlogPost(BlogPost):
    model = models.ModellsimulationBlog

    def get_context_data(self, **kwargs):
        context = super(ModellsimulationBlogPost, self).get_context_data(**kwargs)
        if self.request.is_ajax():
            context["menu_list"] = HomeMenuItems.objects.filter(active=True).order_by('order')
        return context

    
