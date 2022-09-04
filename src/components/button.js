import "../styles/index.css";

export default function Button ({ label, eventHandler }) {
  return (
    <button className="button" type='button' onClick={eventHandler} data-action={label}>
      {label}
    </button>
  );
};


