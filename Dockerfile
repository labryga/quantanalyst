FROM python:3.6

RUN mkdir -p /opt/quantanalyst

COPY . /opt/quantanalyst

RUN pip install -r /opt/quantanalyst/req.txt

WORKDIR /opt/quantanalyst
EXPOSE 8000

RUN ls -la /opt/
RUN ls -la /opt/quantanalyst
CMD ["gunicorn", "--bind", ":8000", "quantanalyst.wsgi:application"]
