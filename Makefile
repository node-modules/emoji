TESTS = test/*.test.js
TESTTIMEOUT = 1000
REPORTER = spec
MOCHA_OPTS =

complie:
	@python bin/create_emoji_js.py

sync:
	@sh bin/syncdata.sh

install:
	@npm install --registry=http://registry.cnpmjs.org --cache=${HOME}/.npm/.cache/cnpm

test: install
	@NODE_ENV=test ./node_modules/.bin/mocha \
		-R $(REPORTER) \
		--timeout $(TESTTIMEOUT) \
		$(MOCHA_OPTS) \
		$(TESTS)

test-cov-html:
	@rm -f coverage.html
	@EMOJI_COV=1 $(MAKE) test MOCHA_OPTS='--require blanket' REPORTER=html-cov > coverage.html
	@ls -lh coverage.html

test-cov: test-cov-html
	@EMOJI_COV=1 $(MAKE) test MOCHA_OPTS='--require blanket' REPORTER=travis-cov

test-all: test test-cov

test-coveralls:
	@$(MAKE) test
	@echo TRAVIS_JOB_ID $(TRAVIS_JOB_ID)
	-@$(MAKE) test MOCHA_OPTS='--require blanket' REPORTER=mocha-lcov-reporter | ./node_modules/coveralls/bin/coveralls.js

contributors: install
	@./node_modules/.bin/contributors -f plain -o AUTHORS

.PHONY: test
