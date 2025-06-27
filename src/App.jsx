import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; //폰트어썸 기본 연결
/* 개별 fontawesomeicon 불러오기 */
//import { faFacebook,faInstagram } from '@fortawesome/free-brands-svg-icons';//아이콘 연결
//import { faArrowLeft,faArrowRight } from '@fortawesome/free-solid-svg-icons';
import * as brandIcon from '@fortawesome/free-brands-svg-icons';
import * as ClassicIcon from '@fortawesome/free-solid-svg-icons';
//컴퍼넌트 호출
import Header from './Header';
import Todo from './Todo';
import List from './List';

function App(){
  return(
    <div id="wrap" style={{
        backgroundColor:'#eee',
        width:'420px', height:'80vh',
        margin:'0 auto',
        padding: '30px 15px',
      }}>
      <Header />{/* 태그가 아닌 컴포넌트 호출 */}
      <Todo />
      <ul style={{
        padding: '5px',
      }}>
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
      </ul>
    </div>
  )
}

export default App