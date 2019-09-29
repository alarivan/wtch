import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import styled, { css } from "styled-components"

const Form = styled.form`
  width: 100%;
  display: inline-block;
  background-color: #555;
  position: relative;
  border-radius: 20px;
  line-height: 0;
  margin-top: 1rem;
`

const FormControl = css`
  display: inline-block;
  border: 0;
  outline: 0;
  font-size: 1rem;
  color: #ddd;
  background-color: transparent;
  font-family: inherit;
  margin: 0;
  padding: 0 3rem 0 1.5rem;
  width: 100%;
  height: 45px;
  border-radius: 20px;
`

const Input = styled.input`
  ${FormControl}
`

const Submit = styled.button`
  ${FormControl}
  display: inline-block;
  position: absolute;
  top: 0;
  right: 0;
  width: 45px;
  height: 45px;
  background-color: #eee;
  font-size: 1rem;
  text-align: center;
  margin: 0;
  padding: 0;
  outline: 0;
  border: 0;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  border-radius: 0 20px 20px 0;
`

interface Props {}

const SubscribeFrom: React.FC<Props> = () => {
  return (
    <>
      <h3>Subscribe</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <Form name="email-form" method="POST" data-netlify="true">
        <div>
          <span>
            <Input type="email" name="email" id="email" placeholder="E-mail" />
          </span>
          <Submit type="submit" value="Submit">
            <FontAwesomeIcon size="2x" icon={faChevronRight} />
          </Submit>
        </div>
      </Form>
    </>
  )
}

export default SubscribeFrom
