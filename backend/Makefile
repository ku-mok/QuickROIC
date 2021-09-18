.PHONY:	coverage test start
test:
	coverage run -m unittest discover test
	coverage xml
coverage:
	coverage report -m
start:
	uvicorn api.server:app --reload