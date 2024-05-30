all: build

clean:
	rm -rf .vitepress/cache
	rm -rf .vitepress/dist

build: build-assets build-tags lint
	npm run docs:build

build-assets:
	imagemin assets/* \
		--plugin.webp.quality=75 \
		--plugin.webp.method=6 \
		-o src/assets/images
	svgo --config svgo.config.cjs -rf src/assets/images -o src/assets/images

build-tags:
	bin/build-tags

rebuild-tags:
	rm -r src/tags/*/index.md
	bin/build-tags

lint:
	npx eslint --cache --ext '.js,.vue,.mts' .vitepress/

cs-fix:
	npx eslint --cache --ext '.js,.vue,.mts' .vitepress/ --fix

install-pre-commit:
	cp bin/pre-commit .git/hooks/
	git config core.hooksPath .git/hooks

update:
	npm update
	ncu -u --target minor
