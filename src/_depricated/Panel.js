import React from "react";

const styles = {
  width: "100%",
  height: "100%",
  position: "absolute"
};

export default class Panel extends React.Component {
  shouldComponentUpdate(prevProps) {
    return (
      prevProps.bounds !== this.props.bounds ||
      prevProps.path !== this.props.path
    );
  }

  render() {
    const bounds = this.props.bounds;
    const strokeSize = 2;

    return (
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        style={styles}
        viewBox="0 0 400 300"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient
            x1="11.8748878%"
            y1="100%"
            x2="88.1251154%"
            y2="0%"
            id="linearGradient-1"
          >
            <stop stopColor="#4656B8" offset="0%" />
            <stop stopColor="#9C02BA" offset="39.9%" />
            <stop stopColor="#5A44BA" offset="74.2%" />
            <stop stopColor="#1485B8" offset="100%" />
          </linearGradient>

          <pattern
            id="panel-background"
            patternUnits="userSpaceOnUse"
            width="100%"
            height="100%"
          >
            <image
              xlinkHref={`https://gedd.ski/img/chat-panel.png`}
              preserveAspectRatio="none"
              x="0"
              y="0"
              opacity=".4"
              width="100%"
              height="100%"
            />
          </pattern>
        </defs>
        <g
          id="Page-1"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="100-by-exact"
            stroke="url(#linearGradient-1)"
            strokeWidth={strokeSize}
          >
            <path
              vectorEffect="non-scaling-stroke"
              fill="url(#panel-background)"
              d={this.props.path}
              id="Pane_External_Box"
            />
          </g>
        </g>
      </svg>
    );
  }
}
