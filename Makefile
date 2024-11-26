DEV_COMPOSE = docker compose -f docker-compose.dev.yml
PROD_COMPOSE = docker compose

default: dev

dev:
	$(DEV_COMPOSE) up
	echo "http://localhost:3000"

dev-build:
	$(DEV_COMPOSE) up --build
	echo "http://localhost:3000"

prod:
	$(PROD_COMPOSE) up --build
	echo "https://localhost"

stop:
	$(DEV_COMPOSE) stop

stop-prod:
	$(PROD_COMPOSE) stop

clean: stop
	docker system prune -af
	docker volume prune -af

status:
	docker ps
	@echo "\n"
	docker images
	@echo "\n"
	docker volume ls
	@echo "\n"
	docker network ls

re: stop clean dev-build

re-prod: stop-prod clean prod

.PHONY: default dev dev-build prod stop stop-prod clean status re re-prod