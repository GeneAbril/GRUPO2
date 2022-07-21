export const getSession = () => {
    const usuarioActual = localStorage.getItem("session");
    
    return JSON.parse(usuarioActual);
}

export const setSession = (usuario) => {
    localStorage.setItem("session", JSON.stringify(usuario))
}

export const exitSession = () => {
    localStorage.clear()
    return null;
}