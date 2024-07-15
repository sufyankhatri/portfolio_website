import React from "react";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { ImageWrapper, LeftSection } from "./HeroStyles";
import ProfilePic from "../../../public/images/profile_pic.jpg";
import Image from "next/image";

const Hero = (props) => (
  <div data-aos="fade-right">
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          About Sufyan Khatri
        </SectionTitle>
      </LeftSection>
    </Section>
    <Section row nopadding>
      <LeftSection>
        <ImageWrapper>
          <Image
            src={ProfilePic}
            alt="Profile Picture"
            height={320} // Increased height
            width={320} // Increased width
          />
        </ImageWrapper>
      </LeftSection>
    </Section>
    <Section row nopadding>
      <LeftSection>
        <SectionText style={{ marginTop: "10px" }}>
          This is Sufyan Khatri, I am full stack developer having 4+ years of
          experience in development, deployment and testing of modern web and
          mobile applications
        </SectionText>
      </LeftSection>
    </Section>
  </div>
);

export default Hero;
