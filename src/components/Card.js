import { Link } from "react-router-dom";

export function CardQuestion({ entry }) {
  return (
    <div style={cardQuestion}>
      <p>{entry.author}</p>
      <p>{entry.optionOne.text}</p>
      <button type="button">
        <Link to={`/questions/${entry.id}`}>View Question</Link>
      </button>
    </div>
  );
}

export function CardUser({ entry }) {
  return (
    <div style={cardUser}>
      <img src={entry.avatarURL} style={avatar} />
      <p>{entry.id}</p>
    </div>
  );
}

const cardQuestion = {
  border: "1px solid #eee",
  margin: "10px",
  padding: "10px",
};

const cardUser = {
  border: "1px solid #eee",
  display: "flex",
  margin: "10px",
  padding: "10px",
};

const avatar = {
  width: "40px",
  height: "40px",
};
