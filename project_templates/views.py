from django.views.generic import DetailView


class BlogPost(DetailView):

    def get_template_names(self):
        self.template_name = "BlogEintragAjax.pug" \
                if self.request.is_ajax() else "BlogEintrag.pug"
        return [self.template_name]
