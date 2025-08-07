// import Message from './Message';

// import Alert from './components/Alert';
//import ImageButton from './components/ImageButton'
import ListGroup from "./components/ListGroup";
import NavBar from "./components/topbar";
function App() {
  const propsExample = {
    items: ["Item 1", "Item 2", "Item 3"],
    heading: "My items",
    onSelectItem: (item: string) => console.log(`Selected: ${item}`),
  };
  return (
    <>
      <div>
        <NavBar />
      </div>
      <ListGroup
        items={propsExample.items}
        heading={propsExample.heading}
        onSelectItem={propsExample.onSelectItem}
      />
    </>
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
