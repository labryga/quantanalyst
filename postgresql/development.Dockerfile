FROM postgres:11.3-alpine 
RUN addgroup -S -g 5432 topos && adduser -S -G 5432 -u 5432 -h /home/topos/ topos
USER topos
