# 베이스 이미지 설정 (Python 3.8 기반의 공식 이미지 사용)
FROM tiangolo/uvicorn-gunicorn-fastapi:python3.8

WORKDIR /app

COPY ./bigdata/requirements.txt ./requirements.txt

RUN pip uninstall certifi

RUN pip install certifi

# 필요한 패키지 설치
RUN pip install --no-cache-dir -r requirements.txt

# 컨테이너 실행 명령 설정 (uvicorn으로 FastAPI 앱 실행)
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]