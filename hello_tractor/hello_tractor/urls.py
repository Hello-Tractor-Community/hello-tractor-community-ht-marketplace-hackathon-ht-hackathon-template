
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('adminstrator/', admin.site.urls),
    path('accounts/', include('allauth.urls')),
    # path('sellers/', include('sellers.urls')),
    # path('', include('main.urls')),
    # path('admin_dashboard/',include('admin_panel.urls'))
] +  static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
