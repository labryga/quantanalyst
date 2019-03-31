FROM python:3.6-alpine
RUN mkdir -p /opt/quantanalyst
RUN apk update && apk add postgresql-dev gcc python3-dev musl-dev
COPY . /opt/quantanalyst

RUN pip install -r /opt/quantanalyst/req.txt

WORKDIR /opt/quantanalyst
EXPOSE 8000

RUN ls -la /opt/
RUN ls -la /opt/quantanalyst
CMD ["gunicorn", "--bind", ":8000", "quantanalyst.wsgi:application"]
