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

build: install ## Compile the application
	tsc

serve: build ## Create server runtime
	node dist/index.js

