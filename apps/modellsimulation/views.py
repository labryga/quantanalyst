
import sys
sys.path.append("..")
from project_templates.views import BlogPost

from django.views.generic import ListView
from . import models
from home.models import HomeMenuItems


class ModellsimulationBlogEntries(ListView):
    template_name = "BlogEintragList.pug"
    model = models.ModellsimulationBlog


class ModellsimulationBlogPost(BlogPost):
    model = models.ModellsimulationBlog


