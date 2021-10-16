import React from "react";
import { ReactNode } from "react";

class ClassComponent extends React.Component<{
    title: ReactNode,
}> {
    render() {
        return(
            <h1>{this.props.title}</h1>
        )
    }
}

export default ClassComponent;