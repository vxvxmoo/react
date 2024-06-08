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
  } else {
    throw Error("Unknown action: " + action.type);
  }
}
