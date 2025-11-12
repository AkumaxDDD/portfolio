import './Contacto.css';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function Contacto() {
  const [messageStatus, setMessageStatus] = useState({
    success: false,
    error: false,
    message: ''
  });
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    
    setMessageStatus({ success: false, error: false, message: '' });

    emailjs.sendForm(
      'service_ro9685x', // ID del servicio de EmailJS
      'template_styyjqj', // ID de la plantilla de EmailJS
      e.target,       // Los datos del formulario se envían aquí
      'Tor6K4E3ygOxrtOmC' // Tu public key de EmailJS
    )
    .then((result) => {
      console.log('Mensaje enviado:', result.text);
      e.target.reset();
      setFormData({ user_name: '', user_email: '', message: '' });
      setMessageStatus({
        success: true,
        error: false,
        message: '¡Mensaje enviado con éxito!'
      });
    })
    .catch((error) => {
      console.error('Error al enviar mensaje:', error);
      setMessageStatus({
        success: false,
        error: true,
        message: `Error al enviar el mensaje. Por favor, inténtalo de nuevo o envíame un correo directamente a `
      });
    });
  };

  const mailtoLink = `mailto:gaspar.ahumada101@gmail.com?subject=Contacto desde Portfolio&body=Nombre: ${formData.user_name}%0D%0AEmail: ${formData.user_email}%0D%0A%0D%0AMensaje:%0D%0A${formData.message}`;

  return (
    <div className="contacto">
      <div className="marco-contacto">
        <h2 className="contacto-title">Contacto</h2>
        
        {messageStatus.success && (
          <div className="status-message success">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <span>{messageStatus.message}</span>
          </div>
        )}
        
        {messageStatus.error && (
          <div className="status-message error">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
            <span>
              {messageStatus.message}
              <a href={mailtoLink} className="email-icon" title="Enviar correo">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
            </span>
          </div>
        )}

        <form className="form" onSubmit={sendEmail}>
          <div className="input-group">
            <label htmlFor="user_name">Nombre</label>
            <input 
              type="text" 
              name="user_name" 
              value={formData.user_name}
              onChange={handleInputChange}
              placeholder="Tu nombre" 
              required 
            />
          </div>
          <div className="input-group">
            <label htmlFor="user_email">Correo</label>
            <input 
              type="email" 
              name="user_email" 
              value={formData.user_email}
              onChange={handleInputChange}
              placeholder="Tu correo" 
              required 
            />
          </div>
          <div className="input-group">
            <label htmlFor="message">Mensaje</label>
            <textarea 
              name="message" 
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Tu mensaje" 
              required 
            />
          </div>
          <button className="submit-btn" type="submit">
            <span>Enviar mensaje</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contacto;
