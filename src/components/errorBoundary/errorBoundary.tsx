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
    // Обновить состояние с тем, чтобы следующий рендер показал запасной UI.
    console.log("error", error);
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // Можно также сохранить информацию об ошибке в соответствующую службу журнала ошибок
    console.error("error:", error, errorInfo);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      // Можно отрендерить запасной UI произвольного вида
      alert("Что-то пошло не так...");
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
