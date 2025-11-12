
import './Projects.css';
import studio5video from '/assets/studio5.mp4';
import studio5image from '/assets/studio5image.png';
import btuvideo from '/assets/btu.mp4';
import btuimage from '/assets/btuimage.png';
import estacionamientovideo from '/assets/estacionamiento.mp4';
import estacionamientoimage from '/assets/estacionamientoimage.png';
import devbusimage from '/assets/devbusimage.png';
import dbzimage from '/assets/dbzimage.png';
import pokeimage from '/assets/pokeimage.png';
import dbzvideo from '/assets/dbzvideo.mp4';
import simplexvideo from '/assets/simplexvideo.mp4';
import simpleximage from '/assets/simpleximage.png'; 
import recibosvideo from '/assets/recibosvideo.mp4';
import recibosimage from '/assets/recibosimage.png';
import pokedexvideo from '/assets/pokedexvideo.mp4';
import devbusvideo from '/assets/devbus.mp4';
import logoRepo from '/assets/github.svg';

const projects = [
  { id: 1, name: 'Studio5', description: 'React + express + mysql', video: studio5video, image: studio5image, repo:"https://github.com/StudioCincoGym/studiocinco" },
  { id: 2, name: 'Btu Calculador', description: 'python + tkinter', video: btuvideo , image: btuimage, repo:"https://github.com/AkumaxDDD/TKINTER" },
  { id: 3, name: 'Estacionador', description: 'react + express + mysql', video: estacionamientovideo, image: estacionamientoimage, repo:"https://github.com/leo08910/lab4-tp-final" },
  { id: 4, name: 'DevBus', description: 'python + Qt6', video: devbusvideo , image: devbusimage, repo:"https://github.com/AkumaxDDD/DevBus" },
  { id: 5, name: 'DBZ API', description: 'Html + Css + Js', video: dbzvideo,image: dbzimage },
  { id: 6, name: 'POKE API', description: 'Html + Css + Js',video:pokedexvideo , image: pokeimage, repo:"https://github.com/AkumaxDDD/Pokedex" },
  { id: 6, name: 'Simplex Maximizar', description: 'Html + Css + Js',video: simplexvideo, image: simpleximage, repo:"https://github.com/AkumaxDDD/Metodo-Simplex" },
  { id: 6, name: 'Recibos', description: 'python + qt6 + ReportLab + pdf2image',video: recibosvideo, image: recibosimage },
];

const Projects = () => {
  const handleMouseEnter = (event) => {
    const video = event.currentTarget.querySelector('video');
    if (video) {
      video.play();
    }
  };

  const handleMouseLeave = (event) => {
    const video = event.currentTarget.querySelector('video');
    if (video) {
      video.pause();
      video.currentTime = 0; // Reinicia el video
    }
  };

  return (
    <>
    <div className='sub-container'>
    <div className="projects-container">
      {projects.map((project) => (
        <div
          key={project.id}
          className="project-card"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="media-container">
            <img className="project-image" src={project.image} alt={project.name} />
            {project.video ? (
              <>
              
                <video className="project-video" src={project.video} loop controls />
              </>
            ) : (
                <div className="placeholder">No hay video disponible</div>
            )}
          </div>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <div className='repo'>
            {project.repo ? (
              <a href={project.repo} target="_blank" rel="noopener noreferrer">
                <img src={logoRepo} className='logo-repo' alt="GitHub" />
              </a>
            ) : (
              <span className="no-repo">No disponible</span>
            )}
          </div>
        </div>
      ))}
    </div>
    </div>
        
    </>

  );
};

export default Projects;
