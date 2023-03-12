import Button from "@atlaskit/button";
import React from "react";
import styled from "styled-components";
import CheckIcon from "@atlaskit/icon/glyph/check";

const StyledButton = styled(Button)`
  margin-top: 5px;
  &.isCompleted {
    text-decoration: line-through;
  }
  
  text-align: left;
  
  &:hover {
    .check-icon {
      display: inline-block;
    }
  }

  .check-icon {
    display: none;
    &:hover {
      background-color: #e2e2e2;
      border-radius: 3px;
    }
  }
`;

function Todo({ todo, onCheckBtnClick }) {
  return (
    <StyledButton
      className={todo.isCompleted ? "isCompleted" : ""}
      shouldFitContainer
      iconAfter={
        !todo.isCompleted && (
        <span className="check-icon" onClick={() => onCheckBtnClick(todo.id)}>
          <CheckIcon primaryColor="#4fff4f" />
        </span>)
      }
    >
      {todo.name}
    </StyledButton>
  );
}


export default Todo;
