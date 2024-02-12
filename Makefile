SHELL = /bin/bash

.PHONY: build
build:
	docker compose build


.PHONY: down
down:
	docker compose down


.PHONY: frontend
frontend:
	cd app && npm run start
	

.PHONY: backend
backend: down
	docker compose up postgres -d
	cd api && \
		npm run restore:deps && \
		npx prisma generate && \
		npm run dev:ts

.PHONY: mock
mock: down
	docker compose up postgres -d
	cd mockServer && \
		npm run restore:deps && \
		npm run dev

.PHONY: prod
prod: down build
	docker compose up


.PHONY: help
help:
	@echo		"Commands:"
	@echo		"frontend:				Runs app dev environment."
	@echo		"backend:				Runs api dev environment."
	@echo		"mock:			  	Runs mock api."
	@echo		"prod:					Simulates production environment."
	@echo		"build:					Build docker images."
	@echo		"down:					Takes down docker compose containers."
