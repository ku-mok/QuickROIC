FROM python:3.9-slim
WORKDIR /app
ENV PYTHONUNBUFFERED=1 \
    PYTHONDONTWRITEBYTECODE=1 \
    \
    PIP_NO_CACHE_DIR=off \
    PIP_DISABLE_PIP_VERSION_CHECK=on \
    \
    POETRY_VIRTUALENVS_CREATE=false 
COPY ./pyproject.toml ./poetry.lock  /app/
RUN apt-get update && apt-get install make && pip install poetry && poetry install