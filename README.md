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
### header

- `<` 왼쪽 버튼 : 전 달 페이지 이동
- `년 월` : 현재 해당 년, 월
- `>` 오른쪽 버튼 : 다음 달 페이지 이동
- 해당 월에 맞는 일기리스트만 출력되게 하기 (useEffect)
- 일기리스트와, 현재날짜가 바뀌게 되면 일기리스트 리렌더링 !

### DiaryList

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

### DiaryItem

- `DiaryItem.js` 컴포넌트 생성
  - 이미지 썸네일
  - 날짜, 내용
  - 수정하기 버튼




## 페이지 구현 - 일기 쓰기(/new)

### 오늘의 감정
- isSelected(Boolean) 를 통해, 현재 클릭한 emotion id 를 얻어서, css 로 background 변경처리


## 페이지 구현 - 일기 수정(/edit)
- useParams : path Variable의 id 값 추출
- useContext : App.js에 있는 data(diaryList) 전달받기
- `diaryList` 에서 id 값을 찾아서 그 내용을 꺼내오기
- targetDiary 를 저장할 state 생성
- isEdit(Boolean) 으로 수정하기, 일기쓰기 판별
- isEdit true 이면 기존 setData를 selectData로 데이터를 change

## 페이지 구현 - 일기 상세(/diary)
- useParams : 해당 일기의 id 값 추출
- useContext : diaryList 받아오기
- 현재 다이어리 state에 할당
- data 유무에 따른 페이지 출력
- getStringDate 공통 컴포넌트로 만들기
- emotionList 공통 컴포넌트 만들기
- view 구현

## 버그 수정 하기
- `App.js` : dataId 의 useRef(6) 초깃값을 6으로 셋팅, 왜냐하면 dummyData 에서 id가 5까지 되어 있으므로
- 오타 수정
- `Home.js` lastDay에 시, 분, 초 그날의 끝인 시간까지 써주어야 한다.


## LocalStorage 를 일기 데이터베이스로 사용하기
- 브라우저에 key-value 값을 Storage에 저장할 수 있다.
- setItem() - key, value 추가
- getItem() - value 읽어 오기
- 로컬스토리지에 저장되는 값들은 기본적으로 문자열로 바껴서 저장된다. (나올때도 동일)
  
