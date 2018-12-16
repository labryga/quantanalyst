from django.views.generic import ListView, DetailView
from . import models


class PortfoliotheorieBlogEntries(ListView):
    template_name = "BlogEintragList.pug"
    model = models.PortfoliotheorieBlog

class PortfoliotheorieBlogPost(DetailView):
    model = models.PortfoliotheorieBlog
    template_name = "BlogEintrag.pug"

