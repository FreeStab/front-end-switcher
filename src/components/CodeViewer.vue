<script setup>
import { computed, nextTick, onMounted, ref, watch } from "vue";
import { codeExamples, frameworkLanguages } from "../data/index.js";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import typescript from "highlight.js/lib/languages/typescript";
import xml from "highlight.js/lib/languages/xml";
import handlebars from "highlight.js/lib/languages/handlebars";
import "highlight.js/styles/github-dark.css";

// Register languages
hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("typescript", typescript);
hljs.registerLanguage("xml", xml);
hljs.registerLanguage("html", xml);
hljs.registerLanguage("vue", xml);
hljs.registerLanguage("jsx", javascript);
hljs.registerLanguage("tsx", typescript);
hljs.registerLanguage("svelte", xml);
hljs.registerLanguage("handlebars", handlebars);
hljs.registerLanguage("hbs", handlebars);

const props = defineProps({
  frameworks: Array,
  example: String,
});

const currentExample = computed(() => {
  return codeExamples[props.example] || {};
});

const hasCode = computed(() => {
  return Object.keys(currentExample.value).length > 0;
});

// Track active file tab for each framework
const activeFileTabs = ref({});

// Helper to check if content is multi-file
const isMultiFile = (content) => {
  return content && typeof content === 'object' && content.files && Array.isArray(content.files);
};

// Get current content for display (either string or current file from multi-file)
const getCurrentContent = (frameworkId) => {
  const content = currentExample.value[frameworkId];
  if (!content) return null;
  
  if (isMultiFile(content)) {
    const activeTab = activeFileTabs.value[frameworkId] || 0;
    return content.files[activeTab]?.content || '';
  }
  
  return content;
};

// Get files for tabs (returns null if single file)
const getFiles = (frameworkId) => {
  const content = currentExample.value[frameworkId];
  if (!content || !isMultiFile(content)) return null;
  return content.files;
};

// Set active file tab
const setActiveFileTab = (frameworkId, fileIndex) => {
  activeFileTabs.value[frameworkId] = fileIndex;
  // Re-highlight after tab change
  nextTick(() => highlightCode());
};

// Reset active tabs when example changes
watch(() => props.example, () => {
  activeFileTabs.value = {};
}, { immediate: true });

const copyToClipboard = async (frameworkId) => {
  try {
    const content = getCurrentContent(frameworkId);
    await navigator.clipboard.writeText(content);
    // You could add a toast notification here
  } catch (err) {
    console.error("Failed to copy to clipboard:", err);
  }
};

const getLanguageForFramework = (frameworkId) => {
  return frameworkLanguages[frameworkId] || "javascript";
};

const highlightCode = () => {
  nextTick(() => {
    // Clear existing highlighting first
    document.querySelectorAll("pre code").forEach((block) => {
      // Remove existing highlight classes
      block.className = block.className.replace(/hljs[a-z-]*/g, "").trim();
      block.removeAttribute("data-highlighted");
    });

    // Apply new highlighting
    document.querySelectorAll("pre code").forEach((block) => {
      hljs.highlightElement(block);
    });
  });
};

// Watch for changes in example or frameworks to re-highlight
watch(
  [() => props.example, () => props.frameworks],
  () => {
    highlightCode();
  },
  { flush: "post", immediate: true }
);
</script>

<template>
  <main class="code-viewer">
    <div v-if="!hasCode" class="no-content">
      <h2>Select an example from the sidebar to view code</h2>
      <p>
        Choose from various categories like Reactivity, Templating, Lifecycle, and more.
      </p>
    </div>

    <div v-else class="code-examples">
      <div v-for="framework in frameworks" :key="framework.id" class="code-example">
        <div class="code-header">
          <h3 class="framework-name" :style="{ color: framework.color }">
            <img 
              :src="framework.logo" 
              :alt="`${framework.name} logo`"
              class="framework-name-logo"
            />
            {{ framework.name }}
          </h3>
          <button
            v-if="getCurrentContent(framework.id)"
            @click="copyToClipboard(framework.id)"
            class="copy-button"
            title="Copy to clipboard"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
          </button>
        </div>

        <!-- File tabs for multi-file examples -->
        <div v-if="getFiles(framework.id)" class="file-tabs">
          <button
            v-for="(file, index) in getFiles(framework.id)"
            :key="index"
            @click="setActiveFileTab(framework.id, index)"
            :class="['file-tab', { active: (activeFileTabs[framework.id] || 0) === index }]"
          >
            {{ file.name }}
          </button>
        </div>

        <div class="code-container">
          <pre v-if="getCurrentContent(framework.id)" class="code-block">
            <code :class="`language-${getLanguageForFramework(framework.id)}`">{{ getCurrentContent(framework.id) }}</code>
          </pre>
          <div v-else class="no-code">
            <p>Code example not available for {{ framework.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.code-viewer {
  flex: 1;
  padding: 1.5rem;
  overflow-y: auto;
}

.no-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
  color: #6b7280;
}

.no-content h2 {
  margin: 0 0 0.5rem 0;
  font-size: 1.5rem;
  color: #374151;
}

.no-content p {
  margin: 0;
  font-size: 1rem;
}

.code-examples {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
}

.code-example {
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  overflow: hidden;
}

.code-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: #f9fafb;
  border-bottom: 1px solid #e5e7eb;
}

.framework-name {
  margin: 0;
  font-size: 1.125rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.framework-name-logo {
  width: 1.25rem;
  height: 1.25rem;
  flex-shrink: 0;
}

.copy-button {
  padding: 0.5rem;
  border: none;
  background: transparent;
  color: #6b7280;
  cursor: pointer;
  border-radius: 0.25rem;
  transition: all 0.15s ease;
}

.copy-button:hover {
  background: #e5e7eb;
  color: #374151;
}

.code-container {
  position: relative;
}

.file-tabs {
  display: flex;
  background: #f1f5f9;
  border-bottom: 1px solid #e5e7eb;
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.file-tabs::-webkit-scrollbar {
  display: none;
}

.file-tab {
  padding: 0.5rem 1rem;
  border: none;
  background: transparent;
  color: #6b7280;
  cursor: pointer;
  font-size: 0.875rem;
  font-family: 'Fira Code', 'Monaco', 'Cascadia Code', 'Roboto Mono', monospace;
  white-space: nowrap;
  border-bottom: 2px solid transparent;
  transition: all 0.15s ease;
}

.file-tab:hover {
  background: #e2e8f0;
  color: #374151;
}

.file-tab.active {
  background: #ffffff;
  color: #1f2937;
  border-bottom-color: #3b82f6;
  font-weight: 500;
}

.code-block {
  margin: 0;
  padding: 1.5rem;
  background: #0d1117;
  font-family: "Fira Code", "Monaco", "Cascadia Code", "Roboto Mono", monospace;
  font-size: 0.875rem;
  line-height: 1.6;
  overflow-x: auto;
  white-space: pre-wrap;
  word-wrap: break-word;
  border-radius: 0;
}

.code-block code {
  color: inherit;
  background: inherit;
  padding: 0;
  border-radius: 0;
  font-family: inherit;
  font-size: inherit;
  display: block;
}

/* Custom syntax highlighting enhancements */
.code-block .hljs {
  background: transparent !important;
  color: #e6edf3;
}

/* Improve token readability */
.code-block .hljs-keyword,
.code-block .hljs-selector-tag,
.code-block .hljs-built_in {
  color: #ff7b72;
  font-weight: 600;
}

.code-block .hljs-string,
.code-block .hljs-attr {
  color: #a5d6ff;
}

.code-block .hljs-comment {
  color: #8b949e;
  font-style: italic;
}

.code-block .hljs-number,
.code-block .hljs-literal {
  color: #79c0ff;
}

.code-block .hljs-tag,
.code-block .hljs-name {
  color: #7ee787;
}

.code-block .hljs-attribute {
  color: #ffa657;
}

.no-code {
  padding: 1.5rem;
  text-align: center;
  color: #6b7280;
  font-style: italic;
}

@media (max-width: 768px) {
  .code-viewer {
    padding: 1rem;
  }

  .code-examples {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .code-block {
    font-size: 0.75rem;
    padding: 1rem;
  }
}

@media (max-width: 480px) {
  .code-header {
    padding: 0.75rem;
  }

  .framework-name {
    font-size: 1rem;
    gap: 0.375rem;
  }

  .framework-name-logo {
    width: 1rem;
    height: 1rem;
  }
}
</style>
