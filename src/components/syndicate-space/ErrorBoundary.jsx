"use client";

import React from 'react';
import { ErrorFallback } from './ErrorStates';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo
        });

        // Logger l'erreur (remplacer par votre service de logging)
        console.error('ErrorBoundary caught an error:', error, errorInfo);
        
        // Optionnel: envoyer l'erreur à un service de monitoring
        if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'exception', {
                description: error.toString(),
                fatal: false
            });
        }
    }

    handleReset = () => {
        this.setState({ hasError: false, error: null, errorInfo: null });
    };

    render() {
        if (this.state.hasError) {
            const { fallback: CustomFallback, title, subtitle } = this.props;
            
            if (CustomFallback) {
                return <CustomFallback 
                    error={this.state.error} 
                    resetError={this.handleReset}
                    errorInfo={this.state.errorInfo}
                />;
            }

            return (
                <ErrorFallback
                    error={this.state.error}
                    resetError={this.handleReset}
                    title={title}
                    subtitle={subtitle}
                />
            );
        }

        return this.props.children;
    }
}

// HOC pour wrapper les composants facilement
export const withErrorBoundary = (Component, errorBoundaryProps = {}) => {
    const WrappedComponent = (props) => (
        <ErrorBoundary {...errorBoundaryProps}>
            <Component {...props} />
        </ErrorBoundary>
    );
    
    WrappedComponent.displayName = `withErrorBoundary(${Component.displayName || Component.name})`;
    
    return WrappedComponent;
};

export default ErrorBoundary;