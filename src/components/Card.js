import React from "react";
import { Link } from "react-router-dom";

export function CardQuestion({ entry }) {
  const [isChecked, seIisChecked] = React.useState("");
  console.log(isChecked);
  return (
    <div className="card m-1" style={{ width: "30rem" }}>
      <div className="card-header">
        <img src={entry.user.avatarURL} style={avatar} alt="User Avatar" />
        {entry.user.name} asks:
      </div>
      <div className="card-body">
        <h5 className="card-title">Would you rather...</h5>

        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="optionOne"
            onChange={(e) => seIisChecked(e.target.id)}
          />
          <label className="form-check-label" htmlFor="optionOne">
            {entry.optionOne.text}
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="optionTwo"
            onChange={(e) => seIisChecked(e.target.id)}
          />
          <label className="form-check-label" htmlFor="optionTwo">
            {entry.optionTwo.text}
          </label>
        </div>

        <button type="button" className="btn btn-primary">
          Submit
        </button>
      </div>
    </div>
  );
}

export function CardQuestionClass({ entry }) {
  return (
    <div className="card m-1" style={{ width: "20rem" }}>
      <div className="card-header">
        <img src={entry.user.avatarURL} style={avatar} alt="User Avatar" />
        {entry.user.name} asks:
      </div>
      <div className="card-body">
        <h5 className="card-title">Would you rather...</h5>
        <p>{entry.optionOne.text}</p>
        <Link style={{ color: "inherit" }} to={`/questions/${entry.id}`}>
          <button type="button" className="btn btn-primary">
            View Question
          </button>
        </Link>
      </div>
    </div>
  );
}

export function CardPoll({ entry }) {
  // console.log("entry", entry);

  // Votes
  // count voutes
  const votesOne = entry.optionOne.votes.length;
  const votesTwo = entry.optionTwo.votes.length;

  // total votes
  const totalVotes = votesOne + votesTwo;

  // percentage
  const perOne = (votesOne * 100) / totalVotes;
  const perTwo = (votesTwo * 100) / totalVotes;

  const myVoteOne = entry.optionOne.votes.includes(entry.authedUser);
  const myVoteTwo = entry.optionTwo.votes.includes(entry.authedUser);

  return (
    <div className="card m-1" style={{ width: "20rem" }}>
      <div className="card-header">
        <img src={entry.user.avatarURL} style={avatar} alt="User Avatar" />
        Asked by {entry.user.name}
      </div>
      <div className="card-body">
        <h5 className="card-title">Would you rather...</h5>

        <div className="container" style={myVoteOne ? selected : {}}>
          <p>{entry.optionOne.text}</p>
          <div class="progress my-1">
            <div
              class={`progress-bar ${
                perOne > perTwo
                  ? "bg-success"
                  : perOne === perTwo
                  ? ""
                  : "bg-danger"
              }`}
              role="progressbar"
              style={{ width: `${perOne ? perOne : "12"}%` }}
            >
              {perOne ? perOne : "0"}%
            </div>
          </div>
          <p>
            {votesOne ? votesOne : "0"} out of {totalVotes} votes
          </p>
        </div>

        <hr />

        <div className="container" style={myVoteTwo ? selected : {}}>
          <p>{entry.optionTwo.text}</p>
          <div class="progress my-1">
            <div
              class={`progress-bar ${
                perTwo > perOne
                  ? "bg-success"
                  : perOne === perTwo
                  ? ""
                  : "bg-danger"
              }`}
              role="progressbar"
              style={{ width: `${perTwo ? perTwo : "12"}%` }}
            >
              {perTwo}%
            </div>
          </div>
          <p>
            {votesTwo ? votesTwo : "0"} out of {totalVotes} votes
          </p>
        </div>
      </div>
    </div>
  );
}

export function CardUser({ entry }) {
  // console.log("entry", entry);
  return (
    <div className="card m-1" style={{ width: "20rem" }}>
      <div className="card-header">
        <img src={entry.avatarURL} style={avatar} alt="User Avatar" />
        {entry.name}
      </div>
      <div className="card-body">
        <h5 className="card-title">Would you rather...</h5>
        {/* <p>{entry.questions.optionOne.text}</p> */}
        {entry.questions.map((txt, i) => (
          <p key={i}>{txt.optionOne.text}</p>
        ))}

        <Link style={{ color: "inherit" }} to={`/questions/${entry.id}`}>
          <button type="button" className="btn btn-primary">
            View Question
          </button>
        </Link>
      </div>
    </div>
  );
}

export function CardFormNewQuestion({ entry }) {
  // console.log("entry",entry);
  return (
    <form className="card m-1" style={{ width: "20rem" }}>
      <div className="card-header">
        <h5 className="card-title">Would you rather...</h5>
      </div>
      <div className="card-body">
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Option One
          </label>
          <input
            type="text"
            className="form-control"
            id="optionOne"
            placeholder="Provide an option..."
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Option Two
          </label>
          <input
            type="text"
            className="form-control"
            id="optionTwo"
            placeholder="Provide an option..."
          />
        </div>
      </div>
      <div className="card-footer">
        <button type="button" className="btn btn-primary">
          Submit Question
        </button>
      </div>
    </form>
  );
}

export const CardLogin = ({ users, login }) => {
  const [getValue, setValue] = React.useState(false);
  const handleSubmit = () => {
    login(getValue);
  };
  return (
    <div className="d-flex flex-column align-items-center">
      <img
        className="mb-4"
        src={getValue ? users[getValue].avatarURL : "https://bit.ly/3tJs7bg"}
        alt="User Avatar"
        width="72"
        height="57"
      />
      <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

      <select
        className="form-select mb-3"
        aria-label="Default select example"
        onChange={(e) => setValue(e.target.value)}
      >
        <option>Open this select menu</option>
        {Object.entries(users).map((user, i) => (
          <option value={user[1].id} key={i}>
            {user[1].name}
          </option>
        ))}
      </select>

      <button
        disabled={!getValue}
        onClick={handleSubmit}
        className={`w-100 btn btn-lg btn-${
          !getValue ? "secondary" : "primary"
        }`}
        type="button"
      >
        Sign in
      </button>
    </div>
  );
};

const avatar = {
  width: "40px",
  height: "40px",
};

const selected = {
  border: "2px solid #f0ad4e",
  padding: "10px",
};
