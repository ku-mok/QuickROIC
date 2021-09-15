FROM python:3.9-slim
WORKDIR /app
ENV PYTHONUNBUFFERED=1 \
    PYTHONDONTWRITEBYTECODE=1 \
    \
    PIP_NO_CACHE_DIR=off \
    PIP_DISABLE_PIP_VERSION_CHECK=on \
    \
    POETRY_VIRTUALENVS_CREATE=false 
COPY ./pyproject.toml ./poetry.locl  /app/
RUN pip install poetry && poetry install