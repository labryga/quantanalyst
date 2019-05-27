import os
from decouple import config, Csv
from . base import *


DEBUG = True
# ALLOWED_HOSTS = ['quantanalyst.ch', 'www.quantanalyst.ch']
ALLOWED_HOSTS = config('ALLOWED_HOSTS_PRODUCTION_QUANTANALYST', cast=Csv())
# ALLOWED_HOSTS = config('ALLOWED_HOSTS_PRODUCTION_QUANTANALYST')

