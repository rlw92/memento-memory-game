import '../App.css';

function VictoryModal( {chng} ) {
  return (
    <div>

    <div className="modal">

       <div className="modal-content">
       <span className="close" onClick={chng}>&times;</span>
       <h2>Victory!</h2>
       <p>Well done you got the high score!</p>


       </div>
</div>
    </div>
  );
}

export default VictoryModal;
