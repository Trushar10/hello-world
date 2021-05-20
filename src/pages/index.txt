import React from "react"
import { Container, FeatureImage, Content, ContentCard} from "../components"


const IndexPage = () => {
  return (
    <Container> 
      <FeatureImage></FeatureImage>
      <Content>
        <ContentCard date="March 24, 2020" title="Lorem ipsum dolor sit amet" excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit nisl, leo et. Vitae hendrerit vivamus cum ullamcorper hendrerit et arcu, elit ornare." slug="/test">
      </ContentCard>
      </Content>
    </Container>
  )
}

export default IndexPage