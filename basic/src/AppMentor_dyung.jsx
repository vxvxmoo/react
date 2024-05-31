import React, { useState } from "react";

export default function AppMentor_dyung(props) {
  const [person, setPerson] = useState({
    name: "엘리",
    title: "개발자",
    mentor: {
      name: "밥",
      title: "시니어개발자",
    },
  });

  const changeMentorName = (enterName) => {
    let newName = person.mentor.name;
    if (enterName == person.mentor.name) {
      newName = prompt(`뭘로 바꿀래?`);
      setPerson({
        ...person,
        mentor: {
          ...person.mentor,
          name: newName,
        },
      });
    }
  };
  const changeMentorTitle = (enterTitle) => {
    let newTitle = person.mentor.title;
    if (enterTitle == person.mentor.title) {
      newTitle = prompt(`뭘로 바꿀래?2`);
      setPerson({
        ...person,
        mentor: {
          ...person.mentor,
          title: newTitle,
        },
      });
    }
  };

  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>
        {person.name}의 멘토는 {person.mentor.name} ({person.mentor.title})
      </p>
      <button
        onClick={() => {
          const name = prompt(`what's your mentor's name?`);
          changeMentorName(name);
        }}
      >
        멘토 이름 바꾸기
      </button>
      <button
        onClick={() => {
          const title = prompt(`what's your mentor's title?`);
          changeMentorTitle(title);
        }}
      >
        멘토 타이틀 바꾸기
      </button>
    </div>
  );
}
