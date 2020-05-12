from django.shortcuts import render
from .models import Patient_list
from rest_framework.decorators import api_view
from .serializers import Patient_listSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework.request import Request
from rest_framework import filters
#from rest_framework.views import APIView


def SearchResultsView(request):
    query =request.GET.get('q',None)
    qs=Patient_list.objects.all()
    if query is not None:
       qs=qs.filter(name__icontains=query)
    context={
	   "object_list":qs,
	}   
    model = Patient_list
    template_name = 'search_results.html'

    return render(request,template_name,context)
		
@api_view(['GET', 'POST'])
def patientlist(request):

    if request.method == 'GET':
        list = Patient_list.objects.all()
        serializer = Patient_listSerializer(list, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = Patient_listSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
	
@api_view(['GET', 'PUT', 'DELETE'])
def patientlistedit(request, id):

    try:
        list = Patient_list.objects.get(id=id)
    except Patient_list.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = Patient_listSerializer(list)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = Patient_listSerializer(list, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        list.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
		
       	