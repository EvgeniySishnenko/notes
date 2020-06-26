import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import List from "./List";
import Form from "./Form";
function Notes() {
  const [input, setInput] = useState();
  const [items, setItems] = useState();
  useEffect(() => {
    addDOM();
  }, []);
  function updateDOM(result) {
    setItems(result);
  }
  function addDOM() {
    fetch("http://localhost:7777/notes")
      .then((response) => response.json())
      .then((result) => {
        setItems(result);
      })
      .catch((e) => console.log(e));
  }

  function addNote(value) {
    const obj = {
      id: nanoid(),
      content: value,
    };

    fetch("http://localhost:7777/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(obj),
    }).catch(function (error) {
      console.log(error);
    });

    fetch("http://localhost:7777/notes")
      .then((response) => response.json())
      .then((result) => {
        updateDOM(result);
      })
      .catch((e) => console.log(e));
  }
  function delNote(id) {
    fetch(`http://localhost:7777/notes/${id}`, {
      method: "delete",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    }).catch(function (error) {
      console.log(error);
    });
  }
  function btnUpdateNotes() {
    fetch("http://localhost:7777/notes")
      .then((response) => response.json())
      .then((result) => {
        updateDOM(result);
      })
      .catch((e) => console.log(e));
  }
  return (
    <>
      <h2>Notes</h2>
      <button onClick={btnUpdateNotes} type="submit">
        Обновить
      </button>
      <List onDelNote={delNote} obj={items} />
      <Form onAddNote={addNote} />
    </>
  );
}

export default Notes;
