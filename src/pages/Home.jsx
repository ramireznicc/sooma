import { Layout } from '../components/layout';
import { Hero, Services, About, Social, FAQ, Contact } from '../components/sections';
import { SectionDivider } from '../components/common';

const Home = () => {
  return (
    <Layout>
      <Hero />
      <SectionDivider />
      <Services />
      <SectionDivider />
      <About />
      <SectionDivider />
      <FAQ />
      <SectionDivider />
      <Contact />
      <SectionDivider />
      <Social />
    </Layout>
  );
};

export default Home;
