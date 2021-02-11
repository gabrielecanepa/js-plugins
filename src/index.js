// 1. Imports
import { fetchMovies, list, searchMovies } from './movies';
import { initSortable } from './plugins/init_sortable';
import { initMarkdown } from './plugins/init_markdown';
import { initSelect2 } from './plugins/init_select';

// 2. Plugins
initSortable();
initMarkdown();
initSelect2();

// 3. AJAX calls
fetchMovies('harry potter');

// 4. Event listeners
const form = document.querySelector('#search-form');
form.addEventListener('submit', searchMovies);
