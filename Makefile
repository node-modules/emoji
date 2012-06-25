TESTS = test/*.js
TESTTIMEOUT = 1000
REPORTER = dot

complie:
	@python bin/create_emoji_js.py

test:
	@NODE_ENV=test ./node_modules/.bin/mocha -R $(REPORTER) --timeout $(TESTTIMEOUT) $(TESTS)

test-cov: lib-cov
	@EMOJI_COV=1 $(MAKE) test REPORTER=progress
	@EMOJI_COV=1 $(MAKE) test REPORTER=html-cov > coverage.html
	@$(MAKE) test-results

test-results:
	@$(MAKE) test REPORTER=markdown > test_results.md

lib-cov:
	@rm -rf ./$@
	@jscoverage lib $@

clean:
	@rm -rf lib-cov
	@rm -f coverage.html

.PHONY: complie test test-cov clean lib-cov test-results