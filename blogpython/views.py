from django.shortcuts import render
from django.views.generic import DetailView
from . import models


class BlogEintrag(DetailView):
    model = models.TestBlogEntry
    template_name = 'BlogEintrag.pug' 

