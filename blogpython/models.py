from django.db import models
from ckeditor.fields import RichTextField
from ckeditor.widgets import CKEditorWidget


class TestBlogEntry(models.Model):
    slug = models.SlugField(max_length=100, blank=True)
    datum = models.DateField(blank=True)
    titel = RichTextField(config_name='blogtitle')
    eintrag = RichTextField(config_name='blogentrycontent')

    def __str__(self):
        return "{}".format(self.slug)
