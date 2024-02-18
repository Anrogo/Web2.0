
export const HeaderTexts = [
    {
        Title: "Inicio",
        Subtitle: "Bienvenido a mi nueva web"
    },
    {
        Title: "Sobre mí",
        Subtitle: "Toda la información que necesitas saber sobre mí como persona y profesional"
    },
    {
        Title: "Contacto",
        Subtitle: "Ponte en contacto conmigo cuando quieras"
    },
    {
        Title: "Proyectos",
        Subtitle: "Aquí puedes encontrar más información sobre mis proyectos"
    },
]


export const headerChoose = (name: string) => {
    console.log(name);
    switch (name) {
        case "Home":
            return HeaderTexts[0];
        case "AboutMe":
            return HeaderTexts[1];
        case "Contact":
            return HeaderTexts[2];
        case "Projects":
            return HeaderTexts[3];
        default:
            console.log("Error al seleccionar la cabecera");
    }
} 