import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ListItems } from "./ListItems";
import { SendItems } from "./SendItem";

export const CreateList = () => {
  const [listTitle, setListTitle] = useState("Test");
  const [items, setItems] = useState([]);

  return (
    <div className="list-display">
      <div className="title-bar">
        <button>Back</button>
        <h1>{listTitle}</h1>
        <button>Share</button>
        <button>Edit</button>
      </div>
      <SendItems
        items={items}
        setItems={setItems}
        listTitle={listTitle}
        setListTitle={setListTitle}
      />
      <ListItems items={items} />
    </div>
  );
};
