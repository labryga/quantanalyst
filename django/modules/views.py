from home.models import HomeMenuItems

from django.views.generic import DetailView, ListView


class BlogEntries(ListView):

    def get_context_data(self, **kwargs):
        context = super(BlogEntries, self).get_context_data(**kwargs)
        if not self.request.is_ajax():
            context["menu_list"] = HomeMenuItems.objects.filter(active=True).order_by('order')
        return context

    def get_template_names(self):
        self.template_name = "BlogEntriesListAjax.pug" if self.request.is_ajax() \
                else "BlogEntriesList.pug"
        return [self.template_name]


class BlogPost(DetailView):

    def get_context_data(self, **kwargs):
        context = super(BlogPost, self).get_context_data(**kwargs)
        context["menu_list"] = HomeMenuItems.objects.filter(active=True).order_by('order')
        return context

    def get_template_names(self):
        self.template_name = "BlogEntryAjax.pug" if self.request.is_ajax() \
                else "BlogEntry.pug"
        return [self.template_name]


