import Header from "components/Header/Header";
import Acomplishments from "../components/Acomplishments/Acomplishments";
import DisplayPicture from "../components/DisplayPicture/DisplayPicture";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <DisplayPicture />
      </Section>
      <Projects />
      <Technologies />
      <Acomplishments />
    </Layout>
  );
};

export default Home;
