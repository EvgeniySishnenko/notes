import React from "react";
import PropTypes from "prop-types";

function Form(props) {
  function handleForm(e) {
    e.preventDefault();

    props.onAddNote(e.target.txt.value);
    e.target.txt.value = "";
  }
  return (
    <form onSubmit={handleForm}>
      <label htmlFor="">
        <h3 className="shrt-txt">New Note</h3>
        <textarea name="txt" id="" cols="30" rows="10"></textarea>
      </label>
      <button>Добавить</button>
    </form>
  );
}
Form.propTypes = {
  onAddNote: PropTypes.func.isRequired,
};
export default Form;
