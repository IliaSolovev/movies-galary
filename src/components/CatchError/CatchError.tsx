import * as React from 'react';


class CatchError extends React.Component {
    props: any;

    constructor(props) {
      super(props);
    }

    state = {
    	hasError: false,
      error: null,
    };

    static getDerivedStateFromError(error: Error) {
    	return { hasError: true, error };
    }

    render() {
    	return (
      <div>
        {this.state.hasError && <h2>{this.state.error}</h2>}
        {!this.state.hasError && this.props.children}
      </div>
    	);
    }
}

export default CatchError;
