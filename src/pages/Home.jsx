import { Layout } from '../components/layout';
import { Hero, Services, About, Social, Contact } from '../components/sections';

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <About />
      <Contact />
      <Social />
    </Layout>
  );
};

export default Home;
