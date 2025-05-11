import { currentYear } from "@/utils/date-helper"
import { Copyright, CopyrightText } from "./footerStyledComponents"

const Footer = () => {

    return (
        <>
           <p>Este es el footer</p> 
           <Copyright>
                <CopyrightText>Copyright © {currentYear} - Antonio Rodríguez González</CopyrightText>
            </Copyright>
        </>
    )

}

export default Footer