import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="page-footer font-small blue pt-4 d-xs-flex">
    <div className="container-fluid text-center text-md-left bg-info">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase mt-3">A Cabaninha</h5>
                <p>Nos siga para mais informações</p>
                <p>Endereço: </p>
                <p>Facebook: </p>
                <p>Whatsapp: </p>
                <p>Telefone: </p>
                <p></p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3 mt-3">
                <ul className="list-unstyled">
                    
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3 mt-3">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled">
                    <li className='mb-3'><a href="#home">Home</a></li>
                    <li className='mb-3'><a href="https://maps.app.goo.gl/dBnEN8mzVMNQJ7cRA">Endereço</a></li>
                    <li className='mb-3'><a href="https://www.facebook.com/cabaninhaitu">Facebook</a></li>
                    <li className='mb-3'><a href="https://chat.whatsapp.com/IkyBdIMbLoW6YoWfXJ2QFJ">Whatsapp</a></li>
                    <li className='mb-3'><a href="#">11 97275-8714</a></li>
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3 bg-info">Cabaninha De Santo Antonio De Aquino
        <a href=""> Itu, 2024</a>
    </div>

</footer>
  )
}

export default Footer