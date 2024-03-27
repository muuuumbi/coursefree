# python 3.8 기반
FROM python:3.8
# container의 usr/src 경로에서 진행
WORKDIR /usr/src
# requirements.txt를 복사해서 넣기
COPY ./requirements.txt /usr/src/requirements.txt
# app 디렉토리를 복사해서 넣기
COPY ./app /usr/src/app
# pip install requirements.txt 실행
RUN pip install --no-cache-dir --upgrade -r requirements.txt
# start.sh를 복사해서 넣기
COPY start.sh /usr/src
# start.sh 실행
CMD [ "/bin/sh", "start.sh" ]