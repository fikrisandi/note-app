import Input from "./input";
import "../styles/index.css";

export default function Header({ search, updateData , activeNotes, archivedNotes }) {
  return (
    <header className="container">
      <h1 className="title">Note-App</h1>
      <Input
        value={search}
        onChange={updateData}
        type='search'
        id='search_note'
        name='search_note'
        placeholder='Cari Disini'
      />
      <div className="row">
        <div className="left_row">
          <h4>Noted Active</h4>
          <div className="count_l">{activeNotes.length}</div>
        </div>
        <div className="right_row">
          <h4>Note Archieved</h4>
          <div className="count_l">{archivedNotes.length}</div>
        </div>
      </div>
    </header>
  );
};

