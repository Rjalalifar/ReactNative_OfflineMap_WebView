import { fetchCourses } from "../api/courses";
import { fetchLayers } from "../api/layers";

export const getCourses = () => {
    return async (dispatch) => {
        const courses = await fetchCourses();
        // console.log(courses)
        await dispatch({ type: "INIT", payload: courses });
    };
};

export const getLayers = () => {
    return async (dispatch) => {
        const layers = await fetchLayers();
         console.log(layers)
        await dispatch({ type: "LAYER", payload: layers });
    };
};

export const userAction = (user) => {
    return async (dispatch) => {
        await dispatch({ type: "USER", payload: user });
    };
};
