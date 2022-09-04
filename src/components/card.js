import "../styles/index.css";
import { showFormattedDate } from "../utils";
import Button from "./button";

export default function Card ({ id, title, createdAt, body, archived, action }) {
  const deleteNote = (item) => action((notes) => notes.filter((note) => note.id !== item));
  const toggleArchive = (item) => {
    action((notes) =>
      notes.map((note) => {
        if (note.id === item) {
          return { ...note, archived: !note.archived };
        }
        return note;
      }),
    );
  };

  return (
    <article id={id} className="card">
      <header className="card_header">
        <h3 id="heading">{title}</h3>
        <p className="note">{body}</p>
        <small className="date">{showFormattedDate(createdAt)}</small>
      </header>
      <footer className="card_footer">
        <Button eventHandler={() => deleteNote(id)} label='delete' />
        <Button
          eventHandler={() => toggleArchive(id)}
          label={archived ? "unarchived" : "archive"}
        />
      </footer>
    </article>
  );
};
