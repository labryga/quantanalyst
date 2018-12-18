import sys
sys.path.append("..")
from project_templates.views import BlogPost

from django.views.generic import ListView, DetailView
from . import models
from home.models import HomeMenuItems


class ModellsimulationBlogEntries(ListView):
    model = models.ModellsimulationBlog
    def get_context_data(self, **kwargs):
        context = super(ModellsimulationBlogEntries, self).get_context_data(**kwargs)
        if not self.request.is_ajax():
            context["menu_list"] = HomeMenuItems.objects.filter(active=True).order_by('order')
        return context

    def get_template_names(self):
        self.template_name = "BlogEintragList.pug" if self.request.is_ajax() \
                else "base_test.pug"
        return [self.template_name]


class ModellsimulationBlogPost(BlogPost):
    model = models.ModellsimulationBlog

