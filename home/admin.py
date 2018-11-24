from django.contrib import admin
from . models import BlogEintrag


class BlogEintragAdmin(admin.ModelAdmin):
    pass

admin.site.register(BlogEintrag, BlogEintragAdmin)
