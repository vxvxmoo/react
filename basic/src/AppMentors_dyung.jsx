// 1차 - 구현해보기
import React, { useState } from "react";

export default function AppMentors_dyung() {
  const [person, setPerson] = useState({
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
  });
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
      <button
        onClick={() => {
          const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
          const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);

          setPerson((person) => ({
            ...person,
            mentors: person.mentors.map((mentor) => {
              if (mentor.name == prev) {
                return {
                  name: current,
                  title: mentor.title,
                };
              } else return mentor;
            }),
          }));
        }}
      >
        멘토의 이름을 바꾸기
      </button>
      <button
        onClick={() => {
          const name = prompt(`추가할 멘토의 이름은 무엇인가요?`);
          const title = prompt(`추가할 멘토의 직급은 무엇인가요?`);

          setPerson((person) => ({
            ...person,
            mentors: [...person.mentors, { name: name, title: title }],
          }));
        }}
      >
        멘토 추가하기
      </button>
      <button
        onClick={() => {
          const name = prompt(`삭제할 멘토의 이름은 무엇인가요?`);

          setPerson((person) => ({
            ...person,
            mentors: person.mentors.filter((mentor) => {
              return mentor.name != name;
            }),
          }));
        }}
      >
        멘토 삭제하기
      </button>
    </div>
  );
}
