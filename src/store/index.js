import { createStore } from "redux";

// reducer
const counterReducer = (state, action) => {
	if (action.type === "INCREMENT") {
		return { counter: state.counter + 1 };
	}
	if (action.type === "DECREMENT") {
		return { counter: state.counter - 1 };
	}
	return state;
};

//store
const store = createStore(counterReducer);

export default store;
