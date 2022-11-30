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

### `npm start`
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
