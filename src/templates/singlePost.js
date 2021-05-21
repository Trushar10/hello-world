import React from "react"
import {graphql} from "gatsby"
import {MDXRender} from "gatsby-plugin-mdx"
import {H1} from "../elements"
import {Container, Post, FeatureImage, Seo} from "../components"

const singlePost = ({data}) => {
    const featureImage =data.mdx.frontmatter.featureImage.childImageSharp.fixed

    const seoImage = data.mdx.frontmatter.featureImage.publicURL

    return (
        <Container>
        <Seo      
          title={data.mdx.frontmatter.title}
          image={seoImage}
          description= {data.mdx.frontmatter.excerpt}
        />
            <FeatureImage fixed={featureImage} />
            <Post>
                <H1 margin = "0 0 2rem 0">
                    {data.mdx.frontmatter.title}
                </H1>
                <MDXRender>{data.mdx.body}</MDXRender>
            </Post>
        </Container>
    )
}

export default singlePost

export const pageQuery = graphql `
    query SinglePostQuery($id: String!) {
        mdx(id: {eq: $id}) {
            frontmatter {
              date
              excerpt
              slug
              title
              featureImage {
                publicURL
                childImageSharp {
                  fixed {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
        }
    }
`