
from django.shortcuts import render
from django.views.generic import TemplateView
from django.views.generic.list import ListView
from . import models


class Home(ListView):
    model = models.HomeMenuItems
    template_name = "base.pug"
