ALL: update build push

update:
	git pull origin main
	git submodule update --init --recursive

build:
	cd openloop && make
	redoc-cli build openapi.yaml  -o index.html
	
push:
	git add . && git commit -m "add new" && git push origin main