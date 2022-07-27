import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

//carrusel index
const items = [
  {
    src: require('../../assets/img/arduino.jpg'),
    altText: 'Nuestro Producto',
    caption: 'ARDUINO',
    text1:'Utilizaremos un microcontrolador NodeMCU el cual usa un modulo ESP8266 para conectarse a internet vía wifi, tambien necesitamos un sensor de temperatura y humedad DTH 11, el cual nos entregara los datos que necesitamos',
    text2:'Programaremos el NodeMCU con el IDE de Arduino e importaremos las librerias que necesitaremos. (Podras encontrar el codigo dentro de la carpeta Arduino). Una vez que tengamos el codigo que utilizaremos, sera momento de conectarlo a travez de una api con node.js. Esto nos permitira visualizar los datos realizando peticiones POST a nuestro servidor',
    text3: 'Posteriormente conectaremos nuestra API a la base de datos donde se iran almacenando los datos recolectados, para luego mostrarlos a traves de una pagina web'
  },
  {
    src: require('../../assets/img/planta.jpg'),
    altText: 'Acerca de 2',
    caption: 'SOBRE NOSOTROS',
    text1:'Nuestro Producto Se enfoca en la ',
    text2:'Programaremos el NodeMCU con el IDE de Arduino e importaremos las librerias que necesitaremos. (Podras encontrar el codigo dentro de la carpeta Arduino). Una vez que tengamos el codigo que utilizaremos, sera momento de conectarlo a travez de una api con node.js. Esto nos permitira visualizar los datos realizando peticiones POST a nuestro servidor',
    text3: 'Posteriormente conectaremos nuestra API a la base de datos donde se iran almacenando los datos recolectados, para luego mostrarlos a traves de una pagina web'
  },
  {
    src: require('../../assets/img/cal center.jpg'),
    altText: 'Slide 3',
    caption: 'CONTACTANOS',
    text1:'Utilizaremos un microcontrolador NodeMCU el cual usa un modulo ESP8266 para conectarse a internet vía wifi, tambien necesitamos un sensor de temperatura y humedad DTH 11, el cual nos entregara los datos que necesitamos',
    text2:'Programaremos el NodeMCU con el IDE de Arduino e importaremos las librerias que necesitaremos. (Podras encontrar el codigo dentro de la carpeta Arduino). Una vez que tengamos el codigo que utilizaremos, sera momento de conectarlo a travez de una api con node.js. Esto nos permitira visualizar los datos realizando peticiones POST a nuestro servidor',
    // text3: 'Posteriormente conectaremos nuestra API a la base de datos donde se iran almacenando los datos recolectados, para luego mostrarlos a traves de una pagina web'
  }
];

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
        style={{overflow:"hidden"}}
        onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <div className='d-flex'>
            <img className='w-60' src={item.src} alt={item.altText} style={{width:'85%', height:'620px'}} />
            <CarouselCaption captionHeader={item.caption} />
            <div className='w-50 text-white bg-carrousel'>
              <div className='p-5'>
                <h1 className='text-center'>{item.altText}</h1>
                <br/>
                <p>{item.text1}</p>
                <p>{item.text2}</p>
                <p>{item.text3}</p>
              </div>
            </div>
          </div>
        </CarouselItem>
      );
    });

    return (
      // <div className="overflow-hidden">

      <Carousel

        style={{overflow:"hidden"}}
        // className={{height: "81.7vh"}}
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
      // </div>
    );
  }
}


export default Example;