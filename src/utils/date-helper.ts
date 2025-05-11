
// Obtiene el año actual
export const currentYear = new Date().getFullYear();

// Obtiene el día actual
export const todayDateDay = new Date().getDate();

// Edad
export const getMyAge = () => {
    const today = new Date();
    const birthDay = new Date('1996-09-26');

    let age = today.getFullYear() - birthDay.getFullYear();

    // Verifica si aún no ha llegado tu cumple este año
    const currentMonth = today.getMonth();
    const birthMonth = birthDay.getMonth();

    if (currentMonth < birthMonth || (currentMonth === birthMonth && today.getDate() < birthDay.getDate())) {
        age -= 1;
    }
    return age;
}