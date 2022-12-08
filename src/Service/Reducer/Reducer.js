import Add_to_cart from "../Constants";

const inititalState = {
    cardData: []
};

const carditems = (state = inititalState, action) => {
    switch (action.type) {
        case Add_to_cart:
            return {
                ...state,
                cardData: action.data,
            };
            break;
        default:
            return {
                state,
            };
    }
};
export default carditems;
