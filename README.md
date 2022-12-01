# Emotion Diary
## 페이지 라우팅 1 - React Router 기본
- npm i react-router-dom@6 설치
- import BrowserRouter
- Link 컴포넌트를 이용한 페이지 이동


## 페이지 라우팅 2 - React Router 응용
- Path Variable | useParams 
  - 경로 변수 
  - /diary/1  -> 1번일기
  - `const {id} = useParams();`

  
- Query String | useSearchParams
  - url과 함께 data를 전달 할 수 있음
  - /edit?id=10&mod=dark
  - `const [searchParams, setSearchParams] = useSearchParams();`
  - `const id = searchParams.get('id');`
  - `const qsChange = () => setSearchParams({name: 'min', age: '30'});`


- Page Moving | useNavigate :
  - 로그인 안된 사용자가 마이페이지로 가려고 할 때
  - `const navigate = useNavigate();`
  - `const goHome = () => navigate('/');`


## 프로젝트 기초 공사 1
- 폰트, 레이아웃, 이미지, 공통 컴포넌트 세팅
- MyButton: type 이 아닌 것은 default로 세팅


## 프로젝트 기초 공사 2
- useReducer
- Context


## 페이지 구현 - 홈(/)
### `header`

- `<` 왼쪽 버튼 : 전 달 페이지 이동
- `년 월` : 현재 해당 년, 월
- `>` 오른쪽 버튼 : 다음 달 페이지 이동
- 해당 월에 맞는 일기리스트만 출력되게 하기 (useEffect)
- 일기리스트와, 현재날짜가 바뀌게 되면 일기리스트 리렌더링 !

### `DiaryList`

- `DiaryList.js` 컴포넌트 생성 
- 날짜순, 감정순 정렬 기능
- ControlMenu (셀렉트 메뉴 컴포넌트)
  - value: 값
  - onChange: 클릭해서 변경된 값
  - optionList: 정렬 리스트들
- getProcessedDiaryList (필터 기능)
  - dayFilter: 날짜순 필터
  - emotionFilter: 감정순 필터
  - copyList: 원본 배열을 건들지 않기 위해 깊은 복사한 배열을 사용

- ### `DiaryItem`

- `DiaryItem.js` 컴포넌트 생성 
  - 이미지 썸네일 
  - 날짜, 내용
  - 수정하기 버튼