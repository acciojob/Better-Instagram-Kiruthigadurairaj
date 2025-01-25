document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.image');
  let dragSrcEl = null;

  function handleDragStart(e) {
    dragSrcEl = this;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.outerHTML);
    this.classList.add('dragging');
  }

  function handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  }

  function handleDragEnter() {
    this.classList.add('over');
  }

  function handleDragLeave() {
    this.classList.remove('over');
  }

  function handleDrop(e) {
    e.stopPropagation();
    if (dragSrcEl !== this) {
      dragSrcEl.parentNode.removeChild(dragSrcEl);
      const dropHTML = e.dataTransfer.getData('text/html');
      this.insertAdjacentHTML('beforebegin', dropHTML);
      const droppedElement = this.previousSibling;
      addDragAndDropListeners(droppedElement);
    }
    this.classList.remove('over');
  }

  function handleDragEnd() {
    images.forEach((image) => {
      image.classList.remove('over');
      image.classList.remove('dragging');
    });
  }

  function addDragAndDropListeners(element) {
    element.addEventListener('dragstart', handleDragStart, false);
    element.addEventListener('dragenter', handleDragEnter, false);
    element.addEventListener('dragover', handleDragOver, false);
    element.addEventListener('dragleave', handleDragLeave, false);
    element.addEventListener('drop', handleDrop, false);
    element.addEventListener('dragend', handleDragEnd, false);
  }

  images.forEach((image) => addDragAndDropListeners(image));
});
