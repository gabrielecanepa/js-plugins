// 1. Imports
import MarkdownIt from 'markdown-it';

// 2. Function definition
const initMarkdown = () => {
  const textarea = document.getElementById('editor');
  const preview = document.getElementById('preview');
  const markdown = new MarkdownIt();

  textarea.addEventListener('keyup', (event) => {
    const html = markdown.render(textarea.value);
    preview.innerHTML = html;
  });
};

// 3. Export
export { initMarkdown };
