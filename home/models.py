from django.db import models
from tinymce.models import HTMLField


class BlogEintrag(models.Model):
    titel = HTMLField()

