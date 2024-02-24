import { HeaderTexts, headerChoose } from "@/utils/constants";
import { useRouter } from "next/router";
import { HeaderContainer, HeaderLink } from "./headerStyledComponents";


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
                <HeaderLink onClick={() => route.push('/')}>Inicio</HeaderLink>
                <HeaderLink onClick={() => route.push('about-me')}>Sobre mí</HeaderLink>
                <HeaderLink onClick={() => route.push('contact')}>Contacto</HeaderLink>
                <HeaderLink onClick={() => route.push('projects')}>Proyectos</HeaderLink>
            </HeaderContainer>
            <p>{header?.Title}</p>
            <p>{header?.Subtitle}</p>
        </>
    )

}

export default Header