import "../styles/index.css";
import Card from "./card";

export default function SectionNotes ({ label, notes, setNotes }) {
  return (
    <section>
      <h2 className="heading">{label}</h2>
      {notes.length === 0 ? (
        <p className="empty_note">Belum Ada Catatan.</p>
      ) : (
        <div className="list_of_notes">
          {notes?.map((note) => (
            <Card key={note.id} action={setNotes} {...note} />
          ))}
        </div>
      )}
    </section>
  );
};

