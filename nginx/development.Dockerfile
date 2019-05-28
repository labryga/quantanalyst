FROM nginx:1.15.12-alpine
RUN mkdir /statifiles/
COPY ./staticfiles /staticfiles
