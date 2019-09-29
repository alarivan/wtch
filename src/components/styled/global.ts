import { createGlobalStyle } from "styled-components"
const GlobalStyle = createGlobalStyle`

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Catamaran', sans-serif;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.1rem;
}

main {
  max-width: 1600px;
  margin: auto;
}

h1, h2, h3, h4 {
  line-height: 1.3;
}

a {
  color: ${({ theme }) => theme.colors.secondary};
  text-decoration: none;
}

img {
  width: 100%;
}

ul {
  list-style: none;
}
`
export default GlobalStyle
