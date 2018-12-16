from django.views.generic import ListView, DetailView
from . import models
from home.models import HomeMenuItems


class ModellsimulationBlogEntries(ListView):
    template_name = "BlogEintragList.pug"
    model = models.ModellsimulationBlog

class ModellsimulationBlogPost(DetailView):
    template_name = "BlogEintrag.pug"
    model = models.ModellsimulationBlog

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

