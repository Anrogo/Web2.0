import { HeaderTexts, headerChoose } from "@/utils/constants";
import { useRouter } from "next/router";
import { BarOver7, HeaderContainer, HeaderLink, HeaderWrapper } from "./headerStyledComponents";


interface HeaderProps {
    type: string
}

const Header: React.FC<HeaderProps> = (type: HeaderProps) => {

    const route = useRouter();

    console.log(type.type);
    const header = headerChoose(type.type);

    return (
        <>
            <HeaderContainer>
                <HeaderWrapper>
                    <HeaderLink onClick={() => route.push('/')}>Inicio</HeaderLink>
                    <BarOver7>/</BarOver7>
                    <HeaderLink onClick={() => route.push('about-me')}>Sobre mí</HeaderLink>
                    <BarOver7>/</BarOver7>
                    <HeaderLink onClick={() => route.push('contact')}>Contacto</HeaderLink>
                    <BarOver7>/</BarOver7>
                    <HeaderLink onClick={() => route.push('projects')}>Proyectos</HeaderLink>
                </HeaderWrapper>
            </HeaderContainer>
            <p>{header?.Title}</p>
            <p>{header?.Subtitle}</p>
        </>
    )

}

export default Header