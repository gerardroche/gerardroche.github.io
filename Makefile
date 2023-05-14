help:
	@echo
	@echo "Usage:"
	@echo "	make <target>..."

imagemin:
	imagemin _assets/* -o assets/

gentags:
	bin/gentags
