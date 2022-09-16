import '../App.css';

function GameOverModal( {chng} ) {
  return (
    <div>

    <div className="modal">

       <div className="modal-content">
       <span className="close" onClick={chng}>&times;</span>
       <h2>Game Over!</h2>
       <p>Feel free to try again!</p>


       </div>
</div>
    </div>
  );
}

export default GameOverModal;
