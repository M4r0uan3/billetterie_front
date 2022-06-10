import { groupBy } from "lodash";
import React from "react";

const ListGroupe = (props) => {
  const { items, onItemSelect, selectedItem } = props;
  return (
    <ul className="list-group">
      {items.map((item, index) => (
        <li
          key={index}
          className={
            item === selectedItem ? "list-group-item active" : "list-group-item"
          }
          onClick={() => onItemSelect(item)}
        >
          {item.title}
        </li>
      ))}
    </ul>
  );
};

export default ListGroupe;
