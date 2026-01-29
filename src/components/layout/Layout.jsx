import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-0 md:pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
