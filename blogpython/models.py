from django.db import models
from ckeditor.fields import RichTextField
from ckeditor.widgets import CKEditorWidget


class TestBlogEntry(models.Model):
    datum = models.DateField(blank=True)
    titel = RichTextField(config_name='blogtitle')
    eintrag = RichTextField(config_name='blogentrycontent')
    wert = models.CharField(max_length=120, blank=True)
