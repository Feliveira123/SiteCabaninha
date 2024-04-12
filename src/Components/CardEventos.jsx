import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import EventosIMG from '../assets/Eventos.jpeg'

const CardEventos = () => {
  return (
    <div className="container justify-content-center mt-5">
    <div className="row">
      <div style={{maxWidth: '95%', textAlign: 'center', fontFamily: 'inherit', boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.35)'}} className="mx-auto col-lg mt-5 mb-5 rounded">
        <h1 className='mt-5'>Nossos Eventos:</h1>
        <p className='fs-4' style={{marginTop: '100px'}}>Realizamos eventos para arrecadarmos renda para a casa, para que possamos realizar nossos trabalos de caridade como: entrega de cestas básicas, entrega de enxovais, festa para o dia das crianças com doação de brinquedos.</p>
        <p className='fs-5' style={{marginTop: '100px'}}>Conheça mais nosso trabalho de caridade!</p>
        <a className="btn btn-primary w-50 mt-5" href="/loginCaritas.html" role="button">Caritas</a>
      </div>
      <div className='col-lg' id="evento">
      <Card className='d-block w-100 m-auto mt-5 mb-5' style={{margin: 'auto', marginTop: '40px', marginBottom: '30px', textAlign: 'center', boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.35)'}}>
          <Card.Img className='d-sm-block' variant="top" src={EventosIMG} style={{width: '100%', marginTop: '0', padding: '0'}}/>
        <Card.Body>
          <Card.Title>Evento panquecas</Card.Title>
          <Card.Text>
            No dia 06/04/2024 teremos nosso evento de panquecas! Encomende já!<br/>
            Embalagem com 4 unidades cada.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Panqueca de carne: R$30,00</ListGroup.Item>
          <ListGroup.Item>Panqueca de palmito: R$30,00</ListGroup.Item>
          <ListGroup.Item>Panqueca de brigadeiro: R$15,00</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Peça a sua já!</Card.Link>
        </Card.Body>
      </Card>
      </div>
    </div>
  </div>
  )
}

export default CardEventos