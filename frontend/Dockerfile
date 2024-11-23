FROM nginx:latest

COPY /confs/nginx.conf /etc/nginx/nginx.conf
RUN chmod 644 /etc/nginx/nginx.conf
RUN mkdir cert
RUN openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /cert/localhost.key -out /cert/localhost.crt -subj "/CN=localhost"
