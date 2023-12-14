# Build Stage
FROM python:3.11.5-alpine3.18 as build-stage

LABEL maintainer="1md3nd"

ENV PYTHONUNBUFFERED 1

COPY ./requirements.txt /requirements.txt

RUN python -m venv /py && \
    /py/bin/pip install --upgrade pip && \
    /py/bin/pip install -r /requirements.txt

# Final Stage
FROM python:3.11.5-alpine3.18

LABEL maintainer="1md3nd"

ENV PYTHONUNBUFFERED 1

COPY --from=build-stage /py /py
COPY . /portfolio

WORKDIR /portfolio
EXPOSE 8000

RUN adduser --disabled-password --no-create-home app

USER app

ENV PATH="/py/bin:$PATH"

CMD ["/py/bin/python", "manage.py", "runserver", "0.0.0.0:8000"]
