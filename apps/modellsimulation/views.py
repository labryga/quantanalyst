import sys
sys.path.append("..")
from project_templates.views import BlogPost, BlogEntries

from . import models


class ModellsimulationBlogEntries(BlogEntries):
    model = models.ModellsimulationBlog


class ModellsimulationBlogPost(BlogPost):
    model = models.ModellsimulationBlog

