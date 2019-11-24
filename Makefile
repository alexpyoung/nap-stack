.DEFAULT_GOAL := help

SHELL := /bin/bash -eo pipefail
PATH := node_modules/.bin:$(PATH)

help:
	@# https://gist.github.com/prwhite/8168133
	@awk 'BEGIN {FS = ":.*##"; printf "Usage: make \033[36m<target>\033[0m\n"} /^[a-zA-Z_-]+:.*?##/ { printf "  \033[36m%-10s\033[0m %s\n", $$1, $$2 } /^##@/ { printf "\n\033[1m%s\033[0m\n", substr($$0, 5) } ' $(MAKEFILE_LIST)

clean: ## Remove dependencies and build artifacts
	rm -rf node_modules
	rm -rf dist

install: ## Install dependencies
	yarn install

build: ## Compile the application
	rm -rf dist
	tsc

serve: build ## Create server runtime
	node dist/index.js

watch:
	tsc --watch

migration: ## Create migration file
	knex --knexfile src/database/knexfile.ts migrate:make $(name) -x ts

migrate: build ## Apply all new migrations
	knex --knexfile dist/database/knexfile.js migrate:latest

rollback: build ## Apply all new migrations
	knex --knexfile dist/database/knexfile.js migrate:rollback

psql: ## Open a local Postgres shell
	psql -h localhost -p 5432 -U postgres
