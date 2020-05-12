from django.db import models

class Patient_list(models.Model):
    name = models.CharField("Name", max_length=50)
    age = models.IntegerField("Age")
    address= models.CharField("Address", max_length=200)
    contact_no = models.IntegerField("Contact_No")
    date= models.DateTimeField("Date")
	
