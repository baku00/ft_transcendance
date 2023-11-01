all: prepare
	docker compose -f ./srcs/docker-compose.yml up -d --build

up:
	docker compose -f ./srcs/docker-compose.yml up -d

down:
	docker compose -f ./srcs/docker-compose.yml down

clean:
	docker compose -f ./srcs/docker-compose.yml down -v
	docker system prune -f

prepare:
	mkdir -p ./srcs/requirements/database
	mkdir -p ./srcs/requirements/nginx/conf/ssl
	cp ./srcs/.env.exemple ./srcs/.env
	sudo chmod -R 777 .

re: clean all