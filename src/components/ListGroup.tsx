import { Fragment, useState } from "react";
import type { MouseEvent } from "react";





// is this like a struct equivalent but way cooler?? idk
// ok these thjings should be immutable
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}


function ListGroup({items, heading, onSelectItem}: Props) {
  // let items = ["New York", "Los Angelos", "Seattle", "Washington", "obungus"];
  // this is a state hook? yeah yea
  const [selectedIndex, setSelectedIndex] = useState(-1)


  //items = []

  let getMessage = () => {
    return items.length === 0 ? <p>No item found</p> : null;
  };

  let handleClick = (event: MouseEvent) => console.log(event);

  return (
    // not importing fragment and just having empty <> also tells react to use a fragment

    <Fragment>
      <h1>{heading}</h1>
      {getMessage()}

      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={handleClick}
            onMouseOver={() => {setSelectedIndex(index), onSelectItem(item)}}
          >
            {" "}
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
