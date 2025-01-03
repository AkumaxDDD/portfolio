import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';
import jsLogo from '/assets/javascript-1.svg';
import htmlLogo from '/assets/html-1.svg';
import cssLogo from '/assets/css-3.svg';
import mysqlLogo from '/assets/mysql-3.svg';
import pythonLogo from '/assets/python-5.svg';
import qtLogo from '/assets/qt.svg';
import expressLogo from '/assets/icons8-expresar-js.svg';
import nodeLogo from '/assets/nodejs-horizontal.svg'
import './Stacks.css'

function Stacks() {

  return (
    <>
      <h1 className='titulo'>Mis Stacks</h1>
      <div className='stacks'>
        <table>
          <td>
            <tr>
                <a href="https://react.dev" target="_blank">
                  <img src={pythonLogo} className="logo react" alt="React logo" />
                </a>
            </tr>           
            <tr>
              <a href="https://react.dev" target="_blank">
                <img src={expressLogo} className="logo react" alt="React logo" />
              </a>
            </tr>
          </td>
          <td>
            <tr>
              <a href="https://vitejs.dev" target="_blank">
                <img src={qtLogo} className="logo" alt="Vite logo" />
              </a>
            </tr>
            <tr>
              <a href="https://react.dev" target="_blank">
                <img src={mysqlLogo} className="logo react" alt="React logo" />
              </a>
            </tr>
          </td>
          <td>
            <tr>
              <a href="https://react.dev" target="_blank">
                <img src={htmlLogo} className="logo react" alt="React logo" />
              </a>
            </tr>
            <tr>
              <a href="https://react.dev" target="_blank">
                <img src={viteLogo} className="logo react" alt="React logo" />
              </a>
            </tr>
          </td>
          <td>
            <tr>
              <a href="https://react.dev" target="_blank">
                <img src={jsLogo} className="logo js" alt="Vite logo" />
              </a>
            </tr>
            <tr>
              <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
              </a>
            </tr>        
          </td>
          <td>
            <tr>
              <a href="https://react.dev" target="_blank">
                <img src={cssLogo} className="logo react" alt="React logo" />
              </a>
            </tr>
            <tr>
              <a href="https://react.dev" target="_blank">
                <img src={nodeLogo} className="logo react" alt="React logo" />
              </a>
            </tr>
          </td>
        </table>
      </div>
    </>
  )
}

export default Stacks
