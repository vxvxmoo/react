import React from "react";
import Profile from "./Profile";

export default function AppProfile() {
  return (
    <>
      <Profile
        image="https://i.namu.wiki/i/geGngQMnvmK2g3wuKU4O1uNs8Ix1HXQULk9PrnT57lHOlU4AxL9qsNCYXOOY9DIqPWtXnphq8G6NzCcvzv-ppQ.webp"
        name="chiikawa"
        title="돼지햄스터"
        isNew={true}
      />
      <Profile
        image="https://i.namu.wiki/i/JNKvslt1j4AioYDmWSiZdcJBzwWD2-XibS8JYqMiQcSpF5GSUzYHVdVBsSOPElngPI5CfiAUf0oM3bXXzFr30w.webp"
        name="hachiware"
        title="바보고양이"
        isNew={false}
      />
      <Profile
        image="https://i.namu.wiki/i/Yu5BDHQYknKmChLkS9bgOR0jqfE3ojWF_VgjMJ3nhbmztCFy_qp8pFs0eN4q7sM8FYnCU8Nv89wAPcBPMXo3Sg.webp"
        name="usagi"
        title="든든토끼"
        isNew={false}
      />
    </>
  );
}
