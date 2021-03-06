from django.views.generic.list import ListView
from . import models


class Home(ListView):
    template_name = "navigation_desktop_tablet.pug"
    queryset = models.HomeMenuItems.objects.filter(active=True).order_by('order')
    context_object_name = "menu_list"

