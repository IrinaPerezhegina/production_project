/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ErrorInfo, ReactNode, Suspense } from 'react';
import { ErrorPage } from 'widgets/ErrorPage';

interface ErrorBoundaryProps {
    children:ReactNode;
}

interface ErrorBoundaryState {
    hasError:boolean;

}

class ErrorBoundary
    extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props:ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
        return { hasError: true };
    }

    componentDidCatch(error:Error, info:ErrorInfo) {
        // eslint-disable-next-line no-console
        console.log(error, info);
    }

    render() {
        const { hasError } = this.state;
        const { children } = this.props;
        if (hasError) {
            return <Suspense fallback=""><ErrorPage /></Suspense>;
        }

        return children;
    }
}

export default ErrorBoundary;
