from django.views.generic import TemplateView
from django.http import HttpResponse

class Home(TemplateView):
    template_name = "home.pug"


def zahl(request):
    if 'count' in request.session:
        request.session['count'] += 1
        return HttpResponse('new count %s' % request.session['count'])
    else:
        request.session['count'] = 1
        return HttpResponse('new count %s' % request.session['count'])
