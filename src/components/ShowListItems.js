import { useState } from "react";

export function ShowListItems({ items }) {
  console.log(items);

  return (
    <div>
      {/* {items[0].item} */}
      {items.map((item) => (
        <div className="item-entry">
          <span className="material-symbols-outlined">
            check_box_outline_blank
          </span>
          <span>{item.item}</span>
        </div>
      ))}
    </div>
  );
}
