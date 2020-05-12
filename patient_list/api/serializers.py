from rest_framework import serializers
from .models import Patient_list

class Patient_listSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patient_list
        fields = "__all__"
   