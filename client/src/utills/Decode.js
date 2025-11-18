import { jwtDecode } from "jwt-decode"
export const Decode = (token) => {
    const decoded = jwtDecode(token)
    return decoded
}