from django.shortcuts import render

# Create your views here.
def home_view(request):
    data = {}
    return JsonResponse(data, status=200)