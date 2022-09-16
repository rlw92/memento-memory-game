import '../App.css';

function InstructionModal( {chng,arr} ) {
  return (
    <div>

    <div className="modal">

       <div className="modal-content">
       <span className="close" onClick={chng}>&times;</span>
       <h2>Memento Memory Game</h2>
       <p>The rules are simple:</p>
        <p>Don't click any image twice!</p>
        <p>Try to get to a maximum score of <strong>{arr.length}</strong>.</p>
        <p>Good luck!</p>


       </div>
</div>
    </div>
  );
}

export default InstructionModal;
