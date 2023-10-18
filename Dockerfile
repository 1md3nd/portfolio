FROM python:3.11.5-alpine3.18
LABEL maintainer="1md3nd"

ENV PYTHONUNBUFFERD 1
COPY ./requirements.txt /requirements.txt
COPY ./portfolio /portfolio

WORKDIR /portfolio
EXPOSE 8000

RUN python -m venv /py &&\
    /py/bin/pip install --upgrade pip && \
    /py/bin/pip intall -r /requirements.txt && \ 
    adduser --disabled-password --no-create-home app

ENV PATH="py/bin:$PATH"

USER app


