import { useState } from 'react'
import { Slide } from 'react-slideshow-image';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import img1 from '../images/img1.png'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import img4 from '../images/img4.jpg'
import img5 from '../images/img5.png'
import img6 from '../images/img6.jpg'

const slideImages = [
  {
    url: img1,
    caption: 'Slide 1'
  },
  {
    url: img2,
    caption: 'Slide 2'
  },
  {
    url: img3,
    caption: 'Slide 3'
  },
  {
    url: img4,
    caption: 'Slide 4'
  },
  {
    url: img5,
    caption: 'Slide 5'
  },
  {
    url: img6,
    caption: 'Slide 6'
  }
];



function Layout() {


  return (
      <div>
      <h1>Memento Memory Game</h1>

      <div className="scoreBar">
      <h2>Score:0 </h2>
      </div>




      <div className="slide-container">

    {  /*slide functioniality below---uncomment to use, then comment out fade*/ }

      {/*
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
            <div style={{width:'100%',height:'400px',}}>
            <img src={slideImage.url} style={{width:'100%',height:'100%'}} onClick={()=>{console.log("HEY" + slideImage.caption)}}></img>
            </div>
                <span>{slideImage.caption}</span>
              </div>

          ))}
        </Slide>
        */}

{/*fade functioniality-uncomment to use, then comment out slide*/}

        <Fade>
        {slideImages.map((fadeImage, index) => (
          <div className="each-fade" key={index}>
            <div className="image-container" style={{width:'100%',height:'400px',}}>
              <img src={fadeImage.url} style={{width:'100%',height:'100%'}} onClick={()=>{console.log("HEY" + fadeImage.caption)}}/>
            </div>
            <h2>{fadeImage.caption}</h2>
          </div>
        ))}
      </Fade>





      </div>




<a href="https://www.npmjs.com/package/react-slideshow-image">Website Used</a>

      </div>



    );

  }

  export default Layout;
