import Header from "../Header";
import Footer from "../Footer";
import { Container, FontStyles } from "@/styles/globalStyledComponents";

interface LayoutProps {
  children: JSX.Element;
}

const MainLayout: React.FC<LayoutProps> = ({ children }) => {
  const headerType = children.type.name;
  return (
    <Container>
      <FontStyles />
      <Header type={headerType}/>
      {children}
      <Footer />
    </Container>
  );
};

export default MainLayout;
