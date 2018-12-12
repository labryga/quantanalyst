import sys
sys.path.append("..")

from project_templates.models import BlogEntry
from django.db import models
from ckeditor.fields import RichTextField
from ckeditor.widgets import CKEditorWidget


class HomeBlog(BlogEntry):
    pass

class HomeMenuItems(models.Model):
    menu_title = models.CharField("meütitel", max_length=30, blank=True)
    active = models.BooleanField("active", blank=True)

    def __str__(self):
        return "{}".format(self.menu_title)
