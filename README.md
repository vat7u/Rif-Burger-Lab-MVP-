# 🍔 Rif Burger Lab (MVP)

> **Two Labs. One Standard.**
> The Science of Flavor in Chefchaouen.

## 🎯 MVP Goal
**Convert visitors into takeaway orders via WhatsApp.**
This project is not a "brand museum". It is a high-performance sales tool designed to help hungry customers decide fast and order faster.

---

## 🏗 Architecture & Tech Stack

This project follows a strict **3-Layer Architecture** to prevent visual drift and ensure maintainability.

### The Stack
*   **Framework**: [Vite](https://vitejs.dev/) + [React](https://react.dev/)
*   **Styling**: [Tailwind CSS v3](https://tailwindcss.com/)
*   **UI Library**: [Headless UI v2.1](https://headlessui.com/) (Menu, Tabs)
*   **Icons**: [Heroicons](https://heroicons.com/)
*   **Theme**: System + Manual Dark Mode Support

### 3-Layer Architecture
1.  **Layer 1: Directive (Design System)**
    *   Located in `/directives`.
    *   Contains the "Source of Truth" (Brand Guidelines, Web Plan).
2.  **Layer 2: Orchestration (The Architect)**
    *   The intelligent assembly of components based on directives.
3.  **Layer 3: Execution (The Code)**
    *   The `src/` folder containing deterministic React components.

---

## ⚡ Key Features

*   **Dual Lab Identity**: Distinct visual zones for **Green Lab** (Plant-based) and **Meat Lab** (Angus Beef).
*   **Dark Mode**: Fully supported with a manual toggle and system preference detection.
*   **WhatsApp Ordering**: The primary conversion funnel. No complex forms or user accounts.
*   **Mobile First**: Designed for fast decisions on small screens.

---

## 🚀 Getting Started

### Prerequisites
*   Node.js (v18+)
*   npm

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/vat7u/Rif-Burger-Lab-MVP-.git
    cd Rif-Burger-Lab-MVP-
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```

4.  **Build for Production**
    ```bash
    npm run build
    ```

---

## 📂 Project Structure

```bash
/directives       # Project specifications & brand guidelines
/public           # Static assets (Favicons, logos)
/src
  /components     # Reusable UI atoms (Navbar, Footer, ThemeToggle)
  /hooks          # Custom hooks (useTheme)
  /pages          # Route views (Home, Menu, Order, About)
  /lib            # Static data (menuData.js)
  App.jsx         # Main Layout & Router
  index.css       # Tailwind directives & Global styles
```

---

*Built with precision.*
