import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import CaritasIMG from '../assets/Caritas.jpeg'
import EventosIMG from '../assets/Eventos.jpeg'

const CarouselMain = () => {
  return (
    <Carousel data-bs-theme="dark" className="d-sm-block" style={{marginTop: '100px'}}>
      <Carousel.Item>
        <img
          className="d-block mx-auto"
          src="https://github.com/CabaninhaOrgBr/CabaninhaOrgBr.github.io/raw/main/fachada.jpg"
          alt="First slide"
          style={{height: "474px", width: "650px"}}
        />
        <Carousel.Caption>
          <h1 className='text-light '>Nossa casa!</h1>
          <p className='text-light mb-0'>Visite nossa casa na Rua Benjamin Constant, 144</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-sm-flex mx-auto"
          src={EventosIMG}
          alt="Second slide" 
          style={{height: "474px", width: "672px"}}
        />
        <Carousel.Caption>
          <h1 className='text-light '>Evento panquecas</h1>
          <p className='text-light '>Deliciosas panquecas de diversos sabores. Encomende já!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block mx-auto "
          src={CaritasIMG}
          alt="Third slide"
          style={{height: "474px", width: "672px"}}
        />
        <Carousel.Caption>
          <h1 className='text-light '>Cáritas</h1>
          <p className='text-light '>Se cadastre para nos ajudar nos trabalhos de caridade!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselMain