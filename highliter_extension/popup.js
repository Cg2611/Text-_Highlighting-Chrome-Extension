document.getElementById('toggle-highlight').addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.scripting.executeScript({
        target: {tabId: tabs[0].id},
        function: toggleHighlighting
      });
    });
  });
  
  function toggleHighlighting() {
    // Implement toggle functionality if needed
  }
  