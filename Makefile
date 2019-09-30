LINT_FILES = \
	'src/**/*.js' \
	'test/**/*.js'

AVA_CONFIG = 'ava.config.js'
AVA_CONFIG_CI = 'ava.ci-config.js'

.PHONY: bootstrap build clean clean-all clean-cache coverage fix fix-staged flow lint lint-verbose test watch

bootstrap:
	@if [[ -z $$(command -v yarn) ]]; then \
		echo "\nNo 'yarn' detected. We used yarn to manage our dependencies.\n"; \
		exit 1; \
	fi; \
		yarn install --frozen-lockfile;

build:
	make clean
	@BABEL_ENV=production \
		node_modules/.bin/rollup -c

watch:
	@BABEL_ENV=development \
		node_modules/.bin/rollup -cw

lint:
	@node_modules/.bin/eslint --cache $(LINT_FILES)

lint-verbose:
	@node_modules/.bin/eslint --format=codeframe $(LINT_FILES)

fix:
	@node_modules/.bin/eslint --fix $(LINT_FILES)

fix-staged:
	@git status --porcelain | sed -n -e 's/^[AM]..//p' | xargs ./node_modules/.bin/eslint --fix

flow:
	@node_modules/.bin/flow status --strip-root --color=always --show-all-branches

test-only:
	@BABEL_ENV=test node_modules/.bin/ava \
		--config $(AVA_CONFIG)

test-watch:
	@BABEL_ENV=test node_modules/.bin/ava \
		--config $(AVA_CONFIG) \
		--watch

test: lint flow test-only

test-coverage:
	@set -e
	BABEL_ENV=test BABEL_COVERAGE=true make build
	BABEL_ENV=test node_modules/.bin/nyc node_modules/.bin/ava
	node_modules/.bin/nyc report --reporter=html

test-ci-coverage:
	@set -e
	BABEL_ENV=test BABEL_COVERAGE=true make bootstrap
	make build
	BABEL_ENV=test node_modules/.bin/nyc node_modules/.bin/ava
	node_modules/.bin/nyc report --reporter=json
	node_modules/.bin/codecov -f coverage/coverage-final.json

clean-cache:
	@rm -rf \
		.eslintcache \
		.nyc_output
	@node_modules/.bin/flow stop

clean: clean-cache
	@rm -rf \
		lib

clean-all: clean
	@rm -rf \
		coverage \
		node_modules
