import { createGlobalStyle } from 'styled-components';

export const themes = {
  dark: {
    mode: 'dark',
    background: '#07110f',
    backgroundSoft: '#0c1715',
    surface: '#101d1b',
    surfaceStrong: '#142521',
    surfaceMuted: '#19302b',
    border: 'rgba(211, 226, 221, 0.12)',
    borderStrong: 'rgba(45, 212, 191, 0.28)',
    textPrimary: '#f4fbf8',
    textSecondary: '#d1ded9',
    textMuted: '#93a7a0',
    accent: '#14b8a6',
    accentSoft: 'rgba(20, 184, 166, 0.12)',
    accentStrong: '#5eead4',
    glow: 'rgba(20, 184, 166, 0.12)',
    highlight: '#f59e0b',
    heroOverlay: 'linear-gradient(135deg, rgba(20, 184, 166, 0.12), rgba(245, 158, 11, 0.10))',
    shadow: '0 18px 42px rgba(0, 0, 0, 0.34)',
    navShadow: '0 14px 34px rgba(0, 0, 0, 0.28)',
  },
  light: {
    mode: 'light',
    background: '#f6f8f7',
    backgroundSoft: '#edf4f1',
    surface: '#ffffff',
    surfaceStrong: '#f2f8f5',
    surfaceMuted: '#e7f1ed',
    border: 'rgba(24, 52, 47, 0.12)',
    borderStrong: 'rgba(13, 148, 136, 0.24)',
    textPrimary: '#10201d',
    textSecondary: '#263c37',
    textMuted: '#61766f',
    accent: '#0d9488',
    accentSoft: 'rgba(13, 148, 136, 0.10)',
    accentStrong: '#0f766e',
    glow: 'rgba(13, 148, 136, 0.08)',
    highlight: '#d97706',
    heroOverlay: 'linear-gradient(135deg, rgba(13, 148, 136, 0.10), rgba(217, 119, 6, 0.08))',
    shadow: '0 12px 28px rgba(16, 32, 29, 0.08)',
    navShadow: '0 8px 24px rgba(16, 32, 29, 0.08)',
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
    color-scheme: ${({ theme }) => theme.mode};
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
      linear-gradient(180deg, var(--background) 0%, var(--background-soft) 50%, var(--background) 100%);
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
      linear-gradient(rgba(255, 255, 255, 0.025) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.025) 1px, transparent 1px);
    background-size: 72px 72px;
    mask-image: linear-gradient(180deg, rgba(0, 0, 0, 0.65), transparent 78%);
    opacity: 0.28;
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
    background: rgba(20, 184, 166, 0.34);
    color: var(--text-primary);
  }

  :focus-visible {
    outline: 3px solid rgba(20, 184, 166, 0.46);
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

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: var(--background);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--surface-strong);
    border-radius: 10px;
    border: 2px solid var(--background);
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--accent);
  }
`;
