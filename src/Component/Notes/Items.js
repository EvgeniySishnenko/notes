import React from "react";
import PropTypes from "prop-types";

function Item(props) {
  const { notes } = props;
  function onDelNote(e) {
    props.onDelNote(e.target.dataset.id);
  }
  return (
    <div className="item">
      {notes.content}
      <span onClick={onDelNote} data-id={notes.id} className="del">
        del
      </span>
    </div>
  );
}
Item.propTypes = {
  notes: PropTypes.object.isRequired,
  onDelNote: PropTypes.func.isRequired,
};
export default Item;
