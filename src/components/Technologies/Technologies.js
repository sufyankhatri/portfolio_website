import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import { SiCloudinary } from "react-icons/si";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I possess expertise in a broad spectrum of web and mobile development
      technologies, covering everything from back-end to front-end development.
    </SectionText>
    <List>
      <div data-aos="fade-right">
        <ListItem>
          <picture>
            <DiReact size="3rem" />
          </picture>
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              Experience with <br />
              React.js <br />
              Next.js <br />
              Angular.js <br />
              React Native
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </div>
      <ListItem></ListItem>
      <div data-aos="fade-left">
        <ListItem>
          <picture>
            <DiFirebase size="3rem" />
          </picture>
          <ListContainer>
            <ListTitle>Back-End</ListTitle>
            <ListParagraph>
              Experience with <br />
              Node.js <br />
              Nest.js <br />
              Mongo DB <br />
              PostgreSQL <br />
              Firebase
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </div>
      <div data-aos="fade-left">
        <ListItem>
          <picture>
            <SiCloudinary size="3rem" />
          </picture>
          <ListContainer>
            <ListTitle>CI/CD</ListTitle>
            <ListParagraph>
              AWS <br />
              Docker <br />
              Serverless functions
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </div>
    </List>

    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
