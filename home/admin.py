from django.contrib import admin
from . import models


class BlogEntryAdmin(admin.ModelAdmin):
    pass

admin.site.register(models.HomeBlog, BlogEntryAdmin)
