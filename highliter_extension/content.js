document.addEventListener('mouseup', function () {
    let selectedText = window.getSelection().toString();
    if (selectedText) {
      highlightText(selectedText);
    }
  });
  
  function highlightText(text) {
    let range = window.getSelection().getRangeAt(0);
    let span = document.createElement('span');
    span.style.backgroundColor = 'yellow';
    span.textContent = text;
    range.deleteContents();
    range.insertNode(span);
  }
  