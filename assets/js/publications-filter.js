// Publications filter and highlight functionality
document.addEventListener('DOMContentLoaded', function() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const publications = document.querySelectorAll('.publication-item');
  
  function updateYearHeaders() {
    // Get all h2 year headers
    const yearHeaders = document.querySelectorAll('h2');
    
    yearHeaders.forEach(header => {
      // Check if this is a year header (contains only numbers)
      if (/^\d{4}$/.test(header.textContent.trim())) {
        // Find all publications until the next h2
        let nextElement = header.nextElementSibling;
        let hasVisiblePubs = false;
        
        while (nextElement && nextElement.tagName !== 'H2') {
          if (nextElement.classList.contains('publication-item') && 
              !nextElement.classList.contains('hidden')) {
            hasVisiblePubs = true;
            break;
          }
          nextElement = nextElement.nextElementSibling;
        }
        
        // Hide or show the year header
        if (hasVisiblePubs) {
          header.style.display = 'block';
        } else {
          header.style.display = 'none';
        }
      }
    });
  }
  
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      
      const selectedAuthor = this.dataset.author;
      
      // Filter publications
      publications.forEach(pub => {
        if (selectedAuthor === 'all') {
          pub.classList.remove('hidden');
        } else {
          const authors = pub.dataset.authors || '';
          if (authors.includes(selectedAuthor)) {
            pub.classList.remove('hidden');
          } else {
            pub.classList.add('hidden');
          }
        }
      });
      
      // Update year headers visibility
      updateYearHeaders();
    });
  });
  
  // Initial update
  updateYearHeaders();
  
  // Highlight publication if coming from slider with hash
  window.addEventListener('load', function() {
    const hash = window.location.hash;
    if (hash) {
      const targetElement = document.querySelector(hash);
      if (targetElement && targetElement.classList.contains('publication-item')) {
        // Scroll to the element
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Add highlight class
        targetElement.classList.add('highlight');
        
        // Remove highlight after animation completes (4 seconds)
        setTimeout(() => {
          targetElement.classList.remove('highlight');
        }, 4000);
      }
    }
  });
});
