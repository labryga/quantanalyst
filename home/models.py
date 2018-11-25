from django.db import models


class BlogEintrag(models.Model):
    titel = models.TextField()

