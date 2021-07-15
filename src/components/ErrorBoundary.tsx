import { Component, ErrorInfo, ReactNode } from "react";

import { Redirect } from "react-router-dom";

interface AppProps {
  children: ReactNode;
}

interface AppState {
  hasErrorInfo: boolean;
  hasError: boolean;
}

class ErrorBoundary extends Component<AppProps, AppState> {
  // state: AppState = { hasError: false };
  constructor(props: AppProps) {
    super(props);
    this.state = { hasErrorInfo: false, hasError: false };
  }

  // static getDerivedStateFromError(error: Error) {
  //   return { hasError: true };
  // }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Error: ", error, errorInfo);
    this.setState({
      hasError: true,
      hasErrorInfo: true,
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>EB: Smth went wrong</h1>
          <Redirect to={{ pathname: "/" }} />
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
