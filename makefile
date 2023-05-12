ALL: update build push

update:
	git pull origin main
	rm -rf ./openloop
	git clone --depth 1 git@github.com:sinohope/openloop.git
	cd ./openloop && rm -rf ./.git

build:
	cd openloop && make build

push:
	git add . && git commit -m "add new" && git push origin main