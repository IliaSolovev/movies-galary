import React from "react";


class CatchError extends React.Component {
    state = {
    	hasError: false,
    };
    static getDerivedStateFromError(error: Error) {
    	return { hasError: true };
    }
    render() {
    	return (
    		<div>
    			{this.state.hasError && <h2>Error, please reload page!!!</h2>}
    			{!this.state.hasError && this.props.children}
    		</div>
    	);
    }
}

export default CatchError;