ALL: build push

build:
	npm run clear
	npm run clean-all
	cp openapi/mpc-waas-api/openapi_cn.yaml openapi/mpc-waas-api/openapi.yaml
	npm run build
	cp docs/develop/mpc-waas-api/*.mdx i18n/zh-Hant/docusaurus-plugin-content-docs/current/develop/mpc-waas-api

	npm run clear
	npm run clean-all
	cp openapi/mpc-waas-api/openapi_en.yaml openapi/mpc-waas-api/openapi.yaml
	npm run build
	rm openapi/mpc-waas-api/openapi.yaml

update:
	git pull origin main

push:
	git add . 
	git commit -m "new docs" 
	git push origin main

i18n:
	npm run write-translations -- --locale zh-Hant
	mkdir -p i18n/zh-Hant/docusaurus-plugin-content-docs/current
	cp -r docs/** i18n/zh-Hant/docusaurus-plugin-content-docs/current
	mkdir -p i18n/zh-Hant/docusaurus-plugin-content-blog
	cp -r blog/** i18n/zh-Hant/docusaurus-plugin-content-blog

view: build
	npm run serve

.PHONY: ALL build i18n view