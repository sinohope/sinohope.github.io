ALL: update push

update:
	git pull origin main
	rm -rf ./sinohope-docs
	rm -rf ./docs/*
	git clone --depth 1 git@github.com:sinohope/sinohope-docs.git
	cd ./sinohope-docs && rm -rf ./.git
	cp -R sinohope-docs/build/* ./docs/

push:
	git add . 
	git commit -m "add new"	&& git push origin main