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
    altText: 'imagen1',
    caption: 'ARDUINO'
  },
  {
    src: require('../../assets/img/planta.jpg'),
    altText: 'Slide 2',
    caption: 'SOBRE NOSOTROS'
  },
  {
    src: require('../../assets/img/cal center.jpg'),
    altText: 'Slide 3',
    caption: 'CONTACTANOS'
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
            <img className="" src={item.src} alt={item.altText} style={{ weigth: "100%", height: "100%" }} />
            <CarouselCaption captionHeader={item.caption} />
            <div className='w-50 text-white bg-carrousel'>
              <div className='p-5'>
                <span>{item.altText}</span>
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