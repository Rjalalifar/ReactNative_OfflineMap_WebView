export const coursesReducer = (state = [], action) => {
    switch (action.type) {
        case "INIT":
            return [...action.payload];
            // console.log([...action.payload])
        default:
            return state;
    }
};
