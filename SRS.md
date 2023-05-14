## 소개
---
### 프로젝트 요약
취업용 포트폴리오를 작성하기 위한 블로그를 만드는 프로젝트이다.
주로 liveshare를 이용해 2명이서 제작한 프로젝트이다.
<br/>
사용할 프레임워크는 react, nestjs 이며, 배포환경은 github pages, cloudtype 이다.
<br/>
일반적인 블로그와 비슷한 형태를 구현할예정. 
단, 댓글 기능은 만들지 않고 블로그 주인장만 로그인해서 글을 작성하게 만들예정.
### 목표
1. 깃 커밋 잘남기기
2. 제작기간 설정과 기간준수
3. 테스트코드 작성
4. 의사결정 노트? 작성
5. OAuth2.0 native 구현하기. (단, 어려울시 jwt나 github OAuth2.0으로 변경예정.)
### 기간
총 일정: 23.05.13 ~ 23.06.30
SRS - 2~3일
front
게시판 1주일
admin page 2주
backend
게시판 - 1일
검색 - 1일
카테고리 - 1주일
인증 - 1주일
cms - 2주
tag manager - 1주일
deploy - 3
여유(test) - 1일
검색엔진 등록 - 1일
### 사용할 기술들
#### frontend
- react
- react-router-dom
- mui
- recoil
- toastui editor
- axios
#### backend
- nestjs
- typeorm
- OAuth2.0 (native) | JWT
## 요구 사항 개요
---
### 사용자 프로필
1. 주인장
블로그에 주인으로써 모든 글에 CRUD할 권한이 있다.
2. 방문객
블로그에 방문한 사람으로써 글을 읽고 검색하는 권한이 존재한다.
### 기능 요구 사항
1. 주인장은 rich text editor를 이용해 글을 작성 및 수정이 가능하다.
2. 검색바를 통해 블로그 내 게시글 검색
3. 게시물 마다 조회수 만들기
4. (TBD)
### 비기능 요구 사항
1. 카테고리 나누기
2. 검색엔진 검색가능
3. google tag manager # Microsoft Clarity
4. og meta data
5. (TBD)
## 시스템 기능 요구 사항
---
### 사용자 기능 요구 사항
1. 검색기능
2. 검색엔진 최적화
### 관리자 기능 요구 사항
1. Content Mangement System?
어드민페이지를 만든다고 생각해면 된다.
관리자용 글 작성페이지와 컨텐츠를 총 관리할 수 있는 페이지만들기.
### 시스템 인터페이스 요구 사항
frontend - UI/UX
게시판
/search
show search result
(TBD)
/category
? 있어야하나
(TBD)
get /post?page={n}&category={cate}&query={query}
show pagenation and filter by category or query
어드민페이지
/admin
backend - API DOCS?
prefix: /api
---
get /category
show filter post
get /post/{uid}
show uid post
get /api/post?offset={n}&limit={m}&category={cate}&query={query}
post pagenation and filter by category or query
post /api/post
create new post
get /api/post/{uid}
get uid post
put /api/post/{uid}
update uid post
delete /api/post/{uid}
delete uid post
post /search
post like search
prefix: /api/admin
---
get /
content management page
get /login
login page
delete /logout
logout
지금 애매함 admin페이지는 백엔드에서 전부 쏴줘야하나
일단 필요한 url path 다 적고 front랑 back 나눠야할듯
get /edit/{uid} ?
rich editor

---
### 데이터 설계 요구 사항
ERD 
BOARD
UID: int
TITLE: string
BODY: string | XML #차후 선택예정
CREATE_AT: datetime
HIDDEN_AT: datetime
DELETE_AT: datetime? #soft delete 하자 혹시모르니까
Category
UID: int
NAME: string # 중복가능
PARENT: Category?
CHILDREN: Category[]
DELETE_AT: datetime
USER
ID: string
PW: string
CREATE_AT: datetime
UPDATE_AT: datetime

---
### 보안 요구 사항
1. github secret
모든 코드는 github에 공개될 예정이기 때문에 github secret에서 키를 관리해야한다.
## 비기능적 요구 사항
---
### 성능 요구 사항
검색을 제외한 모든 페이지는 30ms이내에 로딩 가능하도록.
### 신뢰성 요구 사항
모든 코드는 테스트드리븐으로 작성되야 한다.
### 사용성 요구 사항
모든 기능이 간결하게 이루어져 있어야 한다.
dark mode
### 기타 요구 사항
prettier로 코드 포매팅하기.
github action으로 CI/CD 구현
## 기타 요구 사항
---
### 개발 요구 사항
repo관리는 frontend와 backend 2개의 repo로 관리하며, 
SRS와 의사결정노트는 backend에서 관리한다.
repo 주소들:
 - front: https://github.com/1tang2bang92/1tang2bang92.github.io
 - back: https://github.com/1tang2bang92/blog_backend
API 요청 최소화
개발시에는 sqlite로 데이터 관리하며,
production환경에선 postgresql로 연결
### 유지 보수 요구 사항
어드민 페이지를 통해 모든 컨텐츠를 관리할 수 있어야한다.
### 기타 요구 사항
## 참조 자료
---
### 참조 문서
frontend
https://react.dev/reference/react
https://reactrouter.com/en/main
https://recoiljs.org/docs/introduction/getting-started/
https://mui.com/material-ui/getting-started/overview/
https://axios-http.com/kr/docs/intro
https://ui.toast.com/tui-editor
backend
https://docs.nestjs.com/
https://typeorm.io/
https://oauth.net/specs/
database
https://www.postgresql.org/files/documentation/pdf/15/postgresql-15-US.pdf
enviroment
https://docs.github.com/ko/pages
https://docs.cloudtype.io/guide/welcome/intro
security
https://docs.github.com/ko/actions/security-guides/encrypted-secrets
CI/CD
https://docs.github.com/ko/actions
### 참조 자료

---
## 용어사전
---
주인장: 블로그를 총괄하는 사람
방문객: 블로그에 방문하는 사람
어드민페이지: 