import Header from "../Header";
import Footer from "../Footer";

interface LayoutProps {
  children: JSX.Element;
}

const MainLayout: React.FC<LayoutProps> = ({ children }) => {
  const headerType = children.type.name;
  return (
    <div>
      <Header type={headerType}/>
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
