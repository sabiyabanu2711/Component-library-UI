import React, { useEffect, useCallback } from 'react';
import './Modal.css';

/**
 * Reusable Accessible Modal Component
 * 
 * @param {boolean} isOpen - Whether modal is visible
 * @param {function} onClose - Callback when modal requested to close
 * @param {string} title - Header title text
 * @param {string} description - Header subtitle or description
 * @param {'sm' | 'md' | 'lg' | 'full'} size - Modal width variant
 * @param {boolean} closeOnOverlayClick - If true, clicking backdrop closes modal
 * @param {boolean} closeOnEsc - If true, pressing Escape key closes modal
 * @param {React.ReactNode} footer - Action buttons rendered in footer
 * @param {React.ReactNode} children - Modal body contents
 */
export function Modal({
  isOpen,
  onClose,
  title,
  description,
  size = 'md',
  closeOnOverlayClick = true,
  closeOnEsc = true,
  footer,
  children,
  className = ''
}) {
  // Handle ESC key press
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape' && closeOnEsc) {
        onClose?.();
      }
    },
    [closeOnEsc, onClose]
  );

  // Prevent background page scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget && closeOnOverlayClick) {
      onClose?.();
    }
  };

  return (
    <div
      className={`ui-modal-overlay ${isOpen ? 'ui-modal-overlay--open' : ''}`}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? 'ui-modal-title' : undefined}
      aria-describedby={description ? 'ui-modal-desc' : undefined}
    >
      <div className={`ui-modal-container ui-modal-container--${size} ${className}`.trim()}>
        {/* Header */}
        {(title || onClose) && (
          <div className="ui-modal__header">
            <div className="ui-modal__header-titles">
              {title && (
                <h2 id="ui-modal-title" className="ui-modal__title">
                  {title}
                </h2>
              )}
              {description && (
                <p id="ui-modal-desc" className="ui-modal__description">
                  {description}
                </p>
              )}
            </div>
            {onClose && (
              <button
                type="button"
                className="ui-modal__close-btn"
                onClick={onClose}
                aria-label="Close dialog"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            )}
          </div>
        )}

        {/* Body Content */}
        <div className="ui-modal__body">{children}</div>

        {/* Footer */}
        {footer && <div className="ui-modal__footer">{footer}</div>}
      </div>
    </div>
  );
}

export default Modal;

