import React from 'react';
import MeasureAndRender from "MeasureAndRender";
import Panel from 'Panel';


export default () => {

  const styles = {
    position: "relative",
    display: "grid",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "45vh 45vh",
  };

  const stroke = 1;
  const offset = 0;

  return (
    <div style={styles}>
      <div style={{ position: "relative"}}>
      <MeasureAndRender stretch={true} debounce={1}>
        {bounds => {
          const path = `
                  M${bounds.width - stroke},${stroke} 
                  L${stroke},${stroke} 
                  L${stroke},${bounds.height - stroke} 
                  L${bounds.width - 77 - offset},${bounds.height - stroke} 
                  L${bounds.width - 47 - offset},${bounds.height - 30}
                  L${bounds.width - stroke},${bounds.height - 30}
                  Z`;

          return <Panel bounds={bounds} path={path} />
        }}
      </MeasureAndRender>
      </div>
    </div>
  )
}

