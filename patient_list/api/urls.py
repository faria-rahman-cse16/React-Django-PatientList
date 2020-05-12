from django.conf.urls import url
from .views import patientlist
from django.urls import path
from .views import SearchResultsView
#from . import views
from api import views
app_name = 'api'

urlpatterns = [
	path('patientlistedit/<int:id>', views.patientlistedit),
	path('list/', views.patientlist),
	#path('username/', views.Search.as_view())
	#url(r'^username/', Search.as_view(), name="search"),
    path('search/', views.SearchResultsView, name='search_results'),
]