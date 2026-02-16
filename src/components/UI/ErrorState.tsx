import React from 'react';

interface ErrorStateProps {
    message: string;
    onRetry?: () => void;
}

export const ErrorState: React.FC<ErrorStateProps> = ({message, onRetry}) => (
    <div className="flex flex-col items-center justify-center h-full p-4 text-center text-red-500">
        <p className="mb-2">⚠️ {message}</p>
        {onRetry && (
            <button
                onClick={onRetry}
                className="px-4 py-2 text-sm text-white bg-red-500 rounded hover:bg-red-600 transition-colors"
            >
                Retry
            </button>
        )}
    </div>
);
