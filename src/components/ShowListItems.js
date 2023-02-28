import { useState } from "react";
import axios from "axios";

export function ShowListItems({ items, token }) {
  // const [checkboxIcon, setCheckBoxIcon] = useState_();

  console.log(items);

  const handleCheckBox = (i) => {
    console.log("id: " + i.id);
    console.log("check_box :" + i.check_box);

    const newCheck = !i.check_box;

    axios.patch(
      `https://safe-plains-62725.herokuapp.com/items/${i.id}/`,
      {
        check_box: newCheck,
      },
      {
        headers: {
          authorization: `token ${token}`,
        },
      }
    );
  };

  return (
    <div>
      {items.map((item) => (
        <div className="item-entry">
          <span
            className="material-symbols-outlined"
            onClick={() => handleCheckBox(item)}
          >
            {`${item.check_box}`}
          </span>
          <span key={item.id}>{item.item}</span>
        </div>
      ))}
    </div>
  );
}
