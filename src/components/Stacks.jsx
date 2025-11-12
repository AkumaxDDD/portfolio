import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';
import jsLogo from '/assets/javascript-1.svg';
import htmlLogo from '/assets/html-1.svg';
import cssLogo from '/assets/css-3.svg';
import mysqlLogo from '/assets/mysql-3.svg';
import pythonLogo from '/assets/python-5.svg';
import qtLogo from '/assets/qt.svg';
import expressLogo from '/assets/icons8-expresar-js.svg';
import nodeLogo from '/assets/nodejs-horizontal.svg';
import './Stacks.css';

function Stacks() {
  return (
    <>
      <div className='container-stacks'>
         <h1 className="titulo">Mis Stacks</h1>
      <div className="stacks">
        <div className="stack-item">
          <a href="https://www.python.org/" target="_blank">
            <img src={pythonLogo} className="logo" alt="Python logo" />
          </a>
        </div>
        <div className="stack-item">
          <a href="https://expressjs.com/" target="_blank">
            <img src={expressLogo} className="logo" alt="Express logo" />
          </a>
        </div>
        <div className="stack-item">
          <a href="https://doc.qt.io/qt-6/qtdesigner-manual.html" target="_blank">
            <img src={qtLogo} className="logo" alt="Qt logo" />
          </a>
        </div>
        <div className="stack-item">
          <a href="https://www.mysql.com/" target="_blank">
            <img src={mysqlLogo} className="logo" alt="MySQL logo" />
          </a>
        </div>
        <div className="stack-item">
          <a href="https://developer.mozilla.org/es/docs/Web/HTML" target="_blank">
            <img src={htmlLogo} className="logo" alt="HTML logo" />
          </a>
        </div>
        <div className="stack-item">
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
        </div>
        <div className="stack-item">
          <a href="https://developer.mozilla.org/es/docs/Web/JavaScript" target="_blank">
            <img src={jsLogo} className="logo" alt="JavaScript logo" />
          </a>
        </div>
        <div className="stack-item">
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo" alt="React logo" />
          </a>
        </div>
        <div className="stack-item">
          <a href="https://developer.mozilla.org/es/docs/Web/CSS" target="_blank">
            <img src={cssLogo} className="logo" alt="CSS logo" />
          </a>
        </div>
        <div className="stack-item">
          <a href="https://nodejs.org/es" target="_blank">
            <img src={nodeLogo} className="logo" alt="Node.js logo" />
          </a>
        </div>
      </div>
      </div>
     
    </>
  );
}

export default Stacks;
