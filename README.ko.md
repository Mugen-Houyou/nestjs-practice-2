# NestJS 게시판 백엔드 프로젝트

**현재 개발 중**

이 프로젝트는 NestJS 기반 게시판의 백엔드 서비스입니다. PostgreSQL을 데이터베이스로 사용하고, TypeORM을 ORM 기능에 사용하며, JWT 기반 인증을 구현하여 사용자 로그인을 지원합니다.

## 기능

- **NestJS 프레임워크**: NestJS의 모듈화된 아키텍처를 사용하여 확장 가능하고 유지보수 가능한 개발을 지원
- **PostgreSQL 통합**: PostgreSQL을 주요 관계형 데이터베이스로 사용
- **TypeORM**: 데이터베이스 작업을 관리하는 데 쉬운 ORM을 제공
- **JWT 인증**: JSON Web Tokens을 사용하여 API 엔드포인트를 보호
- **모듈화된 구조**: Auth, Users, Board와 같은 도메인별 모듈 및 공유 컴포넌트로 구성
- **Configurable**: 애플리케이션 설정, 데이터베이스 연결 및 JWT 설정을 위해 별도의 구성 파일 지정 가능

## 설치

1. **레포지토리 클론**

   ```bash
   git clone https://github.com/Mugen-Houyou/nestjs-practice-2.git
   cd <repository-directory>
   ```

2. **의존성 설치**

   필요한 패키지를 npm을 사용하여 설치

   ```bash
   npm install
   ```

3. **프로젝트 구성**

   - `src/config` 디렉토리의 구성 파일을 애플리케이션 설정에 맞게 업데이트
   - `ormconfig.json`에서 PostgreSQL 연결 정보를 구성 (예: 사용자 이름, 비밀번호, 데이터베이스)

## 애플리케이션 실행

개발 환경일 경우, 아래 명령어를 사용

```bash
npm run start:dev
```

배포 환경에서는,

1. 프로젝트 빌드

   ```bash
   npm run build
   ```

2. 빌드된 앱 실행

   ```bash
   npm start
   ```

## 기여

항상 개방적인 자세로 생각합니다. 제안이나 개선 사항이 있다면 이슈를 열거나 풀 리퀘스트를 제출해주세요.

## 라이선스

이 프로젝트는 [MIT 라이선스](LICENSE) 하에 배포됩니다.
