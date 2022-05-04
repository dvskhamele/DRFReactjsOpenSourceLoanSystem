from django import urls
from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('login/',views.LoginView.as_view() , name="login"),
    path('get_transactions/',views.GetTransactionsView.as_view() , name="get_transactions"),
    path('add_transactions/',views.Add_transction.as_view(), name="add_transactions"),
    path('mark_paid/',views.MarkPaid.as_view(), name="mark_paid"),

]