ALL: update build push

update:
	git pull origin main
	rm -rf ./sinohope-docs
	git clone --depth 1 git@github.com:sinohope/sinohope-docs.git
	cd ./sinohope-docs && rm -rf ./.git

build:
	cd sinohope-docs
	cp -r build/* ../docs/

push:
	git add . 
	git commit -m "add new"
	git push origin main