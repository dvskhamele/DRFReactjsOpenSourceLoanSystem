from asyncio import AbstractServer
import uuid
from django.contrib.auth.models import User
from pickle import TRUE
from random import choices
from secrets import choice
from statistics import mode
from django.db import models


# Create your models here.
 

class Transaction(models.Model):
	CHOICES = (
        ("borrows", "borrows"),
        ("lender", "lender")
        )
	transaction_id = models.CharField(max_length=36, default=uuid.uuid4,unique=True)
	transaction_type  = models.CharField(choices=CHOICES,null=True,blank=True,max_length=200)
	transaction_date = models.DateField(auto_now_add=True,null=True,blank=True)
	transaction_status =  models.CharField(default="unpaid",max_length=50)
	transaction_from  = models.ForeignKey("CustomUser",related_name="transactions_lent",on_delete=models.SET_NULL,blank=True,null=True)
	transaction_with  = models.ForeignKey("CustomUser",related_name="transactions_borrowed",on_delete=models.SET_NULL,blank=True,null=True)
	reason = models.CharField(max_length=255)




class CustomUser(User):
   balance=models.BooleanField(default=False)