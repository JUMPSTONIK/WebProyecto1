import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './assets/favicon.ico';
import './assets/components/global.sass';
import {Button} from './assets/components/Buttons';
import {Iconom} from './assets/components/icono';
import {Iconol} from './assets/components/icono';
import {Logo} from './assets/components/icono';
import {Seccion1} from './assets/components/section';


class App extends Component{
    render(){return(
    <div className = 'app'>
        <div className="wrap-seccionHeader">
            <div className="row">
            <Logo></Logo>
            <Button>QUE HACEMOS</Button>
            <Button>QUIENES SOMOS</Button>
            <Button>DONDE TRABAJAMOS</Button>
            <Button>PROYECTOS</Button>
            <Button>NOTICIAS Y BLOGS</Button>
            <Button>DONAR</Button>
            <Iconom></Iconom>
            <Iconol></Iconol>
            </div>
        </div>
        <div className="wrap-seccion1">
        <Seccion1></Seccion1>
        </div>
    </div>
    )
    }
}
import { format } from 'path';

ReactDOM.render(<App />, document.getElementById('root'));