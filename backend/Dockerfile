FROM python:3.9-buster As Dev
WORKDIR /app
ENV PYTHONUNBUFFERED=1 \
    PYTHONDONTWRITEBYTECODE=1 \
    PIP_NO_CACHE_DIR=off \
    PIP_DISABLE_PIP_VERSION_CHECK=on \
    POETRY_VIRTUALENVS_CREATE=false 
COPY ./pyproject.toml ./poetry.*  /app/
RUN pip install poetry && poetry install
COPY . /app/