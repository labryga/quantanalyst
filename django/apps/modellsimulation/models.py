import sys
sys.path.append("..")

from modules.models import BlogEntry 
from django.db import models


class ModellsimulationBlog(BlogEntry):
    category = models.SlugField(max_length=100, default="modellsimulation")
    pass

