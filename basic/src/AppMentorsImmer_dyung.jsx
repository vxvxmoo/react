import React, { useState } from "react";
import { useImmer } from "use-immer";

export default function AppMentorsImmer() {
  const [person, updatePerson] = useImmer(initialPerson);
  const handleUpdate = () => {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
    updatePerson((person) => {
      const mentor = person.mentors.find((mentor) => mentor.name === prev);
      mentor.name = current;
    });
  };
  const handleAdd = () => {
    const name = prompt(`새로운 멘토의 이름은 무엇인가요?`);
    const title = prompt(`새로운 멘토의 직급은 무엇인가요?`);
    updatePerson((person) => {
      person.mentors.push({ name, title });
    });
  };
  const handleDelete = () => {
    const name = prompt(`삭제하려는 멘토의 이름은 무엇인가요?`);
    updatePerson((person) => {
      const mentorIndex = person.mentors.findIndex((mentor) => {
        return mentor.name === name;
      });
      person.mentors.splice(mentorIndex, 1);
    });
  };

  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name}의 멘토는:</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button onClick={handleUpdate}>멘토의 이름을 바꾸기</button>
      <button onClick={handleAdd}>멘토 추가하기</button>
      <button onClick={handleDelete}>멘토 삭제하기</button>
    </div>
  );
}

const initialPerson = {
  name: "엘리",
  title: "개발자",
  mentors: [
    {
      name: "밥",
      title: "시니어개발자",
    },
    {
      name: "제임스",
      title: "시니어개발자",
    },
  ],
};
