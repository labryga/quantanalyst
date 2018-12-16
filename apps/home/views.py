
from django.shortcuts import render
from django.views.generic import TemplateView
from django.views.generic.list import ListView
from . import models


class Home(ListView):
    template_name = "base.pug"
    queryset = models.HomeMenuItems.objects.filter(active=True).order_by('order')
    context_object_name = "menu_list"

    def get_context_data(self, *args, **kwargs):
        context = super(ModellsimulationBlogPost, self).get_context_data(*args, **kwargs)
        context["menu_list"] = HomeMenuItems.objects.filter(active=True).order_by('order')
        return context

    def get_template_names(self):
        if self.template_name is None:
            raise ImproperlyConfigured(
        else:
            if self.request.is_ajax():
                self.template_name = "BlogEintragAjax.pug"
            return [self.template_name]
