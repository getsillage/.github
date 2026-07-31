SHELL := /bin/bash
.SHELLFLAGS := -eu -o pipefail -c

.PHONY: check

check:
	node scripts/check.mjs
