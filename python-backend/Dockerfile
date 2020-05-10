FROM python:3.7.3
WORKDIR /app
RUN pip install pipenv
COPY ./Pipfile ./Pipfile.lock /app/
RUN pipenv install --system
COPY . /app/
CMD python main.py
