// Publications Slider and Zoom functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const sliderContainer = document.getElementById('sliderContainer');
const dotsContainer = document.getElementById('sliderDots');
let sliderInterval = null;

// Create dots
for (let i = 0; i < totalSlides; i++) {
  const dot = document.createElement('span');
  dot.className = 'dot';
  dot.onclick = () => goToSlide(i);
  dotsContainer.appendChild(dot);
}

function updateSlider() {
  sliderContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
  
  // Update dots
  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentSlide);
  });
}

function moveSlide(direction) {
  currentSlide += direction;
  
  if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
  } else if (currentSlide >= totalSlides) {
    currentSlide = 0;
  }
  
  updateSlider();
  
  // Restart the timer when manually navigating
  startSlider();
}

function goToSlide(index) {
  currentSlide = index;
  updateSlider();
  
  // Restart the timer when manually navigating
  startSlider();
}

// Start auto-advance slider
function startSlider() {
  // Clear any existing interval
  if (sliderInterval) {
    clearInterval(sliderInterval);
  }
  // Auto-advance slider every 10 seconds
  sliderInterval = setInterval(() => {
    moveSlide(1);
  }, 10000);
}

// Stop slider
function stopSlider() {
  if (sliderInterval) {
    clearInterval(sliderInterval);
    sliderInterval = null;
  }
}

// Zoom functions
let isZoomed = false;
let zoomCenterX = 0.5;
let zoomCenterY = 0.5;

function openZoom(imageSrc) {
  const modal = document.getElementById('zoomModal');
  const zoomedImage = document.getElementById('zoomedImage');
  const zoomHint = document.getElementById('zoomHint');
  
  // Stop the slider when opening zoom
  stopSlider();
  
  zoomedImage.src = imageSrc;
  zoomedImage.classList.remove('zoomed');
  isZoomed = false;
  zoomCenterX = 0.5;
  zoomCenterY = 0.5;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden'; // Prevent scrolling
  
  // Hide the masthead/navigation - try all possible selectors
  const masthead = document.querySelector('.masthead') || 
                   document.querySelector('.masthead__inner-wrap') ||
                   document.querySelector('header') ||
                   document.querySelector('.site-header') ||
                   document.querySelector('nav.greedy-nav');
  
  console.log('Masthead element found:', masthead); // Debug log
  
  if (masthead) {
    masthead.style.display = 'none';
    masthead.style.visibility = 'hidden';
  }
  
  // Show hint for 3 seconds
  zoomHint.style.opacity = '1';
  setTimeout(() => {
    zoomHint.style.opacity = '0';
  }, 3000);
}

function closeZoom() {
  const modal = document.getElementById('zoomModal');
  const zoomedImage = document.getElementById('zoomedImage');
  
  modal.classList.remove('active');
  zoomedImage.classList.remove('zoomed');
  zoomedImage.style.transform = '';
  isZoomed = false;
  document.body.style.overflow = ''; // Restore scrolling
  
  // Show the masthead/navigation again - try all possible selectors
  const masthead = document.querySelector('.masthead') || 
                   document.querySelector('.masthead__inner-wrap') ||
                   document.querySelector('header') ||
                   document.querySelector('.site-header') ||
                   document.querySelector('nav.greedy-nav');
  
  if (masthead) {
    masthead.style.display = '';
  }
  
  // Remove mouse move listener
  zoomedImage.removeEventListener('mousemove', handleMouseMove);
  
  // Resume the slider when closing zoom
  startSlider();
}

function toggleZoomLevel(event) {
  event.stopPropagation();
  const zoomedImage = document.getElementById('zoomedImage');
  const zoomHint = document.getElementById('zoomHint');
  
  if (isZoomed) {
    // Already zoomed in, close the modal
    closeZoom();
  } else {
    // Calculate where the user clicked on the image (0-1 range)
    const rect = zoomedImage.getBoundingClientRect();
    zoomCenterX = (event.clientX - rect.left) / rect.width;
    zoomCenterY = (event.clientY - rect.top) / rect.height;
    
    // Clamp values between 0 and 1
    zoomCenterX = Math.max(0, Math.min(1, zoomCenterX));
    zoomCenterY = Math.max(0, Math.min(1, zoomCenterY));
    
    // Zoom in and enable panning
    zoomedImage.classList.add('zoomed');
    isZoomed = true;
    
    // Center on click position
    updateImagePosition(zoomCenterX, zoomCenterY);
    
    // Add mouse move listener for panning
    zoomedImage.addEventListener('mousemove', handleMouseMove);
    
    zoomHint.textContent = 'Move mouse to pan • Click to close • ESC to close';
    zoomHint.style.opacity = '1';
    setTimeout(() => {
      zoomHint.style.opacity = '0';
    }, 3000);
  }
}

function handleMouseMove(event) {
  const zoomedImage = document.getElementById('zoomedImage');
  
  if (!isZoomed) return;
  
  // Get mouse position relative to the viewport
  const container = document.getElementById('zoomModal');
  const containerRect = container.getBoundingClientRect();
  
  // Normalize mouse position (0 to 1)
  const mouseX = (event.clientX - containerRect.left) / containerRect.width;
  const mouseY = (event.clientY - containerRect.top) / containerRect.height;
  
  updateImagePosition(mouseX, mouseY);
}

function updateImagePosition(mouseX, mouseY) {
  const zoomedImage = document.getElementById('zoomedImage');
  
  // Use a scale of 1.4 for subtle zoom (perfect for high-res images)
  const zoomScale = 1.4;
  
  // Calculate the maximum translation needed to show all parts of the zoomed image
  // We need a larger translation range to compensate for the viewport constraints
  // Use a multiplier to ensure full coverage of the image
  const maxTranslate = ((zoomScale - 1) / 2) * 100 * 2.5; // Increased multiplier for full coverage with smaller zoom
  
  // Map mouse position (0-1) to translation range
  // When mouse is at 0 (top/left), show top/left of image (translate DOWN/RIGHT = positive)
  // When mouse is at 1 (bottom/right), show bottom/right of image (translate UP/LEFT = negative)
  const translateX = (0.5 - mouseX) * maxTranslate * 2;
  const translateY = (0.5 - mouseY) * maxTranslate * 2;
  
  // Apply transform with scale first, then translate in the scaled coordinate system
  zoomedImage.style.transform = `scale(${zoomScale}) translate(${translateX}%, ${translateY}%)`;
}

// Click on modal background to close
document.getElementById('zoomModal').addEventListener('click', function(event) {
  if (event.target === this || event.target.classList.contains('zoom-container')) {
    closeZoom();
  }
});

// Navigate to publication
function goToPublication(link) {
  if (link) {
    window.location.href = link;
  }
}

// Close zoom on Escape key
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeZoom();
  }
});

// Initialize slider
updateSlider();
startSlider();
