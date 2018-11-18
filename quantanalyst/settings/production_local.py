import os
from decouple import config
from . base import *

DEBUG = True

ALLOWED_HOSTS = config('ALLOWED_HOSTS_PRODUCTION_LOCAL')

