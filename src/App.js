
import './App.css';

function App() {
  return (
    <div className="App">
      <Todo/>
    </div>
  );
}



function Todo({ text ,onSelect,id}) {

return (
<>
<div className="todo_style">

<i onClick={()=>{
onSelect(id)
}} className="fa fa-times" aria-hidden="true"></i>
<li>{text}</li>
</div>


</>
);
}

export default App;



