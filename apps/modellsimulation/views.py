from django.views.generic import ListView, DetailView
from . import models
from home.models import HomeMenuItems


class ModellsimulationBlogEntries(ListView):
    model = models.ModellsimulationBlog


class ModellsimulationBlogPost(DetailView):
    template_name = "BlogEintrag.pug"
    model = models.ModellsimulationBlog

    def get_template_names(self):
        names = super(ModellsimulationBlogPost, self).get_template_names()
        if self.request.is_ajax():
            template_name = "BlogEintragAjax.pug"
            names = [self.template_name]
        return names

    # def get_context_data(self, *args, **kwargs):
    #     context = super(ModellsimulationBlogPost, self).get_context_data(*args, **kwargs)
    #     if not self.request.is_ajax():
    #         context["menu_list"] = HomeMenuItems.objects.filter(active=True).order_by('order')
    #     return context


