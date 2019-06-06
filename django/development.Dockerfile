FROM python:3.5-alpine

WORKDIR /quantanalyst

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN apk update \
	&& apk add --virtual build-deps gcc python3-dev musl-dev \
	&& apk add postgresql-dev && pip install psycopg2

COPY ./django/requierments /requierments
RUN pip install -r /requierments/requierments.txt
RUN apk del build-deps
