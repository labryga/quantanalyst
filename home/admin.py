from django.contrib import admin
from . import models


class BlogEintragAdmin(admin.ModelAdmin):
    pass

admin.site.register(models.BlogEintrag, BlogEintragAdmin)
