import sys
sys.path.append("..")

from . import models
from django.contrib import admin
from project_templates.admin import BlogEntryAdmin

admin.site.register(models.ModellsimulationBlog, BlogEntryAdmin)
