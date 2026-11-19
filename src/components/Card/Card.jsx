import React from 'react';
import './Card.css';

/**
 * Main Card Container Component
 */
export function Card({
  children,
  variant = 'elevated',
  hoverable = false,
  padding = 'md',
  className = '',
  ...props
}) {
  const classNames = [
    'ui-card',
    `ui-card--${variant}`,
    `ui-card--padding-${padding}`,
    hoverable ? 'ui-card--hoverable' : '',
    className
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  );
}

/**
 * Card Cover Image
 */
export function CardCover({ src, alt = 'Card cover', className = '', ...props }) {
  return (
    <img
      src={src}
      alt={alt}
      className={`ui-card__cover ${className}`.trim()}
      {...props}
    />
  );
}

/**
 * Card Header Section
 */
export function CardHeader({ children, className = '', ...props }) {
  return (
    <div className={`ui-card__header ${className}`.trim()} {...props}>
      {children}
    </div>
  );
}

/**
 * Card Title
 */
export function CardTitle({ children, as: Component = 'h3', className = '', ...props }) {
  return (
    <Component className={`ui-card__title ${className}`.trim()} {...props}>
      {children}
    </Component>
  );
}

/**
 * Card Description / Subtitle
 */
export function CardDescription({ children, className = '', ...props }) {
  return (
    <p className={`ui-card__description ${className}`.trim()} {...props}>
      {children}
    </p>
  );
}

/**
 * Card Body / Main Content
 */
export function CardContent({ children, className = '', ...props }) {
  return (
    <div className={`ui-card__content ${className}`.trim()} {...props}>
      {children}
    </div>
  );
}

/**
 * Card Footer / Action Bar
 */
export function CardFooter({ children, withDivider = true, className = '', ...props }) {
  const classNames = [
    'ui-card__footer',
    !withDivider ? 'ui-card__footer--no-divider' : '',
    className
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  );
}

// Attach subcomponents for convenient namespaced usage: Card.Header, Card.Title, etc.
Card.Cover = CardCover;
Card.Header = CardHeader;
Card.Title = CardTitle;
Card.Description = CardDescription;
Card.Content = CardContent;
Card.Footer = CardFooter;

export default Card;

