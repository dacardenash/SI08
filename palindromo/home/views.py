from django.shortcuts import render
from django.http import HttpResponse

TEMPLATES_DIR = (
    'os.path.join(BASE_DIR, "templates"),'
)

# Create your views here.


def index(request):
    context = {
        "message": "Diego alejandro cardenas"
    }
    return render(request, "index.html", context)
