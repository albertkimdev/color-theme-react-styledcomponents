import React, { useState } from "react";
import styled from "styled-components";

const Div = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.bg};
  .input-btns {
    color: ${(props) => props.text};
  }

  .title {
    color: ${(props) => props.text};
  }

  .paragraph {
    color: ${(props) => props.text};
  }
`;

const Index = () => {
  const [theme, setTheme] = useState("blue");

  let bg = "";
  let text = "";

  if (theme === "red") {
    text = "#ad2a1a";
    bg = "#EFCFB3";
  } else if (theme === "black") {
    text = "black";
    bg = "white";
  } else if (theme === "blue") {
    text = "#A8E5FF";
    bg = "#222233";
  }

  return (
    <Div text={text} bg={bg}>
      <div className="input-btns">
        <input
          type="radio"
          name="theme"
          id="red"
          value="red"
          onChange={(e) => {
            setTheme(e.target.value);
          }}
          checked={theme === "red"}
        />
        red
        <input
          type="radio"
          name="theme"
          id="black"
          value="black"
          onChange={(e) => {
            setTheme(e.target.value);
          }}
          checked={theme === "black"}
        />
        black
        <input
          type="radio"
          name="theme"
          id="blue"
          value="blue"
          onChange={(e) => {
            setTheme(e.target.value);
          }}
          checked={theme === "blue"}
        />
        blue
      </div>
      <h1 className="title">This is the greatest article ever written!</h1>
      <p className="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
        perferendis cumque fuga beatae suscipit alias dolores, sunt quos quod
        officia sint accusantium laborum a consequuntur dignissimos ipsum
        debitis. Suscipit dignissimos tempora doloremque quae maxime odio optio
        error a rem illum impedit nobis dolore, ut, consectetur ea harum
        perferendis repudiandae placeat!
      </p>
      <p className="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
        perferendis cumque fuga beatae suscipit alias dolores, sunt quos quod
        officia sint accusantium laborum a consequuntur dignissimos ipsum
        debitis. Suscipit dignissimos tempora doloremque quae maxime odio optio
        error a rem illum impedit nobis dolore, ut, consectetur ea harum
        perferendis repudiandae placeat!
      </p>
      <p className="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
        perferendis cumque fuga beatae suscipit alias dolores, sunt quos quod
        officia sint accusantium laborum a consequuntur dignissimos ipsum
        debitis. Suscipit dignissimos tempora doloremque quae maxime odio optio
        error a rem illum impedit nobis dolore, ut, consectetur ea harum
        perferendis repudiandae placeat!
      </p>
      <p className="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
        perferendis cumque fuga beatae suscipit alias dolores, sunt quos quod
        officia sint accusantium laborum a consequuntur dignissimos ipsum
        debitis. Suscipit dignissimos tempora doloremque quae maxime odio optio
        error a rem illum impedit nobis dolore, ut, consectetur ea harum
        perferendis repudiandae placeat!
      </p>
      <p className="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
        perferendis cumque fuga beatae suscipit alias dolores, sunt quos quod
        officia sint accusantium laborum a consequuntur dignissimos ipsum
        debitis. Suscipit dignissimos tempora doloremque quae maxime odio optio
        error a rem illum impedit nobis dolore, ut, consectetur ea harum
        perferendis repudiandae placeat!
      </p>
      <p className="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
        perferendis cumque fuga beatae suscipit alias dolores, sunt quos quod
        officia sint accusantium laborum a consequuntur dignissimos ipsum
        debitis. Suscipit dignissimos tempora doloremque quae maxime odio optio
        error a rem illum impedit nobis dolore, ut, consectetur ea harum
        perferendis repudiandae placeat!
      </p>
    </Div>
  );
};

export default Index;
