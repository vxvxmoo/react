export default function personReducer_2(person, action) {
  if (action.type === "added") {
    const { name, title } = action;
    return {
      ...person,
      mentors: [
        ...person.mentors,
        {
          name: action.name,
          title: action.title,
        },
      ],
    };
  } else if (action.type === "updated") {
    const { prev, current } = action;
    return {
      ...person,
      mentors: person.mentors.map((mentor) => {
        if (mentor.name === action.prev) {
          return {
            name: action.current,
            title: mentor.title,
          };
        } else {
          return mentor;
        }
      }),
    };
  } else {
    throw Error("Unknown action: " + action.type);
  }
}
