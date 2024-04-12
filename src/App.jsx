import { useState } from 'react'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import NavbarInicio from './Components/Navbar';
import CarouselMain from './Components/CarouselMain';
import CardEventos from './Components/CardEventos';
import Palestras from './Components/Palestras';
import Footer from './Components/Footer';

import ESDE from './assets/ESDE1.png'

import Carousel from 'react-bootstrap/Carousel';

function Cursos() {
  return (
    <div className="container" id='Cursos'>
      <div className="row">

        <div className="col-lg">
        </div>

        <div className="col-lg">

        </div>
        <Carousel data-bs-theme="dark" className='w-100'>
      <Carousel.Item>
        {/* <div className="col-lg">
          <div className="row">
        <img
          className="d-flex w-50"
          style={{height: '350px'}}
          src={ESDE}
          alt="First slide"
        />
        </div>
        </div> */}
        <Carousel.Caption>
          <h5 style={{color: 'black'}}>Esde 1</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-150"
          src="holder.js/800x400?text=Second slide&bg=eee"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=e5e5e5"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      </div>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavbarInicio />
      <CarouselMain />
      <CardEventos />
      <Palestras />
      <Footer />
    </>
  )
}

export default App
