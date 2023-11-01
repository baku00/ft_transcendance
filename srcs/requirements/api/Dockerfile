FROM node:latest

RUN apt-get update -y && \
	npm i -g @nestjs/cli

WORKDIR /var/www/html

COPY ./sources/install.sh .
COPY ./sources/start.sh .

RUN chmod +x ./install.sh && chmod +x ./start.sh

ENTRYPOINT [ "/bin/bash", "./install.sh" ]

CMD ["/bin/bash", "./start.sh"]