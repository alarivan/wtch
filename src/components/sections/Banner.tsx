import React from "react"
import styled from "styled-components"
import Overlay from "../styled/overlay"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"

const Section = styled(BackgroundImage)`
  position: relative;
  height: 600px;
`
const Inner = styled.div`
  color: #fff;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: auto;
  max-width: 860px;
  padding: 5rem 0.5rem;

  h3 {
    font-size: 1.5rem;
    text-transform: uppercase;
  }

  h2 {
    font-size: 2.5rem;
    margin-top: 1rem;
  }

  p {
    font-size: 1.3rem;
    margin-top: 1rem;
  }

  @media (min-width: 768px) {
    h2 {
      font-size: 4rem;
    }
  }
`

const Banner: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      fileName: file(
        relativePath: { eq: "alexander-mils-ZxHT5QzrJhA-unsplash.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Section
      id="about"
      Tag="section"
      fluid={data.fileName.childImageSharp.fluid}
    >
      <Overlay>
        <Inner>
          <h3>Classic</h3>
          <h2>A tried and true style that always remains in fashion</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            repudiandae laboriosam quia, error tempore porro ducimus voluptate
            laborum nostrum iure.
          </p>
        </Inner>
      </Overlay>
    </Section>
  )
}

export default Banner
