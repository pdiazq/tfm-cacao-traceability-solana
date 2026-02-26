interface ErrorMessageProps {
  error: string;
  onDismiss?: () => void;
}

export function ErrorMessage({ error, onDismiss }: ErrorMessageProps) {
  return (
    <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded flex justify-between items-center">
      <span>{error}</span>
      {onDismiss && (
        <button
          onClick={onDismiss}
          className="text-red-600 hover:text-red-800 font-semibold"
        >
          ✕
        </button>
      )}
    </div>
  );
}
