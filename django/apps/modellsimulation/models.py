import sys
sys.path.append("..")

from project_templates.models import BlogEntry 
from django.db import models


class ModellsimulationBlog(BlogEntry):
    category = models.SlugField(max_length=100, default="modellsimulation")
    pass

