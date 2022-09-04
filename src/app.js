import { useState, useEffect, Fragment } from "react";
import { FormInput, Header, SectionNotes } from "./components";
import "./styles/index.css";
import { getInitialData } from "./utils";

export default function App() {
  const [data, setData] = useState("");
  const [searchNotes, setSearchNotes] = useState([]);
  const [notes, setNotes] = useState(getInitialData());

  const activeNotes = (searchNotes || notes).filter((note) => !note.archived);
  const archivedNotes = (searchNotes || notes).filter((note) => note.archived);

  useEffect(() => {
    setSearchNotes(notes.filter((note) => note.title.toLowerCase().includes(data.toLowerCase())));
  }, [data, notes]);

  return (
    <Fragment>
      <Header search={data} updateData={setData} updateNotes={setNotes} activeNotes={activeNotes} archivedNotes={archivedNotes} />
      <main className="main">
        <FormInput updateNotes={setNotes} />
        <SectionNotes label='Active Notes' notes={activeNotes} setNotes={setNotes} />
        <SectionNotes label='Archived Notes' notes={archivedNotes} setNotes={setNotes} />
      </main>
    </Fragment>
  );
}

