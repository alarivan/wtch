import { css } from "styled-components"

const Button = css`
  display: inline-block;
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  padding: 0.8rem 1.5rem;
  border: none;
  cursor: pointer;
  font-size: 1.1rem;
  border-radius: 30px;

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
  }
`

export default Button
