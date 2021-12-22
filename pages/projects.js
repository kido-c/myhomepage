import { Container, Box, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";
import thumbPanda from "../public/images/works/pandarank2.png"
import thumbVegan from "../public/images/works/vegan2.png";
import Layout from "../components/layouts/article";

const Works = () => {
    return (
      <Layout>
        <Container>
          <Heading as="h3" fontSize={20} mb={4}>
            Project
          </Heading>
          <SimpleGrid column={[1, 1, 2]} gap={6}>
            <Section>
              <WorkGridItem
                id="veganrecipe"
                title="Vegan recipe"
                thumbnail={thumbVegan}
              >
                코드스테이츠 First Project
              </WorkGridItem>
            </Section>
            <Section>
              <WorkGridItem
                id="pandarank"
                title="PandaRank"
                thumbnail={thumbPanda}
              >
                코드스테이츠 Final Project_PandaRank 기업 협업
              </WorkGridItem>
            </Section>
          </SimpleGrid>
        </Container>
      </Layout>
    );
}

export default Works