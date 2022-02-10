import React, { useState } from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";

function NewCakeContainer(props) {
  const [numOfCakes, setNumOfCakes] = useState(1);
  return (
    <div>
      <h2>Number of cakes - {props.numOfCakes}</h2>
      <input
        type="text"
        value={numOfCakes}
        onChange={(e) => setNumOfCakes(e.target.value)}
      />
      <button onClick={() => props.buyCake(numOfCakes)}>
        Buy {numOfCakes} Cakes
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (numOfCakes) => dispatch(buyCake(numOfCakes)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
