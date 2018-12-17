from django.views.generic import ListView, DetailView
from . import models
from home.models import HomeMenuItems


class ModellsimulationBlogEntries(ListView):
    template_name = "BlogEintragList.pug"
    model = models.ModellsimulationBlog


class ModellsimulationBlogPost(DetailView):
    model = models.ModellsimulationBlog

    def get_template_names(self):
        self.template_name = "BlogEintragAjax.pug" if self.request.is_ajax() else "BlogEintrag.pug"
        return [self.template_name]

        # if self.request.is_ajax():
        #     self.template_name = "BlogEintragAjax.pug"
        #     return [self.template_name]
        # else:
        #     self.template_name = "BlogEintrag.pug"
        #     return [self.template_name]
            # return super(ModellsimulationBlogPost, self).get_template_names()

    # def get_context_data(self, *args, **kwargs):
    #     context = super(ModellsimulationBlogPost, self).get_context_data(*args, **kwargs)
    #     if not self.request.is_ajax():
    #         context["menu_list"] = HomeMenuItems.objects.filter(active=True).order_by('order')
    #     return context


