import { HeaderTexts, headerChoose } from "@/utils/constants";
import { useRouter } from "next/router";


interface HeaderProps {
    type: string
}

const Header: React.FC<HeaderProps> = (type: HeaderProps) => {

    const route = useRouter();

    console.log(type.type);
    const header = headerChoose(type.type);

    return (
        <>
            <div>
                <span onClick={() => route.push('contact')}>Contacto</span>
            </div>
            <p>{header?.Title}</p>
            <p>{header?.Subtitle}</p>
        </>
    )

}

export default Header