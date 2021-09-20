.PHONY:	coverage test start lint
test:
	coverage run -m unittest discover test
	coverage xml
lint:
	flake8 --max-line-length 120
coverage:
	coverage report -m
start:
	uvicorn api.server:app --reload