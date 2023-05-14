all: genassets gentags

genassets:
	rm -r assets/*
	imagemin _assets/* -o assets/
	imagemin assets/*.png --plugin.webp.quality=95 -o assets/
	imagemin assets/*.jpg --plugin.webp.quality=95 -o assets/
	svgo --config svgo.config.js -rf _assets -o assets
	cp assets/zap.svg _includes/zap-svg.html
	cp assets/avatar.svg _includes/avatar-svg.html

gentags:
	bin/gentags
