# Copilot Instructions

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

This is a Vue 3 project built with Vite that serves as a front-end framework syntax comparator.

## Project Context

- **Main Purpose**: Compare syntax across multiple front-end frameworks
- **Supported Frameworks**: Vue 2, Vue 3, React, Svelte 4, Svelte 5, Angular, Angular Renaissance, Ember, Solid.js, Alpine
- **Architecture**: Single-page application with framework selector, sidebar navigation, and main content area

## Code Organization

- Use Vue 3 Composition API for all components
- Follow Vue 3 best practices with `<script setup>` syntax
- Organize code examples by categories: Reactivity, Templating, Lifecycle, Component composition, Form input, Webapp features
- Use TypeScript where beneficial for type safety
- Keep components modular and reusable

## Styling Guidelines

- Use modern CSS with CSS Grid and Flexbox
- Implement responsive design for mobile and desktop
- Use CSS custom properties for theming
- Keep styling consistent across framework examples

## Data Structure

- Store code examples in structured JSON/JS objects
- Each example should include code for all supported frameworks
- Include metadata like framework version, complexity level, and description
