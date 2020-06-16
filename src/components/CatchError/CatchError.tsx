import * as React from 'react';

interface State {
    hasError: boolean,
    error: null | Error,
}


export class CatchError extends React.Component<{}, State> {
  constructor(props: Readonly<{}>) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  render() {
    return (
      <div>
        {this.state.hasError ? <h2>{this.state.error}</h2> : this.props.children}
      </div>
    );
  }
}
