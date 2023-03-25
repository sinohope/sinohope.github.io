ALL: update build push

update:
	git pull origin main
	rm -rf ./openloop
	git clone git@github.com:sinohope/openloop.git
	cd ./openloop && rm -rf ./.git

build:
	cd openloop && make
	redoc-cli build openapi.yaml  -o index.html
	
push:
	git add . && git commit -m "add new" && git push origin main