import { useState } from "react";
import { Carousel as BaseCarousel } from "react-bootstrap";
import styled from "styled-components";

const CarImage = styled.div<{ pic: string }>`
  width: 100%;
  background-image: url(${ props => props.pic });
  background-size: cover;
  background-position: center;
  position: relative;
  min-height: 300px;
  height: 50vh;
`

const Carousel = styled(BaseCarousel)`
  border-bottom: 2px solid #383838c6;

  & .carousel-indicators {
    bottom: unset;
    right: 0;
    left: 0;
    top: 75%;

    margin: unset;
  }
`

const CarouselCaption = styled(Carousel.Caption)<{dark? : boolean }>`
  z-index: 2;
  bottom: 0;
  background: #09192985;
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  border-top: solid 1px white;
  left: 0;
  right: 0;
  padding-top: 10px;
  padding-bottom: 1px;
  & > div {
    ${ props => props.dark && "color: #fafafa;" }
  }
`

type CarouselSlide = {
    pic : string, title : string, subtitle? : string, dark? : boolean
}

interface CarouselProps {
    slides: CarouselSlide[]
    
}

export type {
    CarouselProps,
    CarouselSlide
}

export const MyCarousel = (props : CarouselProps) => {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex : number) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel style={{ maxHeight: "700px", overflow: "hidden" }} activeIndex={index} onSelect={handleSelect}>
        { props.slides.map((slide, i) => (
            <Carousel.Item key={i}>
                <CarouselCaption dark={slide.dark}>
                    <div>
                        <h3>{slide.title}</h3>
                        <p>{slide.subtitle}</p>
                    </div>
                </CarouselCaption>
                <CarImage
                className="d-block w-100"
                pic={slide.pic}
                />
            </Carousel.Item>
        )) }
      </Carousel>
    );
  }