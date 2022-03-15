import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  component: string;
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log(`[${this.props.component}] Uncaught error:`, error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <h1>
          Sorry.. there was an error in the component {this.props.component}
        </h1>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
