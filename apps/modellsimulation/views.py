from django.views.generic import ListView, DetailView
from . import models


class ModellsimulationBlogEntries(ListView):
    template_name = "BlogEintragList.pug"
    model = models.ModellsimulationBlog

class ModellsimulationBlogPost(DetailView):
    template_name = "BlogEintrag.pug"
    model = models.ModellsimulationBlog

    def get_template_names(self):
        if self.template_name is None:
            raise ImproperlyConfigured(
                "TemplateResponseMixin requires either a definition of "
                "'template_name' or an implementation of 'get_template_names()'")
        else:
            if self.request.is_ajax():
                self.template_name = "BlogEintragAjax.pug"
            return [self.template_name]

