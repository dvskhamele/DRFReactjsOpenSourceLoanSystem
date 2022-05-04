from django.contrib import admin
from .models import CustomUser, Transaction
# Register your models here.
admin.site.register(Transaction)
admin.site.register(CustomUser)
