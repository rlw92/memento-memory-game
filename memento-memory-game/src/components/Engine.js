import { useState, useEffect} from 'react'
import Layout from './Layout';
import GameOverModal from './GameOverModal'
import VictoryModal from './VictoryModal'
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


const shuffle = (array) => {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}



function Engine() {
  const [score,setScore] = useState(0);
  const [gameArray,setGameArray] = useState([]);
  const [shwGMdl,setShwGMdl] = useState(false)
  const [shwVMdl,setShwVMdl] = useState(false)

  const flsGMdl = () =>{setShwGMdl(false)}
  const flsVMdl = () =>{setShwVMdl(false)}

  const gameOver = () =>{
    setScore(score-score)
    setGameArray([])
    setShwGMdl(true)
  }

  const gameWin=()=>{
    setShwVMdl(true)
    setScore(score-score)
    setGameArray([])
  }

  const gameContinue = (cap) =>{
    setScore(score+1)
    gameArray.push(cap)
    score===5 ? gameWin() : console.log("uneeded")
  }

  const add = (cap)=>{
    gameArray.includes(cap) ? gameOver() : gameContinue(cap)
}

  useEffect(()=>{
    shuffle(slideImages)
  }
)
  return (
    <div>

    {shwGMdl && <GameOverModal chng={flsGMdl}/>}
    {shwVMdl && <VictoryModal chng={flsVMdl}/>}
    <Layout
    images={slideImages}
    add={add}
    score={score}
    />

    </div>
  );
}

export default Engine;
