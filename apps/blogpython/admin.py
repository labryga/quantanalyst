from django.contrib import admin
from . import models


class TestBlogEntryAdmin(admin.ModelAdmin):
    pass

admin.site.register(models.TestBlogEntry, TestBlogEntryAdmin)
