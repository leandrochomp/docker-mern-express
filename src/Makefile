export PATH_DEPLOY=.deploy

.PHONY: .env

env-%: # Check for specific environment variables
	@ if [ "${${*}}" = "" ]; then echo "Environment variable $* not set"; exit 1;fi