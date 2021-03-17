import React from "react";

function ListItems(props) {
  const { id, itemName, price } = props.item;
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {itemName}
      <span className="badge badge-primary badge-pill">{price}</span>
      <span
        className="badge badge-primary badge-pill"
        onClick={() => {
          props.handleRemove(id);
        }}
        style={{ cursor: "pointer" }}
      >
        x
      </span>
    </li>
  );
}

export default ListItems;
