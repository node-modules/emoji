TESTS = test/*.test.js
TESTTIMEOUT = 1000
REPORTER = spec
MOCHA_OPTS =

complie:
	@python bin/create_emoji_js.py

sync:
	@sh bin/syncdata.sh

install:
	@npm install --registry=http://registry.npm.taobao.org

test: install
	@NODE_ENV=test ./node_modules/.bin/mocha \
		-R $(REPORTER) \
		--timeout $(TESTTIMEOUT) \
		$(MOCHA_OPTS) \
		$(TESTS)

test-cov:
	@EMOJI_COV=1 $(MAKE) test MOCHA_OPTS='--require blanket' REPORTER=travis-cov

test-all: test

contributors: install
	@./node_modules/.bin/contributors -f plain -o AUTHORS

.PHONY: test
