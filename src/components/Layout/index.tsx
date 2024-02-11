import { Container } from "@/styles/globalStyledComponents";
import Header from "../Header";
import Footer from "../Footer";

interface LayoutProps {
  children: JSX.Element;
}

const MainLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
