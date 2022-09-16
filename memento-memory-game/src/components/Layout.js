import { useState, useEffect} from 'react'
import InstructionModal from './InstructionModal'
import { Slide } from 'react-slideshow-image';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

function Layout({ images, add, score }) {
  const [shwIMdl,setShwIMdl] = useState(true)

  const flsIMdl = () =>{setShwIMdl(false)}



  return (
      <div>

    { shwIMdl && <InstructionModal
                  chng={flsIMdl}
                  arr={images}/> }


      <div className="gameOverModal"></div>
      <div className="victoryModal"></div>

      <h1>Memento Memory Game</h1>

      <div className="scoreBar">
      <h2>Score:{score} </h2>
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
        {images.map((fadeImage, index) => (
          <div className="each-fade" key={index}>
            <div className="image-container" style={{width:'100%',height:'400px',}}>
              <img src={fadeImage.url} style={{width:'100%',height:'100%'}} /*onClick={()=>{console.log("HEY" + fadeImage.caption)}}*/
              onClick={()=>add(fadeImage.caption)} />
            </div>
            </div>
        ))}
      </Fade>





      </div>



{/*
<a href="https://www.npmjs.com/package/react-slideshow-image">Website Used</a>
*/}
      </div>



    );

  }

  export default Layout;
