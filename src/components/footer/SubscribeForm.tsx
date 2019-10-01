import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"

const Form = styled.form`
  position: relative;
  margin-top: 1rem;
`

const Input = styled.input`
  background-color: #555;
  outline: 0;
  font-size: 1rem;
  color: #ddd;
  padding: 0 1rem;
  border: 0;
  border-radius: 20px 0 0 20px;
`

const Submit = styled.button`
  background-color: #eee;
  outline: 0;
  border: 0;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  border-radius: 0 20px 20px 0;
  padding: 0.5rem 1rem;
`
const InputGroup = styled.div`
  display: flex;
  justify-content: center;
`

const Label = styled.label`
  font-size: 0.9rem;
  padding: 0 1rem;
`

interface Props {}

const SubscribeFrom: React.FC<Props> = () => {
  return (
    <>
      <h3>Subscribe</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <Form name="email-form" method="POST" data-netlify="true">
        <Label htmlFor="email">Email</Label>
        <InputGroup>
          <Input type="email" name="email" id="email" placeholder="Email" />
          <Submit type="submit" value="Submit" title="Subscribe">
            <FontAwesomeIcon size="2x" icon={faChevronRight} />
          </Submit>
        </InputGroup>
      </Form>
    </>
  )
}

export default SubscribeFrom
