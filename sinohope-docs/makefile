ALL: build push

build:
	npm run clear
	npm run clean-all
	npm run build

push:
	git add . && git commit -m "new docs" && git push origin main

i18n:
	npm run write-translations -- --locale zh-Hant
	mkdir -p i18n/zh-Hant/docusaurus-plugin-content-docs/current
	cp -r docs/** i18n/zh-Hant/docusaurus-plugin-content-docs/current
	mkdir -p i18n/zh-Hant/docusaurus-plugin-content-blog
	cp -r blog/** i18n/zh-Hant/docusaurus-plugin-content-blog


.PHONY: ALL build i18n