import { useState } from "react";
import axios from "axios";

export function ShowListItems({ items, token }) {
  return (
    <div>
      {items.map((item) => (
        <div className="item-entry">
          <span
            className="material-symbols-outlined"
            // onClick={() => handleCheckBox(item)}
          >
            {`${item.check_box}`}
          </span>
          <span key={item.id}>{item.item}</span>
        </div>
      ))}
    </div>
  );
}
