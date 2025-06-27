import './assets/styles/reset.css';
import './assets/styles/Header.css';

function Header(){ //1
    return(
        <header>
            <h1>To Do List</h1>
        </header>
    )
}

export default Header; //2
/* 3. App.jsx에 호출 `import Header from './Header';` */