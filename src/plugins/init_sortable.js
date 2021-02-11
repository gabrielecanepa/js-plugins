// 1. Import
import Sortable from 'sortablejs';

// 2. Function definition
const initSortable = () => {
  const list = document.querySelector('#results');
  Sortable.create(list, {
    ghostClass: 'ghost',
    animation: 150,
    onEnd: (event) => {
      alert(`${event.oldIndex} moved to ${event.newIndex}`);
    }
  });
};

// 3. Export
export { initSortable };
