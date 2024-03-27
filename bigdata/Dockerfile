# 베이스 이미지 설정 (Python 3.8 기반의 공식 이미지 사용)
FROM python:3.8.9

WORKDIR /app

RUN python -m pip install --upgrade pip --user

RUN pip freeze > requirements.txt

# 필요한 패키지 설치
RUN pip install -r requirements.txt

COPY bigdata/. app/ .

COPY . .

EXPOSE 8000

# 컨테이너 실행 명령 설정 (uvicorn으로 FastAPI 앱 실행)
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]