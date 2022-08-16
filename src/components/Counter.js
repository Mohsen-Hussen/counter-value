import React from "react";
import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";
import {
	increment,
	decrement,
	incrementByAmount,
	toggleCounter,
} from "../store/counterSlice";

const Counter = () => {
	const counter = useSelector((state) => state.counter.counter);
	const showCounter = useSelector((state) => state.counter.showCounter);
	const dispatch = useDispatch();

	const incrementHandler = () => {
		dispatch(increment());
	};
	const decrementHandler = () => {
		dispatch(decrement());
	};
	const increaseByAmount = () => {
		dispatch(incrementByAmount(5));
	};

	const toggleCounterHandler = () => {
		dispatch(toggleCounter());
	};

	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			{showCounter && <div className={classes.value}>{counter}</div>}
			<div>
				<button onClick={incrementHandler}>Increment</button>
				<button onClick={increaseByAmount}>Increase by 5</button>
				<button onClick={decrementHandler}>Decrement</button>
			</div>
			<button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
	);
};

export default Counter;
