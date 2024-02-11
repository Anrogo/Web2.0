import Header from "../Header";
import Footer from "../Footer";

interface LayoutProps {
  children: JSX.Element;
}

const MainLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <body>
      <Header />
      {children}
      <Footer />
    </body>
  );
};

export default MainLayout;
