ALL: build
	git add . && git commit -m "add new" && git push origin main

build:
	redoc-cli build openapi.yaml  -o index.html