/** New Data object for Questions : Cross Data Operation for Cards
 * Add to each question, the user data needed
 * to render the Question Class Card (home question preview)
 * as Name of question author (user id) and their Avatar image.
 *
 * For each question, user table should be consult,
 * compare the author (user id) with keys of the user table,
 * then get the entry when coincidence occurs,
 * finally add that entry in the question object.
 */
export function newDataObjectQuestions(state) {
  // question Array of objects
  const qArr = Object.keys(state.questions).map((key) => state.questions[key]);
  // user Array of objects
  const uArr = Object.keys(state.users).map((key) => state.users[key]);
  // New Data object
  const newQ = qArr.map((q) => {
    let match = uArr.filter((user) => q.author === user.id);
    return {
      ...q,
      user: match[0],
    };
  });
  return {
    // convert questions object to Array
    // questions: Object.keys(state.questions).map((key) => state.questions[key]),
    questions: newQ,
  };
}

/** New Data object for Users > Leader Board
 */
export function newDataObjectUsers(state) {
  // question Array of objects
  const qArr = Object.keys(state.questions).map((key) => state.questions[key]);
  // user Array of objects
  const uArr = Object.keys(state.users).map((key) => state.users[key]);
  // New Data object
  const newU = uArr.map((user) => {
    let match = qArr.filter((q) => user.id === q.author);
    return {
      ...user,
      questions: match,
    };
  });
  return {
    // convert questions object to Array
    // questions: Object.keys(state.questions).map((key) => state.questions[key]),
    users: newU,
  };
}

// User data for Login
export function dataObjectUsers(state) {

  // array of users with key as number
  let oldU = Object.keys(state.users).map((key) => {
    return state.users[key]
  })

  return {
    // convert questions object to Array
    // users: Object.keys(state.users).map((key, index) => state.users[key]),
    users: state.users
  };
}
