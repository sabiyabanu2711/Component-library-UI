import React, { useState } from 'react';
import { Button, Card, Modal } from './components';
import './App.css';

// Reusable clean SVG Icons
const Icons = {
  Plus: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  ),
  ArrowRight: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
    </svg>
  ),
  Check: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  Trash: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </svg>
  ),
  Sparkles: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    </svg>
  ),
  Eye: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" />
    </svg>
  )
};

export default function App() {
  // Interactive state
  const [isDemoLoading, setIsDemoLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  // Modal states
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  // Form states
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const showFeedback = (msg) => {
    setStatusMessage(msg);
    setTimeout(() => setStatusMessage(''), 4000);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsFormOpen(false);
      showFeedback(`Profile saved for: ${formData.name || 'User'} (${formData.email || 'no-email'})`);
      setFormData({ name: '', email: '' });
    }, 1000);
  };

  return (
    <div className="app-container">
      {/* Header & Hero */}
      <header className="app-header">
        <div className="app-badge-row">
          <span className="badge badge--primary">Week 3 Compulsory Task</span>
          <span className="badge badge--success">React 19 & Vite</span>
          <span className="badge badge--primary">Production Ready</span>
        </div>
        <h1 className="app-title">Component Library UI</h1>
        <p className="app-subtitle">
          A modern, reusable, and accessible design system featuring Button, Card, and Modal components built with clean semantic React and CSS variables.
        </p>

        {/* Compulsory 1-sentence requirement statement */}
        <div className="handin-banner">
          <div className="handin-banner__label">Task Requirement & Hand-in Statement</div>
          <div className="handin-banner__text">
            "A modular and reusable React component library containing fully-featured Button, Card, and Modal components with variant styling, keyboard accessibility, interactive states, and comprehensive README documentation."
          </div>
        </div>
      </header>

      {/* Global Interactive Notification Feedback */}
      {statusMessage && (
        <div className="action-feedback" role="status">
          <span>{statusMessage}</span>
          <button
            onClick={() => setStatusMessage('')}
            style={{ background: 'none', border: 'none', cursor: 'pointer', fontWeight: 'bold', color: 'inherit' }}
          >
            ✕
          </button>
        </div>
      )}

      {/* ================= SECTION 1: BUTTON COMPONENT ================= */}
      <section className="showcase-section">
        <div className="section-header">
          <h2 className="section-title">1. Button Component</h2>
          <span className="section-tag">&lt;Button variant="..." size="..." /&gt;</span>
        </div>

        {/* Variants */}
        <div className="showcase-group">
          <h3 className="group-title">Style Variants</h3>
          <div className="elements-row">
            <Button variant="primary" onClick={() => showFeedback('Clicked Primary Button')}>
              Primary Button
            </Button>
            <Button variant="secondary" onClick={() => showFeedback('Clicked Secondary Button')}>
              Secondary
            </Button>
            <Button variant="outline" onClick={() => showFeedback('Clicked Outline Button')}>
              Outline
            </Button>
            <Button variant="ghost" onClick={() => showFeedback('Clicked Ghost Button')}>
              Ghost
            </Button>
            <Button variant="success" leftIcon={<Icons.Check />} onClick={() => showFeedback('Clicked Success Button')}>
              Success
            </Button>
            <Button variant="danger" leftIcon={<Icons.Trash />} onClick={() => showFeedback('Clicked Danger Button')}>
              Danger
            </Button>
          </div>
        </div>

        {/* Sizes */}
        <div className="showcase-group">
          <h3 className="group-title">Component Sizes</h3>
          <div className="elements-row">
            <Button size="sm" variant="primary">Small (sm)</Button>
            <Button size="md" variant="primary">Medium (md)</Button>
            <Button size="lg" variant="primary">Large (lg)</Button>
          </div>
        </div>

        {/* States & Icons */}
        <div className="showcase-group">
          <h3 className="group-title">States &amp; Icons</h3>
          <div className="elements-row">
            <Button
              variant="primary"
              isLoading={isDemoLoading}
              onClick={() => showFeedback('Action performed')}
            >
              Interactive Button
            </Button>
            <Button
              variant="outline"
              onClick={() => setIsDemoLoading((prev) => !prev)}
            >
              {isDemoLoading ? 'Stop Loading' : 'Toggle Loading State'}
            </Button>
            <Button variant="primary" disabled>
              Disabled State
            </Button>
            <Button variant="primary" leftIcon={<Icons.Plus />}>
              Add Item
            </Button>
            <Button variant="secondary" rightIcon={<Icons.ArrowRight />}>
              Continue
            </Button>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: CARD COMPONENT ================= */}
      <section className="showcase-section">
        <div className="section-header">
          <h2 className="section-title">2. Card Component</h2>
          <span className="section-tag">&lt;Card variant="elevated | outlined | flat" /&gt;</span>
        </div>

        <div className="cards-grid">
          {/* Card 1: Elevated & Hoverable Feature Card */}
          <Card variant="elevated" hoverable>
            <Card.Cover
              src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=600&auto=format&fit=crop&q=80"
              alt="Design System Showcase"
            />
            <div style={{ padding: '1.25rem' }}>
              <Card.Header>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Card.Title>Modern Design System</Card.Title>
                  <span className="badge badge--primary">v1.0</span>
                </div>
                <Card.Description>Reusable UI primitives for fast shipping</Card.Description>
              </Card.Header>

              <Card.Content>
                <p>
                  Built with atomic design principles. Highly flexible compound components supporting headers, cover images, descriptions, and custom action bars.
                </p>
              </Card.Content>

              <Card.Footer>
                <Button variant="outline" size="sm" onClick={() => showFeedback('Bookmarked Card')}>
                  Bookmark
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  rightIcon={<Icons.ArrowRight />}
                  onClick={() => setIsInfoOpen(true)}
                >
                  View Details
                </Button>
              </Card.Footer>
            </div>
          </Card>

          {/* Card 2: Outlined Card with Action */}
          <Card variant="outlined" padding="lg">
            <Card.Header>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                <span style={{ color: 'var(--color-primary)' }}><Icons.Sparkles /></span>
                <Card.Title>Clean Code Architecture</Card.Title>
              </div>
              <Card.Description>Zero external UI dependencies</Card.Description>
            </Card.Header>

            <Card.Content>
              <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
                <li>Pure React with standard hooks (useCallback, useEffect)</li>
                <li>CSS variables for seamless theming</li>
                <li>Semantic HTML5 and accessibility (ARIA) attributes</li>
              </ul>
            </Card.Content>

            <Card.Footer>
              <Button
                variant="secondary"
                size="sm"
                fullWidth
                onClick={() => setIsFormOpen(true)}
              >
                Configure Settings
              </Button>
            </Card.Footer>
          </Card>

          {/* Card 3: Flat Metric / Summary Card */}
          <Card variant="flat" padding="lg">
            <Card.Header>
              <Card.Title>Component Performance</Card.Title>
              <Card.Description>Bundle size and rendering benchmark</Card.Description>
            </Card.Header>

            <Card.Content>
              <div style={{ margin: '1rem 0' }}>
                <div style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--color-primary)' }}>
                  &lt; 5 KB
                </div>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                  Lightweight footprint with zero runtime CSS-in-JS overhead.
                </p>
              </div>
            </Card.Content>

            <Card.Footer withDivider={false}>
              <Button
                variant="outline"
                size="sm"
                onClick={() => showFeedback('Metrics verified!')}
              >
                Refresh Audit
              </Button>
            </Card.Footer>
          </Card>
        </div>
      </section>

      {/* ================= SECTION 3: MODAL COMPONENT ================= */}
      <section className="showcase-section">
        <div className="section-header">
          <h2 className="section-title">3. Modal Component</h2>
          <span className="section-tag">&lt;Modal isOpen=&#123;isOpen&#125; onClose=&#123;onClose&#125; /&gt;</span>
        </div>

        <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
          Accessible dialog component with backdrop click-to-close, Escape key listener, background scroll lock, and smooth fade &amp; slide animations.
        </p>

        <div className="elements-row">
          <Button
            variant="danger"
            leftIcon={<Icons.Trash />}
            onClick={() => setIsConfirmOpen(true)}
          >
            Open Delete Modal (Confirmation)
          </Button>

          <Button
            variant="primary"
            leftIcon={<Icons.Plus />}
            onClick={() => setIsFormOpen(true)}
          >
            Open Form Modal (User Profile)
          </Button>

          <Button
            variant="secondary"
            leftIcon={<Icons.Eye />}
            onClick={() => setIsInfoOpen(true)}
          >
            Open Info / Details Modal
          </Button>
        </div>
      </section>

      {/* ================= MODAL INSTANCES ================= */}

      {/* Modal 1: Confirmation Dialog */}
      <Modal
        isOpen={isConfirmOpen}
        onClose={() => setIsConfirmOpen(false)}
        title="Delete Project Component?"
        description="This action cannot be undone."
        size="sm"
        footer={
          <>
            <Button variant="outline" onClick={() => setIsConfirmOpen(false)}>
              Cancel
            </Button>
            <Button
              variant="danger"
              leftIcon={<Icons.Trash />}
              onClick={() => {
                setIsConfirmOpen(false);
                showFeedback('Component successfully deleted');
              }}
            >
              Confirm Delete
            </Button>
          </>
        }
      >
        <p>
          Are you sure you want to delete this component item? All associated tokens and preview configurations will be removed permanently.
        </p>
      </Modal>

      {/* Modal 2: Form Input Dialog */}
      <Modal
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        title="Edit User Profile"
        description="Update your component library credentials."
        size="md"
        footer={
          <>
            <Button variant="ghost" onClick={() => setIsFormOpen(false)}>
              Cancel
            </Button>
            <Button
              variant="primary"
              isLoading={isSubmitting}
              onClick={handleFormSubmit}
            >
              Save Profile
            </Button>
          </>
        }
      >
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="user-name">Full Name</label>
            <input
              id="user-name"
              type="text"
              className="form-input"
              placeholder="e.g. Alex Johnson"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="user-email">Email Address</label>
            <input
              id="user-email"
              type="email"
              className="form-input"
              placeholder="alex@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>
        </form>
      </Modal>

      {/* Modal 3: Large Information Modal */}
      <Modal
        isOpen={isInfoOpen}
        onClose={() => setIsInfoOpen(false)}
        title="Component Architecture & Guidelines"
        description="Implementation notes for Week 3 Component Library UI"
        size="lg"
        footer={
          <Button variant="primary" onClick={() => setIsInfoOpen(false)}>
            Close Overview
          </Button>
        }
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <h4 style={{ fontWeight: 700, marginBottom: '0.25rem' }}>1. Single Responsibility Principle</h4>
            <p style={{ color: 'var(--text-muted)' }}>
              Each component handles exactly one job. Button handles triggering interactions and loading states, Card groups related content and actions, and Modal provides an isolated context for alerts and forms.
            </p>
          </div>
          <div>
            <h4 style={{ fontWeight: 700, marginBottom: '0.25rem' }}>2. Accessibility (a11y)</h4>
            <p style={{ color: 'var(--text-muted)' }}>
              Modals include `role="dialog"`, `aria-modal="true"`, focus boundaries, body scroll locking, and ESC key dismissal. Buttons provide clear focus rings and `aria-busy` attributes during loading states.
            </p>
          </div>
          <div>
            <h4 style={{ fontWeight: 700, marginBottom: '0.25rem' }}>3. Extensible Props</h4>
            <p style={{ color: 'var(--text-muted)' }}>
              Components forward all standard HTML attributes (`...props`) and refs, allowing clean integration with forms and third-party libraries.
            </p>
          </div>
        </div>
      </Modal>

      {/* Footer */}
      <footer className="app-footer">
        <p>Week 3 Compulsory Project: Component Library UI • Built with React &amp; Vite</p>
      </footer>
    </div>
  );
}

