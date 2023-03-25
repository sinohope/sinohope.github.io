ALL: update build
	git add . && git commit -m "add new" && git push origin main

update:
	git pull origin main

build:
	redoc-cli build openapi.yaml  -o index.html && cd openloop && make