import React from "react"
import Container from "../styled/container"
import styled from "styled-components"
import Button from "../styled/button"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const Section = styled.section`
  margin: 2rem 0;
`

const ShowcaseContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 3rem;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    text-align: left;
  }
`

const Content = styled.div`
  p {
    margin: 1rem 0;
  }

  @media (min-width: 768px) {
    order: -1;
  }
`

const Image = styled(Img)`
  img {
    width: 80%;
    margin: auto;
  }

  @media (min-width: 768px) {
    img {
      order: 2;
      width: 100%;
    }
  }
`

const Title = styled.h1`
  font-size: 4rem;
  color: ${({ theme }) => theme.colors.primary};
`

const ButtonLink = styled.a`
  ${Button}
`

const Showcase: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      fileName: file(
        relativePath: { eq: "watch-white-background-photo-cut-out-122122.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Section id="home">
      <ShowcaseContainer>
        <Image fluid={data.fileName.childImageSharp.fluid} alt="" />
        <Content>
          <Title>The perfect watch for you</Title>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            repudiandae rerum libero ipsum asperiores omnis mollitia, nostrum
            commodi placeat ea itaque modi corrupti corporis nam voluptas aut
            reprehenderit eaque culpa.
          </p>
          <ButtonLink href="#read-more">Read More</ButtonLink>
        </Content>
      </ShowcaseContainer>
    </Section>
  )
}

export default Showcase
