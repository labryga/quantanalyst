from django.db import models
from ckeditor.fields import RichTextField
from ckeditor.widgets import CKEditorWidget

class BlogEintrag(models.Model):
    inhalt = RichTextField()

