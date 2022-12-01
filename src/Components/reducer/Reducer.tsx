import { useReducer } from "react";

type stateType = {
    count: number
};

//? Restricted the action types.
//? if type are incremenet or decrement, we need another property which is payload.
//? if the type is Reset then we dont need the payload property.
type inAction = {
    type: 'Increement' | 'Decreement',
    payload: number
};

type resetAction = {
    type: 'Reset'
};

//? action type was the element of inAction type or resetAction.
type actionType = inAction | resetAction;

//? intialize the properties are going to be used in reducer.
const initialState = {
    count: 0
};

//? recuder need 2 parameter, which is state and action
//? action is used to update the previous state.
//? state is used to access the current state
const reducer = (state: stateType, action: actionType) => {
    switch (action.type) {
        case "Increement":
            return { count: state.count + action.payload };
        case "Decreement":
            return { count: state.count - action.payload };
        case "Reset":
            return initialState;
        default:
            throw new Error();
    }
};

export const Reducer = () => {
    //? dispatch is used to triggering what type of action will be used.
    //? in this case we have 2 action types which is increement, and decreement.
    //? we can make another properties in dispatch object if neccessary.
    //? state is used to access what properties we will be accessed.
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h1>Count: {state.count}</h1>
            <button onClick={() => dispatch({ type: 'Increement', payload: 10 })}>Increement</button>
            <button onClick={() => dispatch({ type: 'Decreement', payload: 10 })}>Increement</button>
            <button onClick={() => dispatch({ type: 'Reset' })}>Reset</button>
        </div>
    );
};