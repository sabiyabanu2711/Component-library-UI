import React, { forwardRef } from 'react';
import './Button.css';

/**
 * Reusable Button Component
 * 
 * @param {'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'success'} variant - Visual style variant
 * @param {'sm' | 'md' | 'lg'} size - Button size
 * @param {boolean} isLoading - Shows loading spinner and disables interactions
 * @param {boolean} disabled - Disables button
 * @param {boolean} fullWidth - Takes up 100% of parent container width
 * @param {React.ReactNode} leftIcon - Icon rendered before text
 * @param {React.ReactNode} rightIcon - Icon rendered after text
 * @param {string} className - Additional custom CSS classes
 * @param {React.ReactNode} children - Button label/content
 */
export const Button = forwardRef(function Button(
  {
    children,
    variant = 'primary',
    size = 'md',
    isLoading = false,
    disabled = false,
    fullWidth = false,
    leftIcon,
    rightIcon,
    className = '',
    type = 'button',
    ...props
  },
  ref
) {
  const isDisabled = disabled || isLoading;

  const classNames = [
    'ui-button',
    `ui-button--${variant}`,
    `ui-button--${size}`,
    fullWidth ? 'ui-button--full' : '',
    isLoading ? 'ui-button--loading' : '',
    className
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      ref={ref}
      type={type}
      className={classNames}
      disabled={isDisabled}
      aria-busy={isLoading}
      {...props}
    >
      {isLoading ? (
        <>
          <span className="ui-button__spinner" aria-hidden="true" />
          <span>Loading...</span>
        </>
      ) : (
        <>
          {leftIcon && <span className="ui-button__icon ui-button__icon--left">{leftIcon}</span>}
          {children}
          {rightIcon && <span className="ui-button__icon ui-button__icon--right">{rightIcon}</span>}
        </>
      )}
    </button>
  );
});

export default Button;

