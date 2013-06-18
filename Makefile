TESTS = test/*.test.js
TESTTIMEOUT = 1000
REPORTER = dot
MOCHA_OPTS =

complie:
	@python bin/create_emoji_js.py

sync:
	@sh bin/syncdata.sh

install:
	@npm install

test: install
	@NODE_ENV=test ./node_modules/.bin/mocha \
		-R $(REPORTER) \
		--timeout $(TESTTIMEOUT) \
		$(MOCHA_OPTS) \
		$(TESTS)

test-cov:
	@rm -f coverage.html
	@EMOJI_COV=1 $(MAKE) test MOCHA_OPTS='--require blanket' REPORTER=html-cov > coverage.html
	@EMOJI_COV=1 $(MAKE) test MOCHA_OPTS='--require blanket' REPORTER=travis-cov
	@ls -lh coverage.html

test-all: test test-cov

.PHONY: complie sync test test-cov test-all