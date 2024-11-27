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

restart-service:
	@if [ -z "$(SERVICE)" ] || [ -z "$(VOLUME)" ]; then \
		echo "Usage: make restart-service SERVICE=nom_du_service VOLUME=nom_du_volume"; \
		echo "Example: make restart-service SERVICE=postgres VOLUME=matcha_postgres_data"; \
		exit 1; \
	fi
	docker compose -f docker-compose.dev.yml stop $(SERVICE)
	docker compose -f docker-compose.dev.yml rm -f $(SERVICE)
	docker volume rm $(VOLUME) || true
	docker compose -f docker-compose.dev.yml up -d $(SERVICE)

re-prod: stop-prod clean prod

.PHONY: default dev dev-build prod stop stop-prod clean status re re-prod