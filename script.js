document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.content');
  
    tabs.forEach(tab => {
      tab.addEventListener('click', function() {
        const tabId = this.getAttribute('data-tab');
  
        // Hide all contents
        contents.forEach(content => {
          content.style.display = 'none';
        });
  
        // Show the selected content
        const selectedContent = document.getElementById(tabId);
        if (selectedContent) {
          selectedContent.style.display = 'block';
        }
      });
    });
  });
  