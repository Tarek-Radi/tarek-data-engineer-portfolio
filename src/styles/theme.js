import { createGlobalStyle } from 'styled-components';

export const themes = {
  dark: {
    background: '#050a14',           // غامق جدًا (أساس)
    backgroundSoft: '#0a1426',       // أفتح شوية
    surface: '#0f1b33',
    surfaceStrong: '#142447',
    surfaceMuted: '#1a2e57',

    border: 'rgba(120, 160, 255, 0.12)',
    borderStrong: 'rgba(59, 130, 246, 0.25)',

    textPrimary: '#f1f5ff',
    textSecondary: '#cbd5f5',
    textMuted: '#8ea0c5',

    accent: '#3b82f6',
    accentSoft: 'rgba(59, 130, 246, 0.12)',
    accentStrong: '#60a5fa',

    glow: 'rgba(59, 130, 246, 0.2)',
    highlight: '#93c5fd',

    heroOverlay: `
    radial-gradient(circle at 20% 10%, rgba(59, 130, 246, 0.18), transparent 40%),
    radial-gradient(circle at 80% 20%, rgba(147, 197, 253, 0.12), transparent 35%)
  `,

    shadow: '0 24px 60px rgba(0, 0, 0, 0.6)',
    navShadow: '0 18px 40px rgba(0, 0, 0, 0.4)',
  },
  light: {
    background: '#f4f8ff',
    backgroundSoft: '#eaf2ff',
    surface: '#ffffff',
    surfaceStrong: '#f8fbff',
    surfaceMuted: '#edf3ff',

    border: 'rgba(30, 60, 120, 0.10)',
    borderStrong: 'rgba(59, 130, 246, 0.18)',

    textPrimary: '#0b1220',
    textSecondary: '#24324a',
    textMuted: '#5f6f8f',

    accent: '#2563eb',
    accentSoft: 'rgba(37, 99, 235, 0.10)',
    accentStrong: '#3b82f6',

    glow: 'rgba(59, 130, 246, 0.10)',
    highlight: '#60a5fa',

    heroOverlay: `
    radial-gradient(circle at 20% 10%, rgba(59, 130, 246, 0.08), transparent 40%),
    radial-gradient(circle at 80% 20%, rgba(147, 197, 253, 0.06), transparent 35%)
  `,

    shadow: '0 12px 30px rgba(36, 50, 74, 0.08)',
    navShadow: '0 8px 20px rgba(36, 50, 74, 0.06)',
  },
};

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: ${({ theme }) => theme.background};
    --background-soft: ${({ theme }) => theme.backgroundSoft};
    --surface: ${({ theme }) => theme.surface};
    --surface-strong: ${({ theme }) => theme.surfaceStrong};
    --surface-muted: ${({ theme }) => theme.surfaceMuted};
    --border: ${({ theme }) => theme.border};
    --border-strong: ${({ theme }) => theme.borderStrong};
    --text-primary: ${({ theme }) => theme.textPrimary};
    --text-secondary: ${({ theme }) => theme.textSecondary};
    --text-muted: ${({ theme }) => theme.textMuted};
    --accent: ${({ theme }) => theme.accent};
    --accent-soft: ${({ theme }) => theme.accentSoft};
    --accent-strong: ${({ theme }) => theme.accentStrong};
    --glow: ${({ theme }) => theme.glow};
    --highlight: ${({ theme }) => theme.highlight};
    --hero-overlay: ${({ theme }) => theme.heroOverlay};
    --shadow: ${({ theme }) => theme.shadow};
    --nav-shadow: ${({ theme }) => theme.navShadow};
    color-scheme: ${({ theme }) => (theme.background === '#0f1419' ? 'dark' : 'light')};
  }

  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    scroll-padding-top: 96px;
  }

  body {
    margin: 0;
    min-width: 320px;
    font-family: 'Inter', sans-serif;
    color: var(--text-primary);
    background:
      radial-gradient(circle at 15% 20%, var(--glow), transparent 24%),
      radial-gradient(circle at 84% 12%, rgba(121, 183, 255, 0.08), transparent 24%),
      linear-gradient(180deg, var(--background) 0%, var(--background-soft) 48%, var(--background) 100%);
    transition:
      background 240ms ease,
      color 240ms ease;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  body::before {
    content: '';
    position: fixed;
    inset: 0;
    pointer-events: none;
    background-image:
      linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
    background-size: 72px 72px;
    mask-image: radial-gradient(circle at center, black 40%, transparent 92%);
    opacity: 0.25;
  }

  body.menu-open {
    overflow: hidden;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    max-width: 100%;
    display: block;
  }

  button,
  input,
  textarea,
  select {
    font: inherit;
  }

  button {
    color: inherit;
  }

  ::selection {
    background: rgba(74, 154, 142, 0.35);
    color: var(--text-primary);
  }

  :focus-visible {
    outline: 3px solid rgba(74, 154, 142, 0.48);
    outline-offset: 3px;
  }

  #root {
    isolation: isolate;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
/* Scrollbar Styling */

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: var(--background);
}

::-webkit-scrollbar-thumb {
  background: var(--surfaceStrong);
  border-radius: 10px;
  border: 2px solid var(--background);
}

::-webkit-scrollbar-thumb:hover {
  background: var(--accent);
}
  `;
