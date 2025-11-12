import { useState } from 'react';
import './My.css';
import githubIcon from '/assets/github.svg';
import linkedinIcon from '/assets/linkedin.svg';
import cvIcon from '/assets/cv.svg';
import cvPdf from '/assets/Cv-Gaspar-Alejandro-Ahumada.pdf';
function My() {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };
  
  const aboutMeText = {
    firstPart: `Hola, soy Técnico Universitario en Programación recibido en la UTN.
    Estoy en búsqueda de trabajo en el mundo IT.`,
    secondPart: `Soy padre de familia y a lo largo de mi vida he trabajado en diferentes rubros,
    pero siempre me atrajo el mundo de la informática y el contenido digital.
    Me gusta programar porque siento que con esta habilidad puedo crear cosas increíbles.
    Soy una persona responsable y tenaz, 
    que no se da por vencido y siempre busca soluciones a los problemas que enfrenta.`
  };
  return (
    <>
      <div className='my'>
      <h1 className='my-name'>Gaspar Alejandro Ahumada</h1>
      <div className='concon'>
          <div className='container'>
          <div className="marco">
            <div className='my-img'></div>  
          </div>
            <div className='text'>
              <p className='about-me'>
                {aboutMeText.firstPart}
                {isExpanded && (
                  <span className="about-me-continue">
                    {aboutMeText.secondPart}
                  </span>
                )}
                {!isExpanded && '...'}
                <a className="see-more"onClick={toggleReadMore}>
                {isExpanded ? 'Ver menos...' : 'Ver más...'}</a>
              </p>
            </div>
        </div>
      </div>
            <div className="social">
        <a href="https://github.com/AkumaxDDD" 
          target="_blank"
          rel="noopener noreferrer"
          className="social-item">
          <img src={githubIcon} className="logo" alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/gasparalejandroahumada/" 
          target="_blank"
          rel="noopener noreferrer"
          className="social-item">
          <img src={linkedinIcon} className="logo" alt="LinkedIn" />
        </a>
        <a 
          href={cvPdf}
          className="social-item" 
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={cvIcon} className="cvlogo" alt="Descargar CV" />
        </a>
      </div>
      </div>

    </>
  )
}

export default My;
