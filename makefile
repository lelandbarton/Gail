

all: build test


build: clean
	@rm -rf build
	@mkdir -p build
	@cp src/gail build/gail
	@cp -R src/templates build

install: test
	@if [[ -d "$HOME/bin" ]]; then rm $HOME/bin/gail; cp build/gail $HOME/bin/gail; else echo "A 'bin' folder in ${HOME} was not found."; fi
	@rm -rf ${HOME}/.gail
	@cp -R "./build/templates" "${HOME}/.gail"

test: build
	@cp -R test/* build
	@cd build; bash ./tests.sh

clean:
	@rm -rf build
