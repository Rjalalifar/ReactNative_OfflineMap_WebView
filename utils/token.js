import jwt from "jwt-decode";

export const decodeToken = (token) => {
    return jwt(token);
};
