import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import { addCounter, reduceCounter } from "./actions";

const CounterComp = ({ counter, addCounter, reduceCounter }) => (
  <div>
    <h3>Counter: {counter}</h3>
    <button onClick={addCounter}>Add</button>
    <button onClick={reduceCounter}>Minus</button>
  </div>
);

export const Counter = connect(
  state => ({ counter: state.counter}),
  dispatch => bindActionCreators({ addCounter, reduceCounter }, dispatch)
)(CounterComp);
