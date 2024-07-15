import Head from "next/head";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";

const Home = () => {
  return (
    <>
      <Head>
        <title>Sufyan Khatri | Full Stack Engineer</title>
        <meta
          name="description"
          content="Sufyan Khatri's portfolio showcasing projects and skills as a Full Stack Engineer."
        />
        <meta
          name="keywords"
          content="Sufyan Khatri, Full Stack Engineer, Software Developer, Web Developer, Portfolio"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:title"
          content="Sufyan Khatri | Full Stack Engineer"
        />
        <meta
          property="og:description"
          content="Explore Sufyan Khatri's portfolio to see projects, skills, and professional experience as a Full Stack Engineer."
        />
        <meta property="og:image" content="/public/images/profile_pic.jpg" />
        <meta property="og:url" content="http://sufyankhatri.com" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Person",
            name: "Sufyan Khatri",
            url: "http://sufyankhatri.com",
            jobTitle: "Full Stack Engineer",
            worksFor: {
              "@type": "Organization",
              name: "Freelance",
            },
            sameAs: [
              "http://www.linkedin.com/in/sufyan-khatri-0b6522202/",
              "http://github.com/sufyankhatri",
              "https://twitter.com/sufyankhatri1",
            ],
          })}
        </script>
      </Head>
      <Layout>
        <Section grid>
          <Hero />
          {/* <DisplayPicture /> */}
        </Section>
        <Projects />
        <Technologies />
      </Layout>
    </>
  );
};

export default Home;
