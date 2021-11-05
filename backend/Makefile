.PHONY:	coverage test start lint
test:
	coverage run -m unittest discover test
	coverage xml
lint:
	flake8 --max-line-length 120
coverage:
	coverage report -m
start:
	gunicorn -k uvicorn.workers.UvicornWorker api.server:app -w 4 --bind 0.0.0.0:8000 --reload