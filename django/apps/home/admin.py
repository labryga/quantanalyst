import sys
sys.path.append("..")

from modules.admin import BlogEntryAdmin
from django.contrib import admin
from . import models


@admin.register(models.HomeMenuItems)
class HomeMenuItemsAdmin(admin.ModelAdmin):
    pass

admin.site.register(models.HomeBlog, BlogEntryAdmin)
