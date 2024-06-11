import React from "react";

export default function AppWrap() {
  return (
    <div>
      <Navbar>
        <Avatar
          image="https://pics.prcm.jp/58103aa4c2f01/85808048/png/85808048.png"
          name="Bob"
          size={200}
        />
        <p>하잉!</p>
      </Navbar>

      <Navbar>
        <p>안녕하세요~!</p>
      </Navbar>
    </div>
  );
}

function Navbar({ children }) {
  return <header style={{ backgroundColor: "yellow" }}>{children}</header>;
}

function Avatar({ image, name, size }) {
  return (
    <div>
      <img
        src={image}
        alt={`${name}`}
        width={size}
        height={size}
        style={{ borderRadius: "50%" }}
      />
    </div>
  );
}
