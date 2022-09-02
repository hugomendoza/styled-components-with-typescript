import styled from "styled-components"

export interface StyledButtonProps {
  variant?: "primary" | "secondary" | "outline";
}

export const StyledButton = styled.button<StyledButtonProps>`
  border-radius: 0.25rem;
  color: white;
  border: none;
  padding: 1rem;
  ${ props => {
    switch (props.variant) {
      case "primary":
        return `
          background-color: red;
        `
      case "secondary":
        return `
          background-color: green;
        `
      case "outline":
        return `
          border: 1px solid black;
          background-color: transparent;
          color: black;
          border-radius: 0px;
        `
      default:
        return `
          background-color: yellow;
        `
    }
  }}
`