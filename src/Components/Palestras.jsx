import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Palestras = () => {
  return (
    <div className='container' id='palestras'>
      <div className="row">
      <div style={{maxWidth: '95%',height: '315px',textAlign: 'center', fontFamily: 'inherit', boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.35)'}} className="mx-auto col-sm mb-5 rounded">
        <h2 className='mt-2'>Palestras:</h2>
        <h4 className='mt-5'>Acompanhe nossas palestras através do nosso canal do Youtube!</h4>
        <a className="btn btn-primary mt-5" href="https://www.youtube.com/@CABANINHAITU" role="button">Visite nosso canal no Youtube <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-youtube" viewBox="0 0 16 16">
  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
</svg></a>
        
      </div>
        <div className='col-lg d-center text-center'>
          <div id="caritas">
          <iframe style={{}} className='container' width="540" height="315" src="https://www.youtube.com/embed/hTHFCWvBTeo?si=EX10BKrgPs45ZdvB" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Palestras