export const layersReducer = (state = [], action) => {
    switch (action.type) {
        case "LAYER":
            return [...action.payload];
            console.log([...action.payload])
        default:
            return state;
    }
};
