// import Message from './Message';

// import Alert from './components/Alert';
//import ImageButton from './components/ImageButton'
import NavBar from './components/topbar'
function App() {

  return (
    <div>
      <NavBar />
    </div>
  );
}

export default App;
/*
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "Los Angelos", "Seattle", "Washington", "obungus"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  }
  return (
    <div>
      <ListGroup items = {items} heading = {"aMOgus"} onSelectItem={handleSelectItem} />{" "}
    </div>
  );
}

export default App;
*/