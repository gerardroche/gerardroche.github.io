all: genassets gentags

genassets:
	rm -r assets/*
	imagemin _assets/* -o assets/
	svgo --config svgo.config.js -rf _assets -o assets
	cp assets/zap.svg _includes/zap-svg.html
	cp assets/avatar.svg _includes/avatar-svg.html

gentags:
	bin/gentags
