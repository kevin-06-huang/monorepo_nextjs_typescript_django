from django.shortcuts import render
from django.http import JsonResponse

# Create your views here.


def home_view(request):
    if request.method == 'GET':
        data = {'info': 'test'}
        return JsonResponse(data, status=200)
