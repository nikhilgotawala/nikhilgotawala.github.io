// Enhanced Scroll Navigation for Academic Portfolio
// Provides smooth scrolling between sections and intelligent pagination

class ScrollNavigation {
    constructor() {
        this.sections = [];
        this.currentSection = 0;
        this.isScrolling = false;
        this.scrollTimeout = null;
        this.isPageTransitioning = false;
        this.scrollThreshold = 50; // pixels from top/bottom to trigger page change
        this.init();
    }

    init() {
        this.setupSections();
        this.setupEventListeners();
        this.setupScrollIndicator();
        this.setupPageNavigation();
    }

    setupSections() {
        // Get all main sections on the page
        this.sections = Array.from(document.querySelectorAll('h2, h3, .page-content > div, .archive__item')).filter(section => {
            return section.offsetHeight > 0 && section.offsetParent !== null;
        });
    }

    setupEventListeners() {
        // Enhanced scroll wheel navigation with pagination
        document.addEventListener('wheel', (e) => {
            if (this.isScrolling || this.isPageTransitioning) return;
            
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            
            // Check if we're at the bottom and trying to scroll down
            if (e.deltaY > 0 && scrollTop + windowHeight >= documentHeight - this.scrollThreshold) {
                e.preventDefault();
                this.loadNextPage();
                return;
            }
            
            // Check if we're at the top and trying to scroll up
            if (e.deltaY < 0 && scrollTop <= this.scrollThreshold) {
                e.preventDefault();
                this.loadPreviousPage();
                return;
            }
            
            // Normal section navigation
            if (e.deltaY > 0) {
                this.navigateToNext();
            } else {
                this.navigateToPrevious();
            }
        }, { passive: false });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (this.isScrolling) return;
            
            switch(e.key) {
                case 'ArrowDown':
                case 'Space':
                    e.preventDefault();
                    this.navigateToNext();
                    break;
                case 'ArrowUp':
                    e.preventDefault();
                    this.navigateToPrevious();
                    break;
                case 'Home':
                    e.preventDefault();
                    this.navigateToSection(0);
                    break;
                case 'End':
                    e.preventDefault();
                    this.navigateToSection(this.sections.length - 1);
                    break;
            }
        });

        // Update current section on scroll
        window.addEventListener('scroll', () => {
            if (this.scrollTimeout) {
                clearTimeout(this.scrollTimeout);
            }
            this.scrollTimeout = setTimeout(() => {
                this.updateCurrentSection();
            }, 100);
        });
    }

    setupScrollIndicator() {
        // Create scroll progress indicator
        const indicator = document.createElement('div');
        indicator.className = 'scroll-indicator';
        indicator.innerHTML = `
            <div class="scroll-progress">
                <div class="scroll-progress-bar"></div>
            </div>
            <div class="scroll-nav">
                <button class="scroll-btn scroll-up" title="Previous Section">↑</button>
                <span class="scroll-position">1 / ${this.sections.length}</span>
                <button class="scroll-btn scroll-down" title="Next Section">↓</button>
            </div>
        `;
        
        document.body.appendChild(indicator);

        // Add click handlers for navigation buttons
        indicator.querySelector('.scroll-up').addEventListener('click', () => this.navigateToPrevious());
        indicator.querySelector('.scroll-down').addEventListener('click', () => this.navigateToNext());
    }

    setupPageNavigation() {
        // Add page navigation for paginated content
        const paginationLinks = document.querySelectorAll('.pagination a');
        
        paginationLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                this.loadPage(link.href);
            });
        });
    }

    navigateToNext() {
        if (this.currentSection < this.sections.length - 1) {
            this.navigateToSection(this.currentSection + 1);
        } else {
            // Check if there's a next page
            const nextPageLink = document.querySelector('.pagination .next');
            if (nextPageLink) {
                this.loadPage(nextPageLink.href);
            }
        }
    }

    navigateToPrevious() {
        if (this.currentSection > 0) {
            this.navigateToSection(this.currentSection - 1);
        } else {
            // Check if there's a previous page
            const prevPageLink = document.querySelector('.pagination .prev');
            if (prevPageLink) {
                this.loadPage(prevPageLink.href);
            }
        }
    }

    navigateToSection(sectionIndex) {
        if (sectionIndex < 0 || sectionIndex >= this.sections.length || this.isScrolling) return;
        
        this.isScrolling = true;
        this.currentSection = sectionIndex;
        
        const targetSection = this.sections[sectionIndex];
        const targetPosition = targetSection.offsetTop - 80; // Account for header
        
        // Smooth scroll to section
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
        
        // Update UI
        this.updateScrollIndicator();
        this.highlightSection(targetSection);
        
        // Reset scrolling flag after animation
        setTimeout(() => {
            this.isScrolling = false;
        }, 800);
    }

    updateCurrentSection() {
        const scrollPosition = window.scrollY + 100;
        
        for (let i = this.sections.length - 1; i >= 0; i--) {
            if (this.sections[i].offsetTop <= scrollPosition) {
                this.currentSection = i;
                this.updateScrollIndicator();
                break;
            }
        }
    }

    updateScrollIndicator() {
        const indicator = document.querySelector('.scroll-indicator');
        if (!indicator) return;
        
        const progressBar = indicator.querySelector('.scroll-progress-bar');
        const position = indicator.querySelector('.scroll-position');
        
        // Update progress bar
        const progress = ((this.currentSection + 1) / this.sections.length) * 100;
        progressBar.style.width = `${progress}%`;
        
        // Update position text
        position.textContent = `${this.currentSection + 1} / ${this.sections.length}`;
        
        // Update button states
        const upBtn = indicator.querySelector('.scroll-up');
        const downBtn = indicator.querySelector('.scroll-down');
        
        upBtn.disabled = this.currentSection === 0;
        downBtn.disabled = this.currentSection === this.sections.length - 1;
    }

    highlightSection(section) {
        // Remove previous highlights
        document.querySelectorAll('.section-highlight').forEach(el => {
            el.classList.remove('section-highlight');
        });
        
        // Add highlight to current section
        section.classList.add('section-highlight');
        
        // Remove highlight after 2 seconds
        setTimeout(() => {
            section.classList.remove('section-highlight');
        }, 2000);
    }

    loadNextPage() {
        const nextPageLink = document.querySelector('.pagination .next, .pagination a[href*="page"]');
        if (nextPageLink) {
            this.loadPage(nextPageLink.href, 'next');
        }
    }

    loadPreviousPage() {
        const prevPageLink = document.querySelector('.pagination .prev, .pagination .previous');
        if (prevPageLink) {
            this.loadPage(prevPageLink.href, 'prev');
        }
    }

    async loadPage(url, direction = null) {
        if (this.isPageTransitioning) return;
        
        try {
            this.isPageTransitioning = true;
            
            // Add loading indicator
            this.showLoadingIndicator();
            
            const response = await fetch(url);
            const html = await response.text();
            const parser = new DOMParser();
            const newDoc = parser.parseFromString(html, 'text/html');
            
            // Replace main content with fade transition
            const mainContent = document.querySelector('.page__content, main, .archive');
            const newContent = newDoc.querySelector('.page__content, main, .archive');
            
            if (mainContent && newContent) {
                // Fade out current content
                mainContent.style.opacity = '0';
                mainContent.style.transition = 'opacity 0.3s ease';
                
                setTimeout(() => {
                    mainContent.innerHTML = newContent.innerHTML;
                    
                    // Update URL
                    window.history.pushState({}, '', url);
                    
                    // Reinitialize for new content
                    this.setupSections();
                    this.currentSection = direction === 'prev' ? this.sections.length - 1 : 0;
                    this.updateScrollIndicator();
                    
                    // Scroll to appropriate position
                    if (direction === 'prev') {
                        window.scrollTo({ top: document.body.scrollHeight, behavior: 'instant' });
                    } else {
                        window.scrollTo({ top: 0, behavior: 'instant' });
                    }
                    
                    // Fade in new content
                    mainContent.style.opacity = '1';
                    
                    this.hideLoadingIndicator();
                    this.isPageTransitioning = false;
                }, 300);
            }
        } catch (error) {
            console.error('Error loading page:', error);
            this.hideLoadingIndicator();
            this.isPageTransitioning = false;
            window.location.href = url; // Fallback to normal navigation
        }
    }

    showLoadingIndicator() {
        const existingIndicator = document.querySelector('.page-loading');
        if (existingIndicator) return;
        
        const indicator = document.createElement('div');
        indicator.className = 'page-loading';
        indicator.innerHTML = '<div class="loading-spinner"></div>';
        document.body.appendChild(indicator);
    }

    hideLoadingIndicator() {
        const indicator = document.querySelector('.page-loading');
        if (indicator) {
            indicator.remove();
        }
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ScrollNavigation();
});

// Add CSS for scroll navigation
const scrollCSS = `
.scroll-indicator {
    position: fixed;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1000;
    background: rgba(255, 255, 255, 0.98);
    border-radius: 15px;
    padding: 12px 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
    border: 1px solid rgba(0, 0, 0, 0.05);
}

.scroll-progress {
    width: 3px;
    height: 80px;
    background: #f5f5f5;
    border-radius: 2px;
    margin: 0 auto 12px;
    position: relative;
    overflow: hidden;
}

.scroll-progress-bar {
    width: 100%;
    height: 0%;
    background: #333;
    border-radius: 2px;
    transition: height 0.3s ease;
}

.scroll-nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
}

.scroll-btn {
    width: 28px;
    height: 28px;
    border: 1px solid #e0e0e0;
    background: white;
    color: #333;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    transition: all 0.2s ease;
}

.scroll-btn:hover:not(:disabled) {
    background: #f8f8f8;
    border-color: #333;
    transform: scale(1.05);
}

.scroll-btn:disabled {
    opacity: 0.3;
    cursor: not-allowed;
    background: #fafafa;
}

.scroll-position {
    font-size: 11px;
    color: #666;
    font-weight: 400;
    min-width: 35px;
    text-align: center;
}

.section-highlight {
    background: rgba(0, 0, 0, 0.02);
    transition: background 0.3s ease;
    padding: 8px 0;
    border-radius: 3px;
}

.page-loading {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10000;
}

.loading-spinner {
    width: 40px;
    height: 40px;
    border: 3px solid #f0f0f0;
    border-top: 3px solid #333;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

@media (max-width: 768px) {
    .scroll-indicator {
        right: 10px;
        padding: 10px 8px;
    }
    
    .scroll-progress {
        height: 80px;
        width: 3px;
    }
    
    .scroll-btn {
        width: 28px;
        height: 28px;
        font-size: 12px;
    }
}
`;

// Inject CSS
const style = document.createElement('style');
style.textContent = scrollCSS;
document.head.appendChild(style); 