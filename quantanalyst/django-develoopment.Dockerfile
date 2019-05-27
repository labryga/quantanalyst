FROM python:3.6-alpine

WORKDIR /

ENV PYTHONDONTWRITEBYTECODE 1 
ENV PYTHONBUFFERED 1 

COPY ./quantanalyst/requierments/req_test.txt .
RUN pip install -r ./req_test.txt
RUN django-admin.py startproject quantanalyst
