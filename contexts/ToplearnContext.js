import { createContext } from "react";

const ToplearnContext = createContext({
    courses: [],
    loading: true,
});

export default ToplearnContext;
