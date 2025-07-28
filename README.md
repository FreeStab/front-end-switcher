# Frontend Framework Syntax Comparator

A modern web application built with Vue 3 and Vite that allows developers to compare syntax across multiple frontend frameworks side by side. Inspired by [component-party.dev](https://component-party.dev/).

## 🚀 Features

- **Multi-Framework Support**: Compare syntax across 10 popular frontend frameworks:

  - Vue 2 & Vue 3
  - React
  - Svelte 4 & Svelte 5
  - Angular & Angular Renaissance
  - Ember
  - Solid.js
  - Alpine.js

- **Comprehensive Code Examples**: Organized into intuitive categories:

  - **Reactivity**: State declaration, updates, and computed values
  - **Templating**: Basic templates, styling, loops, events, DOM refs, conditionals
  - **Lifecycle**: Mount and unmount hooks
  - **Component Composition**: Props, events, slots, context
  - **Async & Error Handling**: Async/await, error boundaries, loading states, suspense
  - **Form Input**: Text inputs, checkboxes, radio buttons, selects
  - **Webapp Features**: App rendering and data fetching

- **Modern UI**: Clean, responsive design with:
  - Horizontal framework selector with color-coded badges
  - Collapsible sidebar navigation
  - Side-by-side code comparison with **syntax highlighting**
  - Copy-to-clipboard functionality
  - Mobile-friendly responsive layout
  - **Editor-like code presentation** with highlight.js

## 🛠️ Tech Stack

- **Vue 3** with Composition API (`<script setup>`)
- **Vite** for fast development and building
- **highlight.js** for syntax highlighting with GitHub Dark theme
- **Modern CSS** with Grid and Flexbox
- **Responsive Design** for mobile and desktop

## 📦 Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd front-end-switcher
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## 🎯 Usage

1. **Select Frameworks**: Use the horizontal framework selector at the top to choose which frameworks you want to compare (minimum 1, maximum all 10)

2. **Navigate Examples**: Use the sidebar to browse through different categories and code examples

3. **Compare Syntax**: View the selected frameworks' implementations side by side in the main content area

4. **Copy Code**: Click the copy button in each code block to copy the example to your clipboard

## 🏗️ Project Structure

```
src/
├── components/
│   ├── FrameworkSelector.vue    # Framework selection component
│   ├── Sidebar.vue             # Navigation sidebar
│   └── CodeViewer.vue          # Code comparison display
├── data/
│   └── codeExamples.js         # Framework data and code examples
├── App.vue                     # Main application component
├── main.js                     # Application entry point
└── style.css                   # Global styles
```

## 🤝 Contributing

Contributions are welcome! Here are some ways you can help:

1. **Add More Examples**: Extend the code examples in `src/data/codeExamples.js`
2. **Support New Frameworks**: Add new framework configurations
3. **Improve UI/UX**: Enhance the design and user experience
4. **Add Features**: Implement new functionality like syntax highlighting, themes, etc.

### Adding New Code Examples

To add a new code example:

1. Add the example ID to the appropriate category in the `categories` array
2. Add the code implementations for each framework in the `codeExamples` object
3. Follow the existing naming conventions and structure

### Adding New Frameworks

To add a new framework:

1. Add the framework configuration to the `frameworks` array
2. Add code implementations for the new framework across all examples
3. Update the language mapping in `CodeViewer.vue` if needed

## 📱 Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Android Chrome)
- Minimum ES2020 support required

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Inspired by [component-party.dev](https://component-party.dev/)
- Framework documentation and official examples
- Vue.js, React, Svelte, Angular, and other framework communities

## 🔗 Related Projects

- [component-party.dev](https://component-party.dev/) - The original inspiration
- [Vue.js](https://vuejs.org/)
- [React](https://reactjs.org/)
- [Svelte](https://svelte.dev/)
- [Angular](https://angular.io/)

---

**Built with ❤️ using Vue 3 and Vite**
