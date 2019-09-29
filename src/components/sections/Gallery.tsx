import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const Section = styled.section``

const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  > div {
    img {
      display: block;
    }

    &:first-child {
      grid-row: 1/1;
      grid-column: 1/1;
    }

    &:nth-child(2) {
      grid-row: 2/2;
      grid-column: 2/4;
    }
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(5, 1fr);
    > div {
      &:first-child {
        grid-row: 1/3;
        grid-column: 1/3;
      }

      &:nth-child(2) {
        grid-column: 3/6;
      }
    }
  }
`

const Gallery = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: { relativePath: { regex: "/gallery/" } }
        sort: { fields: name }
      ) {
        nodes {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid
              originalName
            }
          }
        }
      }
    }
  `)

  return (
    <Section id="gallery">
      <Items>
        {data.allFile.nodes.map((image: any) => {
          return (
            <Img
              key={image.childImageSharp.fluid.originalName}
              fluid={image.childImageSharp.fluid}
              alt=""
            />
          )
        })}
      </Items>
    </Section>
  )
}

export default Gallery
