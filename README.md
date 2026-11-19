# Week 3: Component Library UI

> **Compulsory Hand-in Statement:**  
> *"A modular, reusable, and accessible React UI component library featuring fully-tested Button, Card, and Modal components with variant states, responsive layouts, keyboard accessibility, and comprehensive API documentation."*

---

## 📌 Project Overview

This project is a modern, lightweight, and production-ready **React Component Library UI** built from scratch using **React 19**, **Vite**, and **Semantic CSS Variables**. It adheres to atomic design principles, the Single Responsibility Principle, and accessibility guidelines (WCAG / WAI-ARIA).

### Key Features
- 🚀 **Zero External UI Bloat**: Built purely with React and CSS variables (no bulky UI frameworks).
- 🎨 **Design System Tokens**: Unified color palette, typography (`Plus Jakarta Sans`), elevations, and borders.
- ♿ **Accessible (a11y)**: ARIA attributes, keyboard support (`Escape` to close modal), focus rings, and body scroll lock.
- 📱 **Fully Responsive**: Flexbox and CSS Grid layouts that adapt cleanly across mobile, tablet, and desktop screens.
- ⚡ **Lightning Fast**: Bundled with Vite with sub-second HMR and optimized production build (`< 5 KB` custom CSS).

---

## 🚀 Quick Start Guide

### Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### 1. Installation
Clone or navigate to the project directory and install dependencies:
```bash
npm install
```

### 2. Run Development Server
Start the local Vite development server:
```bash
npm run dev
```
Open your browser and navigate to:
```
http://localhost:3000
```

### 3. Build for Production
To create an optimized production build:
```bash
npm run build
```

To preview the production build locally:
```bash
npm run preview
```

---

## 🧩 Component API & Documentation

The library exports 3 primary components: `Button`, `Card`, and `Modal`.

```jsx
import { Button, Card, Modal } from './components';
```

---

### 1. Button Component (`<Button />`)

A flexible, interactive button component supporting multiple visual styles, sizes, icon slots, and async loading spinners.

#### Example Usage
```jsx
import { Button } from './components';

// Primary Button
<Button variant="primary" onClick={() => alert('Clicked!')}>
  Save Changes
</Button>

// Button with Icon and Loading state
<Button
  variant="success"
  size="lg"
  isLoading={isSaving}
  leftIcon={<CheckIcon />}
>
  Confirm Order
</Button>

// Danger Outline
<Button variant="danger" size="sm">
  Delete Account
</Button>
```

#### Props Reference
| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `variant` | `'primary' \| 'secondary' \| 'outline' \| 'ghost' \| 'danger' \| 'success'` | `'primary'` | Visual styling theme |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Button height, font-size, and padding |
| `isLoading` | `boolean` | `false` | Displays spinner and disables user interaction |
| `disabled` | `boolean` | `false` | Disables button interactions and styles |
| `fullWidth` | `boolean` | `false` | Stretches button across 100% of container width |
| `leftIcon` | `ReactNode` | `null` | Icon displayed before the text |
| `rightIcon` | `ReactNode` | `null` | Icon displayed after the text |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | Native HTML button type |
| `onClick` | `function` | `undefined` | Click event handler |

---

### 2. Card Component (`<Card />`)

A structured compound container used to display related content, media, and actions.

#### Example Usage
```jsx
import { Card } from './components';

<Card variant="elevated" hoverable>
  <Card.Cover src="/image.jpg" alt="Preview cover" />
  
  <Card.Header>
    <Card.Title>Dashboard Analytics</Card.Title>
    <Card.Description>Monthly user engagement and metrics</Card.Description>
  </Card.Header>

  <Card.Content>
    <p>Detailed performance summaries go here.</p>
  </Card.Content>

  <Card.Footer>
    <Button variant="outline" size="sm">Dismiss</Button>
    <Button variant="primary" size="sm">View Report</Button>
  </Card.Footer>
</Card>
```

#### Props Reference
| Component | Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| `Card` | `variant` | `'elevated' \| 'outlined' \| 'flat'` | `'elevated'` | Background & border elevation style |
| `Card` | `hoverable` | `boolean` | `false` | Enables translateY lift & drop shadow on hover |
| `Card` | `padding` | `'none' \| 'sm' \| 'md' \| 'lg'` | `'md'` | Inner padding spacing |
| `Card.Cover` | `src`, `alt` | `string` | - | Banner image placed at the top |
| `Card.Title` | `as` | `'h1' \| 'h2' \| 'h3' \| 'h4'` | `'h3'` | Semantic heading level |
| `Card.Footer`| `withDivider` | `boolean` | `true` | Displays subtle top border separation |

---

### 3. Modal Component (`<Modal />`)

An accessible dialog component that captures user focus for confirmation, alerts, or forms.

#### Example Usage
```jsx
import { useState } from 'react';
import { Modal, Button } from './components';

function DeleteModalExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button variant="danger" onClick={() => setIsOpen(true)}>
        Delete Item
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Delete Confirmation"
        description="Are you sure you want to proceed?"
        size="sm"
        footer={
          <>
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button variant="danger" onClick={() => setIsOpen(false)}>
              Confirm Delete
            </Button>
          </>
        }
      >
        <p>This action is irreversible and will remove all project files.</p>
      </Modal>
    </>
  );
}
```

#### Props Reference
| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `isOpen` | `boolean` | **Required** | Controls visibility of the modal dialog |
| `onClose` | `function` | **Required** | Handler triggered by close button, ESC key, or backdrop click |
| `title` | `string \| ReactNode` | `null` | Header dialog title |
| `description`| `string \| ReactNode` | `null` | Subtitle describing the modal's purpose |
| `size` | `'sm' \| 'md' \| 'lg' \| 'full'` | `'md'` | Max-width constraint |
| `closeOnOverlayClick` | `boolean` | `true` | Close modal when clicking the dimmed backdrop |
| `closeOnEsc` | `boolean` | `true` | Close modal when pressing the `Escape` key |
| `footer` | `ReactNode` | `null` | Action buttons rendered at the bottom |

#### Accessibility Features Included:
1. `role="dialog"` & `aria-modal="true"` for screen readers.
2. `aria-labelledby` dynamically bound to `title`.
3. Auto locks `document.body.style.overflow = 'hidden'` while open to prevent background scrolling.
4. Smooth `fade-in` overlay and `scale-up` dialog animation.

---

## 🎨 Design System & UX Principles

### 1. Typography & Colors
- **Font Family**: `Plus Jakarta Sans` for clean, modern readability.
- **Color Palette**:
  - Primary: `#4f46e5` (Indigo)
  - Secondary: `#0f172a` (Slate 900)
  - Success: `#10b981` (Emerald)
  - Danger: `#ef4444` (Rose / Red)
  - Background: `#f8fafc` (Slate 50)
  - Surface: `#ffffff`

### 2. Applied Best Practices (from Course Guidelines)
- **Single Responsibility Principle**: Each component handles one specific role cleanly.
- **State Colocation**: Modal state and button loading states are held strictly at the component level where needed, preventing unnecessary global re-renders.
- **Laws of UX Applied**:
  - *Fitts's Law*: Clear interactive touch targets (minimum 40px height for primary buttons).
  - *Hick's Law*: Intuitive, concise action options in dialog footers (e.g. Cancel vs Confirm).
  - *Law of Proximity*: Grouped card headers, body, and footers with consistent spacing.

---

## 📝 Submission Notes

### What Was Built
1. Built 3 reusable components:
   - `Button`: 6 variants, 3 sizes, icon support, loading state with spinner.
   - `Card`: Compound structure (`Header`, `Title`, `Description`, `Content`, `Footer`, `Cover`), hover effects, and 3 elevation styles.
   - `Modal`: Accessible backdrop, focus styling, ESC key handling, scroll locking, and smooth transitions.
2. Built an interactive showcase dashboard (`App.jsx`) with live demos, feedback banners, and form submission simulation.
3. Created clean, maintainable modular CSS tokenized with CSS custom properties.

### What Was Learned
- How to structure compound React components using dot notation (`Card.Header`, `Card.Title`) for maximum developer ergonomics.
- Implementing clean keyboard navigation (`keydown` event listener for `Escape`) and managing side effects with `useEffect` cleanups (body scroll unlocking).
- Balancing simplicity and visual polish without needing heavy external CSS frameworks.

---

## 📁 Project Structure

```
Component library UI/
├── index.html                   # HTML entry point with font preconnects
├── package.json                 # Project dependencies and npm scripts
├── vite.config.js               # Vite configuration with React plugin
├── README.md                    # Project documentation & usage guide
└── src/
    ├── main.jsx                 # React root renderer
    ├── App.jsx                  # Interactive showcase application
    ├── App.css                  # Showcase layout and showcase styles
    ├── index.css                # Global design tokens and resets
    └── components/              # Component library root
        ├── index.js             # Public barrel export file
        ├── Button/
        │   ├── Button.jsx       # Reusable Button logic
        │   └── Button.css       # Button variant & size styles
        ├── Card/
        │   ├── Card.jsx         # Compound Card logic
        │   └── Card.css         # Card variant, elevation & layout styles
        └── Modal/
            ├── Modal.jsx        # Accessible Modal dialog logic
            └── Modal.css        # Backdrop, animation & container styles
```

