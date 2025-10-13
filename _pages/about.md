---
permalink: /
title: "About us"
excerpt: "About us"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

The Signal Processing Applications Group (Grupo de Aplicaciones del Procesado de Señal, GAPS) was created in 1988. It belongs to the department of Signals, Systems and Radiocommunications ([SSR](https://ssr.upm.es/)) of the Universidad Politécnica de Madrid ([UPM](https://www.upm.es/)). Our research activity includes data science, theory and analysis of systems, speech and sound technology, and intelligent electromagnetic and ultrasonic sensor systems. 

## Join us

Check the positions available in each of our research lines, specially if you are a student willing to join us for your bachelor's or master's thesis (TFG/TFM):
* [Machine Learning applied to health](../lines_ml_health)
* [Machine Learning applied to communications](../lines_ml_comm)
* [Underwater Navigation](../lines_underwater_navigation)

You can also check the contact details of the faculty [here](../people), and write us if you want to propose a topic related to what we do!


## News

* We are looking for a PhD candidate in the area of [Machine Learning applied to health](../lines_ml_health). If you are interested, send us an email with your CV, at the contact mails provided in the link.

## Recent Publications

<style>
.zoom-modal img.zoomed {
  max-width: none;
  max-height: none;
  width: 150%;
  height: auto;
  cursor: move;
  transform: scale(1.15);
}
.publications-slider {
  position: relative;
  max-width: 800px;
  margin: 40px auto;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.slider-container {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.slide {
  min-width: 100%;
  position: relative;
}

.slide img {
  width: 100%;
  height: auto;
  display: block;
  cursor: zoom-in;
}

.slide-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 15px;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.3s;
}

.slide-caption:hover {
  background: rgba(0, 0, 0, 0.85);
}

.slide-caption h3 {
  margin: 0 0 5px 0;
  font-size: 16px;
  color: white;
}

.slide-caption p {
  margin: 0;
  font-size: 12px;
}

.slider-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 15px 10px;
  cursor: pointer;
  font-size: 20px;
  z-index: 10;
  transition: background 0.3s;
}

.slider-nav:hover {
  background: rgba(0, 0, 0, 0.8);
}

.slider-nav.prev {
  left: 10px;
}

.slider-nav.next {
  right: 10px;
}

.slider-dots {
  text-align: center;
  padding: 15px 0;
  background: #f8f9fa;
}

.dot {
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #ccc;
  margin: 0 5px;
  cursor: pointer;
  transition: background 0.3s;
}

.dot.active {
  background: #007bff;
}

.slider-link {
  text-align: center;
  padding: 15px;
  background: #f8f9fa;
}

.slider-link a {
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
}

.slider-link a:hover {
  text-decoration: underline;
}

/* Zoom Modal Styles */
.zoom-modal {
  display: none;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.95);
  overflow: hidden;
}

.zoom-modal.active {
  display: flex;
  align-items: center;
  justify-content: center;
}

.zoom-container {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.zoom-modal img {
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
  cursor: zoom-in;
  transition: transform 0.1s ease-out;
  transform-origin: center center;
}

.zoom-modal img.zoomed {
  max-width: none;
  max-height: none;
  width: 120%;
  height: auto;
  cursor: move;
  transform: scale(1.2);
}

@keyframes zoomIn {
  from {
    transform: scale(0.5);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

.zoom-close {
  position: absolute;
  top: 20px;
  right: 40px;
  color: white;
  font-size: 40px;
  font-weight: bold;
  cursor: pointer;
  z-index: 1001;
}

.zoom-close:hover {
  color: #ccc;
}

.zoom-hint {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  background: rgba(0, 0, 0, 0.7);
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 14px;
  z-index: 1001;
  pointer-events: none;
  transition: opacity 0.3s;
}
</style>

<!-- Zoom Modal -->
<div id="zoomModal" class="zoom-modal">
  <span class="zoom-close" onclick="closeZoom()">&times;</span>
  <div class="zoom-container">
    <img id="zoomedImage" src="" alt="Zoomed poster" onclick="toggleZoomLevel(event)">
  </div>
  <div class="zoom-hint" id="zoomHint">Click image to zoom • ESC to close</div>
</div>

<div class="publications-slider">
  <button class="slider-nav prev" onclick="moveSlide(-1)">❮</button>
  <button class="slider-nav next" onclick="moveSlide(1)">❯</button>
  
  <div class="slider-container" id="sliderContainer">
    <!-- Slide 1 -->
    <div class="slide" data-pub-link="../publications/#decaflow">
      <img src="../images/posters/decaflow.png" alt="Publication Poster 1" onclick="event.stopPropagation(); openZoom(this.src)">
      <div class="slide-caption" onclick="event.stopPropagation(); goToPublication(this.parentElement.dataset.pubLink)">
        <h3>DeCaFlow: A Deconfounding Causal Generative Model</h3>
        <p>Almodóvar, A., et al. - NeurIPS 2025 • Click to view publication →</p>
      </div>
    </div>
    <!-- Slide 2 -->
    <div class="slide" data-pub-link="../publications/#vessel-localization">
      <img src="../images/posters/mateo.png" alt="Publication Poster 2" onclick="event.stopPropagation(); openZoom(this.src)">
      <div class="slide-caption" onclick="event.stopPropagation(); goToPublication(this.parentElement.dataset.pubLink)">
        <h3>Attentive Neural Processes for Vessel Localization</h3>
        <p>Fernández Salvador, L. F., et al. - JMSE 2025 • Click to view publication →</p>
      </div>
    </div>
    <!-- Add more slides as needed -->
  </div>
  
  <div class="slider-dots" id="sliderDots"></div>
  
  <div class="slider-link">
    <a href="../publications">View All Publications →</a>
  </div>
</div>

<script>
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
}

function goToSlide(index) {
  currentSlide = index;
  updateSlider();
}

// Start auto-advance slider
function startSlider() {
  // Clear any existing interval
  if (sliderInterval) {
    clearInterval(sliderInterval);
  }
  // Auto-advance slider every 5 seconds
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
  
  // Calculate translation based on mouse position
  // When mouse is at 0, translate positive (show top/left)
  // When mouse is at 1, translate negative (show bottom/right)
  const translateX = (0.5 - mouseX) * 60; // Increased range for maximum freedom
  const translateY = (0.5 - mouseY) * 60;
  
  // Apply transform with moderate zoom (1.15)
  zoomedImage.style.transform = `scale(1.15) translate(${translateX}%, ${translateY}%)`;
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
</script>