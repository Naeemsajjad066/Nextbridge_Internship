/**
 * Website Color Palette
 * Centralized color definitions for consistent theming across the application
 */

export const colors = {
  // Primary Colors
  primary: '#059669', // Emerald - Main brand color
  dark: '#1F2937', // Dark Slate - Dark backgrounds and text
  background: '#F8FAFC', // Light background
  cards: '#FFFFFF', // White cards
  accent: '#84CC16', // Lime - Accent color for highlights
  text: '#111827', // Main text color
  muted: '#64748B', // Muted text for secondary content

  // Semantic Aliases (for clarity in code)
  emerald: '#059669',
  darkSlate: '#1F2937',
  lime: '#84CC16',
}

/**
 * Color utilities for dynamic styling
 */
export const getColor = (colorName) => {
  return colors[colorName] || colors.primary
}

/**
 * Tailwind class name helpers
 */
export const tailwindColors = {
  // Background classes
  bg: {
    primary: 'bg-[#059669]',
    dark: 'bg-[#1F2937]',
    background: 'bg-[#F8FAFC]',
    cards: 'bg-white',
    accent: 'bg-[#84CC16]',
  },

  // Text classes
  text: {
    primary: 'text-[#059669]',
    dark: 'text-[#1F2937]',
    main: 'text-[#111827]',
    muted: 'text-[#64748B]',
    accent: 'text-[#84CC16]',
  },

  // Border classes
  border: {
    primary: 'border-[#059669]',
    dark: 'border-[#1F2937]',
    accent: 'border-[#84CC16]',
    muted: 'border-[#64748B]',
  },

  // Hover states
  hover: {
    bgPrimary: 'hover:bg-[#059669]',
    bgDark: 'hover:bg-[#1F2937]',
    bgAccent: 'hover:bg-[#84CC16]',
    textPrimary: 'hover:text-[#059669]',
    textAccent: 'hover:text-[#84CC16]',
  },
}

export default colors
