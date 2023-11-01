FROM debian:buster

RUN apt-get update && apt-get install -y nginx net-tools openssl

COPY /conf/config/nginx.conf		/etc/nginx/nginx.conf
COPY /conf/config/self-signed.conf	/etc/nginx/snippets/self-signed.conf
COPY /conf/config/ssl-params.conf	/etc/nginx/snippets/ssl-params.conf

COPY /tools/scripts/nginx-entrypoint.sh /
RUN chmod +x /nginx-entrypoint.sh
ENTRYPOINT [ "/nginx-entrypoint.sh" ]

EXPOSE 443

CMD [ "nginx", "-g", "daemon off;" ]
