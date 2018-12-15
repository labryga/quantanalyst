import os, sys
from decouple import config
from . external_app_settings.ckeditor_settings import CKEDITOR_CONFIGS

BASE_DIR = os.path.dirname(
    os.path.dirname(
        os.path.dirname(os.path.abspath(__file__))
        )
)

sys.path.insert(0, os.path.join(BASE_DIR, 'apps'))

SECRET_KEY = config('SECRET_KEY')
DEBUG = True

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'ckeditor',
    'portfoliotheorie',
    'modellsimulation',
    'optionen',
    'home',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'django_ajax.middleware.AJAXMiddleware',
]

ROOT_URLCONF = 'quantanalyst.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'templates')],
        # 'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],

            'loaders': [
                ('pypugjs.ext.django.Loader', (
                    'django.template.loaders.filesystem.Loader',
                    'django.template.loaders.app_directories.Loader',
                ))
            ],

            'builtins': [
                'pypugjs.ext.django.templatetags',
            ],
        },
    },
]

WSGI_APPLICATION = 'quantanalyst.wsgi.application'

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': config('DB_NAME'),
        'USER': config('DB_USER'),
        'PASSWORD': config('DB_PASSWORD'),
    }
}

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation\
        .UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation\
        .MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation\
        .CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation\
        .NumericPasswordValidator',
    },
]
LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True
STATIC_URL = '/staticfiles/'
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')
STATICFILE_FINDERS = [
    'django.contrib.staticfiles.finders.FileSystemFinder',
    'django.contrib.staticfiles.finders.AppDirectoriesFinder',
]
STATICFILES_DIRS = [
    ('js', os.path.join(BASE_DIR, 'staticfiles', 'js', 'production')),
    ('css', os.path.join(BASE_DIR, 'staticfiles', 'css', 'production'))
]

