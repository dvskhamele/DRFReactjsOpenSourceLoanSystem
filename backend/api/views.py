from urllib import request, response
from django.http import JsonResponse
from rest_framework import views
# Create your views here.
from django.contrib import messages, auth
from rest_framework import viewsets
from .serializers import *
from rest_framework.decorators import APIView
from django.db.models import Q


def home(request):
    return JsonResponse({'info': 'django react',})
from rest_framework.response import Response

class GetTransactionsView(APIView):
    def get(self,request):
        data = request.data

        username = request.query_params.get('username')
        print(username)
        queryset = Transaction.objects.filter( Q(transaction_with__username = username) | Q(transaction_from__username =username)).order_by('id')
        serializer = AccountSerializer(queryset,many=True)
        return Response(serializer.data)



class LoginView(views.APIView):
    def post(self, request, format=None):
        data = request.data

        username = data.get('username', None)
        password = data.get('password', None)

        user = auth.authenticate(username=username, password=password)

        if user is not None:
            auth.login(request, user)
            return JsonResponse({'succes': True})
        else:
            messages.warning(request, 'invalid credentials')
            return JsonResponse({'error': False})



class Add_transction(APIView):
    def post(self, request, format=None):
        data = request.data
        transaction_id = data.get('transaction_id')
        transaction_type = data.get("transaction_type")
        transaction_status = data.get('transaction_status')
        transaction_date = data.get('transaction_date')
        transaction_with = data.get('transaction_with')
        serializer=AccountSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)

        return Response(serializer.errors)


class MarkPaid(APIView):
    def post(self, request, format=None):
        transaction_id = request.data.get("transaction_id")
        data = Transaction.objects.get(transaction_id=transaction_id)
        data.transaction_status="paid"
        data.save()
        return Response({"sucess":"update successfully"})





def transaction_status(request):
	return Response({'status':'status changed!'})


