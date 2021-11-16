import React, { ErrorInfo, ReactNode } from "react";

export interface Props {
  children: ReactNode;
}
export interface State {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
  // eslint-disable-next-line react/state-in-constructor
  public state: State = {
    hasError: false,
  };

  static getDerivedStateFromError(error: Error): State {
    console.log("error", error);
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error("error:", error, errorInfo);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      alert("Что-то пошло не так...");
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
