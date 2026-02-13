import { jwtDecode } from "jwt-decode"

const studentLoginKey = "SLKEY";

export const setCookie = token => {
    const decoded = jwtDecode(token);
    const to_utc = new Date(decoded.exp * 1000).toUTCString()
    document.cookie = `${studentLoginKey}=${token}; expires=${to_utc};`
}

export const getCookie = () => {
    const ck = document.cookie.split(";");
    for (const c of ck) {
        if (c.trim().startsWith(studentLoginKey)) {
            return c.split("=")[1]
        }
    }
    return null;
}