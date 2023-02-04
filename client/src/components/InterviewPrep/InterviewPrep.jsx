import React from 'react'
import '../InterviewPrep/InterviewPrep.css'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { FcNext } from "react-icons/fc";
import { FcPrevious } from "react-icons/fc";
import Card from '../Card/Card';

const InterviewPrep = () => {
  return (
    <>
    <div id="learn_cards">
                           <CarouselProvider className='carousel'
                               naturalSlideWidth={1000}
                               naturalSlideHeight={1025}
                               totalSlides={7}
                               visibleSlides={4}
                               currentSlide={0}
                               interval={5000}
                           >
                               <div id="next_prev_btn">
                                   <ButtonBack id="prev_btn"><FcPrevious size={30} /></ButtonBack>
                                   <ButtonNext id="next_btn"><FcNext size={30} /></ButtonNext>
                               </div>

                               <Slider>
                                   <Slide index={0}><Card name="Stocks"/></Slide>
                                   <Slide index={1}><Card name="Crypto" /></Slide>
                                   <Slide index={2}><Card name="Income Tax" /></Slide>
                                   <Slide index={3}><Card name="SIP" /></Slide>
                                   <Slide index={4}><Card name="Mutual Funds" /></Slide>
                                   <Slide index={5}><Card /></Slide>
                                   <Slide index={6}><Card /></Slide>
                                   {/* <Slide index={6}><Card/></Slide>
                                   <Slide index={7}><Card/></Slide> */}
                               </Slider>
                           </CarouselProvider>
                       </div>
   </>
  )
}

export default InterviewPrep
