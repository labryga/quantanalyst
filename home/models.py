import sys
sys.path.append("..")

from project_templates.models import BlogEntry
from django.db import models
from ckeditor.fields import RichTextField
from ckeditor.widgets import CKEditorWidget


class HomeBlog(BlogEntry):
    pass
