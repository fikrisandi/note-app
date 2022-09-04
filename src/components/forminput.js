import { useState } from "react";
import Input from "./input";
import "../styles/index.css";

export default function FormInput ({ updateNotes }) {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  const createNote = (event) => {
    event.preventDefault();
    const timestamp = new Date().toISOString();

    updateNotes((notes) => [
      ...notes,
      { id: timestamp, title, body: note, createdAt: timestamp, archived: false },
    ]);
  };

  return (
    <form className="form" onSubmit={createNote}>
      <h2 className="heading">Create a note</h2>
      <small className="small">
        Remaining characters: <span className="counter">{50 - title.length}</span>
      </small>
      <Input
        value={title}
        onChange={setTitle}
        type='text'
        placeholder='Isi Judul Catatan'
        id='title'
        name='title'
        required
      />
      <Input
        value={note}
        onChange={setNote}
        type='textarea'
        placeholder='Tulis Catatanmu'
        id='note'
        name='note'
        required
      />
      <Input type='submit' id='submit_form' name='submit_form' value='Create' />
    </form>
  );
};

