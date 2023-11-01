include srcs/.env
export

COMPOSE_DIR = srcs
COMPOSE_FILE = $(COMPOSE_DIR)/docker-compose.yml

BIN = docker compose
ARGS = -f $(COMPOSE_FILE)
DKC = $(BIN) $(ARGS)
DKC_CONFIG = $(DKC) config

HOST_VOLUME_ROOT = $(shell pwd)/datas

VOLUME_MOUNTS = ssl site/api site/client database
VOLUME_PATHS = $(addprefix $(HOST_VOLUME_ROOT)/, $(VOLUME_MOUNTS))
VOLUME_NAMES = $(addprefix	$(COMPOSE_PROJECT_NAME)_, \
							$(shell $(DKC_CONFIG) --volumes))

IMAGES = $(shell $(DKC_CONFIG) --images)

all: prepare install

prepare:
	echo "Preparing datas folder..."
	chmod +x ./srcs/tools/configure.sh
	./srcs/tools/configure.sh ${HOST_VOLUME_ROOT}
	echo "Datas folder ready."

up:
	$(DKC) up -d

down:
	$(DKC) down

logs:
	$(DKC) logs -f

volumes:
	mkdir -p $(VOLUME_PATHS)

info:
	@echo -e "IMAGES:"
	@$(DKC_CONFIG) --images
	@echo -e "\nVOLUMES:"
	@$(DKC_CONFIG) --volumes
	@echo -e "\nCONTAINERS:"
	@$(DKC) ps -a

build:
	$(DKC) build --no-cache

install: volumes build
	$(DKC) create
	@$(MAKE) -s info
	@$(MAKE) up
	@sudo chmod -R 777 $(HOST_VOLUME_ROOT)

clean-volumes:
	-docker volume rm $(VOLUME_NAMES)

fclean-volumes: clean-volumes
	sudo rm -rf $(VOLUME_PATHS)

clean-images:
	-docker rmi -f $(IMAGES)

fclean-images:
	-docker rmi -f $(IMAGES)

clean-containers:
	$(DKC) kill --remove-orphans
	$(DKC) rm -f

clear:
	docker stop $(docker ps -qa); docker rm $(docker ps -qa); docker rmi -f $(docker images -qa); docker volume rm $(docker volume ls -q); docker network rm $(docker network ls -q) 2>/dev/null

clean: down clean-containers clean-volumes clean-images info
fclean: down clean-containers fclean-volumes fclean-images info
re: down clean all
reset-all: fclean install all
