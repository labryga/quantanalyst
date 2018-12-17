
from django.shortcuts import render
from django.views.generic import TemplateView
from django.views.generic.list import ListView
from . import models


class Home(ListView):
    template_name = "base.pug"
    queryset = models.HomeMenuItems.objects.filter(active=True).order_by('order')
    context_object_name = "menu_list"

