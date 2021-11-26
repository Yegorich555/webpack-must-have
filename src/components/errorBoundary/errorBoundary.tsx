import React, { Component } from "react";

// eslint-disable-next-line @typescript-eslint/ban-types
type ErrProps = {};
type ErrState = {
  err: boolean;
};
class ErrorBoundary extends Component<ErrProps, ErrState> {
  constructor(props: ErrProps) {
    super(props);
    this.state = {
      err: false,
    };
  }

  // @ts-ignore
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    alert(errorInfo);
    console.error(error);
  }

  // @ts-ignore
  static getDerivedStateFromError(error: Error) {
    return { err: true };
  }

  render() {
    if (this.state.err) {
      return <div>ooops somehing went wrong...</div>;
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
