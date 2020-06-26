import React, { useState } from "react";
import PropTypes from "prop-types";

import Item from "./Items";
function List({ obj, onDelNote }) {
  return (
    <div className="list">
      {obj === undefined ? (
        <p> Ничего не добавлено</p>
      ) : (
        obj.map((a) => <Item onDelNote={onDelNote} key={a.id} notes={a} />)
      )}
    </div>
  );
}
List.propTypes = {
  obj: PropTypes.array.isRequired,
  onDelNote: PropTypes.func.isRequired,
};
export default List;
