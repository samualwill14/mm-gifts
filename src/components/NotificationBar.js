import { useState } from 'react';

export default function NotificationBar({ text, buttonText, buttonLink, backgroundColor, textColor, buttonColor }) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <div className="w-full py-3 px-5 shadow-md" style={{ backgroundColor }}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center flex-1 min-w-0">
            <p className="text-xs sm:text-sm font-medium truncate" style={{ color: textColor }}>
              {text}
            </p>
          </div>
          <div className="flex-shrink-0 ml-4 flex items-center space-x-4">
            <a
              href={buttonLink}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="inline-flex items-center px-3 py-1 text-xs sm:text-sm font-medium rounded-md transition-colors duration-150 hover:opacity-90"
              style={{ backgroundColor: buttonColor, color: backgroundColor }}
            >
              {buttonText}
            </a>
            <button
              onClick={() => setIsVisible(false)}
              className="p-1 rounded-md hover:opacity-75 transition-opacity"
              style={{ color: textColor }}
              aria-label="Close notification"
            >
              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}