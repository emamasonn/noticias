import React, { Component } from 'react';
import Header from './componentes/Header'
import Noticias from './componentes/Noticias'
import Formulario from './componentes/Formulario'

class App extends Component{

  state = {
    noticias: []
  }

  componentDidMount(){
    this.consultarNoticias();

  }

  consultarNoticias = (dato = 'general') => {
    let url = `https://newsapi.org/v2/top-headlines?country=ar&category=${dato}&apiKey=5282733e34684d6386eca22bda66cef8`;
    fetch(url)
    .then(respuesta => {
      return respuesta.json();
    })
    .then(noticias => {
      this.setState({
        noticias: noticias.articles
      });
    });
  }

  render(){
    return(
      <div className="contenedor-app">
          <Header titulo = 'Noticias' />

          <div className="container white contenedor-noticias">
            <Formulario
              consultar = {this.consultarNoticias}
            />
            <Noticias
              noticias= {this.state.noticias}
            />
          </div>
          
      </div>
    );
  }
}

export default App;
