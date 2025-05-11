import Header from "../Header";
import Footer from "../Footer";
import { Container, FontStyles } from "@/styles/globalStyledComponents";
import HeadOptions from "../Head";
import { getPage } from "@/utils/router-helper";

interface LayoutProps {
  children: JSX.Element;
}

const MainLayout: React.FC<LayoutProps> = ({ children }) => {
  const headerType = children.type.name;

  return (
    <Container>
      <HeadOptions page={getPage(headerType)} />
      <FontStyles />
      <Header type={headerType} />
      {children}
      <Footer />
    </Container>
  );
};

export default MainLayout;
