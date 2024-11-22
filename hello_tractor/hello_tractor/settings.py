"""
Django settings for hello_tractor project.

Generated by 'django-admin startproject' using Django 5.0.1.

For more information on this file, see
https://docs.djangoproject.com/en/5.0/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/5.0/ref/settings/
"""

from pathlib import Path
import os
from urllib.parse import urlparse
from dotenv import load_dotenv
from django_hosts import reverse

load_dotenv() 

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/5.0/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-(xnl2d31u%9)b75z@)wu=mk32e@(ss4)4re@j$y#p(ukw$dzwv'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = os.environ.get('DEBUG', '') != False
print(DEBUG)

ALLOWED_HOSTS = []

AUTHENTICATION_BACKENDS = [
    'django.contrib.auth.backends.ModelBackend',
    'allauth.account.auth_backends.AuthenticationBackend',
]
# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    #Third party Apps
    'allauth',
    'allauth.account',

    # Optional -- requires install using `django-allauth[socialaccount]`.
    'allauth.socialaccount',
    'django_hosts',

    'allauth.socialaccount.providers.facebook',
    'allauth.socialaccount.providers.google',
    "phonenumber_field",

    # User defined Apps
    'main',
    'sellers',
    'admin_panel'
]

MIDDLEWARE = [
    'django_hosts.middleware.HostsRequestMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    #my defined middleware
    'hello_tractor.middleware.DynamicRedirectMiddleware',
    # Add the account middleware:
    "allauth.account.middleware.AccountMiddleware",
    'django_hosts.middleware.HostsRequestMiddleware',
    'django_hosts.middleware.HostsResponseMiddleware'
]


# Provider specific settings

SOCIALACCOUNT_PROVIDERS = {
    'google': {
        # For each OAuth based provider, either add a ``SocialApp``
        # (``socialaccount`` app) containing the required client
        # credentials, or list them here:
        'SCOPE': [
            'profile',
            'email',
        ],
        'AUTH_PARAMS': {
            'access_type': 'online',
        },
        'OAUTH_PKCE_ENABLED': True,
        'APP': {
            'client_id': '123',
            'secret': '456',
            'key': ''
        }
    }
}

SITE_ID = 1

ACCOUNT_AUTHENTICATION_METHOD = 'username_email'
ACCOUNT_EMAIL_REQUIRED = True
ACCOUNT_EMAIL_NOTIFICATIONS = True
ACCOUNT_EMAIL_VERIFICATION = 'mandatory'


# def dynamic_login_redirect_url(request):
#     """Dynamically determine LOGIN_REDIRECT_URL based on the host."""
#     if request.get_host() == 'admin.localhost:8000':
#         return reverse('admin_dashboard', host='admin')
#     elif request.get_host() == 'sellers.localhost:8000':
#         return reverse('seller_dashboard', host='sellers')
#     else:
#         return reverse('homepage', host='main')

# LOGIN_REDIRECT_URL = dynamic_login_redirect_url
# LOGOUT_REDIRECT_URL = dynamic_login_redirect_url
# ACCOUNT_EMAIL_CONFIRMATION_AUTHENTICATED_REDIRECT_URL = '/'
# ACCOUNT_EMAIL_CONFIRMATION_ANONYMOUS_REDIRECT_URL = '/'



ROOT_URLCONF = 'hello_tractor.urls'
ROOT_HOSTCONF = 'hello_tractor.hosts'
DEFAULT_HOST = 'root'
PARENT_HOST = 'localhost:8000'


TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [BASE_DIR / 'templates'],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
                # `allauth` needs this from django
                'django.template.context_processors.request',
            ],
        },
    },
]

WSGI_APPLICATION = 'hello_tractor.wsgi.application'

AUTH_USER_MODEL = 'main.CustomUser'

# Get the DATABASE_URL from the environment
DATABASE_URL = os.getenv("DATABASE_URL")

BASE_DIR = Path(__file__).resolve().parent.parent

try:
    # Attempt to parse the DATABASE_URL for PostgreSQL
    tmpPostgres = urlparse(os.getenv("DATABASE_URL", ""))
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.postgresql',
            'NAME': tmpPostgres.path.lstrip('/'),
            'USER': tmpPostgres.username,
            'PASSWORD': tmpPostgres.password,
            'HOST': tmpPostgres.hostname,
            'PORT': tmpPostgres.port or 5432,
        }
    }
    # Test connection to PostgreSQL
    import psycopg2
    conn = psycopg2.connect(
        dbname=DATABASES['default']['NAME'],
        user=DATABASES['default']['USER'],
        password=DATABASES['default']['PASSWORD'],
        host=DATABASES['default']['HOST'],
        port=DATABASES['default']['PORT'],
    )
    conn.close()
except Exception as e:
    print(f"PostgreSQL connection failed: {e}. Switching to SQLite.")
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.sqlite3',
            'NAME': BASE_DIR / 'db.sqlite3',
        }
    }



# Password validation
# https://docs.djangoproject.com/en/5.0/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/5.0/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'Africa/Nairobi'

USE_I18N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/5.0/howto/static-files/

STATIC_URL = '/static/'
STATICFILES_DIRS = [BASE_DIR / 'static']
STATIC_ROOT = BASE_DIR / "staticfiles"

# Default primary key field type
# https://docs.djangoproject.com/en/5.0/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

PHONENUMBER_DEFAULT_REGION = 'KE'


EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_PORT = 587
EMAIL_USE_TLS = True
EMAIL_HOST_USER = os.getenv('GMAIL_ACCOUNT', '')
EMAIL_HOST_PASSWORD = os.getenv('GMAIL_PASSWORD','')
DEFAULT_FROM_EMAIL = os.getenv('DEFAULT_FROM_EMAIL', '')

ADMINS = [('Paulo',os.getenv('ADMIN_EMAIL', ''))]
MANAGERS = ADMINS
 


