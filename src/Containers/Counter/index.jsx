import React from "react";
import { createStructuredSelector } from "reselect";
import { makeSelectCount } from "./selector";
import { connect } from "react-redux";
import { compose } from "redux";
import * as actions from "./actions";

const Counter = (props) => {
  const { count, onIncrement, onDecrement } = props;
  console.log(props);

  return (
    <div>
      <p>{`The current count is ${count}`}</p>
      <button onClick={() => onIncrement(count + 1)}>Increment count</button>
      <button onClick={() => onDecrement(count - 1)}>Decrement count</button>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  count: makeSelectCount()
});

export function mapDispatchToProps(dispatch) {
  return {
    onIncrement: (count) => {
      dispatch(actions.increment(count));
    },
    onDecrement: (count) => {
      dispatch(actions.decrement(count));
    }
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Counter);
