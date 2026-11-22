import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import {
  BookCallButton,
  DownloadCVButton,
  Container,
  Div1,
  Div2,
  SocialIcons,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <SocialIcons href="https://github.com/sufyankhatri">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/sufiyan-khatri-0b6522202/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="mailto:sufyankhatree@gmail.com">
        <AiFillMail size="3rem" />
      </SocialIcons>
    </Div1>
    <Div2>
      <a href="/Muhammad_Sufiyan_CV.pdf" download="Muhammad_Sufiyan_CV.pdf">
        <DownloadCVButton>Download CV</DownloadCVButton>
      </a>
      <a href="https://calendly.com/sufyankhatree/15min" target="_blank">
        <BookCallButton>Book a call</BookCallButton>
      </a>
    </Div2>
  </Container>
);

export default Header;
