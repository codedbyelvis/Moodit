import React from "react";

const styles = {
  position: "absolute"
};

export default class Panel extends React.Component {

  render() {
    const strokeSize = 2;

    return (
      <svg
        style={styles}
        viewBox="0 0 540 340"
      >
        <g
          stroke="black"
          strokeWidth={strokeSize}
          fill="none"
        >
          <path
            vectorEffect="non-scaling-stroke"
            d={this.props.path}
          />
        </g>
      </svg>
    );
  }
}