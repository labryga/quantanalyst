FROM python:3.6-alpine

WORKDIR /

ENV PYTHONDONTWRITEBYTECODE 1 
ENV PYTHONBUFFERED 1 

RUN apk update \
	&& apk add --virtual build-deps gcc python3-dev musl-dev \
	&& apk add shadow \
	&& apk add postgresql-dev && pip install psycopg2

RUN mkdir /requierments
COPY ./quantanalyst/requierments/ /requierments
