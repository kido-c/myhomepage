import NextLink from 'next/link'
import { Container, Box, Heading, Image, useColorModeValue, Link, Button } from "@chakra-ui/react";
import Section from "../components/section";
import Layout from '../components/layouts/article';
import Paragraph from "../components/paragraph";
import { ChevronRightIcon } from '@chakra-ui/icons';
import { BioSection, BioYear } from '../components/bio';


const Page = () => {
    return (
      <Layout>
        <Container>
          <Box
            borderRadius="lg"
            bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
            p={3}
            mb={6}
            align="center"
          >
            Hello, I&apos;m a front-end developer based in Korea
          </Box>

          <Box diplay={{ md: "flex" }}>
            <Box flexGrow={1}>
              <Heading as="h2" variant="page-title">
                Giseok Do
              </Heading>
              <p>Digital Craftzman ( Artist/ Developer / Designer )</p>
            </Box>
            <Box
              flexShrink={0}
              mt={{ base: 4, md: 0 }}
              ml={{ md: 6 }}
              align="center"
            >
              <Image
                borderColor="whiteAlpha.800"
                borderWidth={2}
                borderStyle="solid"
                maxWidth="100px"
                display="inline-block"
                borderRadius="full"
                src="/images/profile2.jpg"
                alt="Profile Image"
              />
            </Box>
          </Box>

          <Section delay={0.1}>
            <Heading as="h3" variant="section-title">
              Project
            </Heading>
            <Paragraph>
              Paragraph{" "}
              <NextLink href="/works/inkdrop">
                <Link>Inkdrop</Link>
              </NextLink>
            </Paragraph>
            <Box align="center" my={4}>
              <NextLink href="/projects">
                <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                  My portfolio
                </Button>
              </NextLink>
            </Box>
          </Section>

          <Section delay={0.2}>
            <Heading as="h3" variant="section-title">
              Career
            </Heading>
            <BioSection>
              <BioYear>2020</BioYear>
              울산대학교 경영학과 졸업
            </BioSection>
            <BioSection>
              <BioYear>2020</BioYear>
              주식회사 호재 경영 지원 근무
            </BioSection>
            <BioSection>
              <BioYear>2021</BioYear>
              코드스테이츠 소프트웨어 엔지니어 과정 수료
            </BioSection>
            <BioSection>
              <BioYear>2021 to present</BioYear>
              프론트엔드 개발자 취업 구직 중
            </BioSection>
          </Section>
        </Container>
      </Layout>
    );
};

export default Page;
