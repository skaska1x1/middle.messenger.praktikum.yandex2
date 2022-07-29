import Handlebars from "handlebars";
import tpl from './index.hbs';

const data = {
	h1: 'Title',
	content: 'Содержимое'
}


import './style.css';
import button from './components/button';

import page1 from './pages/page1';
import page2 from './pages/page2';
import login from './pages/login';
import register from './pages/register';
import chats from './pages/chats';
import mainChat from './pages/mainChat';
import profile from './pages/profile';
import profileChange from './pages/profile/profileChange';
import fileNotFound404 from './pages/error/fileNotFound404';
import serverError500 from './pages/error/serverError500';

document.getElementById('root').innerHTML = tpl({
	fname: 'students',
	btn: button('btn1', 'Click this')
});

