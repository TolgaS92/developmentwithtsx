import React, { ReactNode } from "react";
// Functional props
function FunctionalComponent({
    children
  }: {
    children: (num: number) => ReactNode
  }) {
    const [state, setState] = React.useState<number>(1);
  
    return (
      <div>
        <div>
          {children(state)}
        </div>
        <div>
          <button onClick={() => setState(state + 1)}>Add</button>
        </div>
      </div>
    )
  
  }
  export default FunctionalComponent;