# Aravind Cheruvu - Academic Portfolio Website

This is a Jekyll-based academic portfolio website built using the Academic Pages template, customized for Aravind Cheruvu's research and professional profile.

## About

PhD student in Computer Science at Virginia Tech, specializing in security and generative AI. This website showcases research publications, professional experience, and academic achievements.

## Features

- **Homepage**: Personal introduction and latest news
- **Publications**: Research papers and patents with links to PDFs and code
- **CV**: Comprehensive academic and professional background
- **Talks**: Conference presentations and media appearances
- **Teaching**: Academic coursework and mentoring activities
- **Portfolio**: Research and industry projects

## Quick Start

### Prerequisites

- Ruby (version 2.5 or later)
- Bundler gem
- Git

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/aravindcheruvu/aravindcheruvu.github.io.git
   cd aravindcheruvu.github.io
   ```

2. Install dependencies:
   ```bash
   bundle install
   ```

3. Run the website locally:
   ```bash
   bundle exec jekyll serve --livereload
   ```

4. View the website at `http://localhost:4000`

### For GitHub Pages Deployment

1. Push to your GitHub repository
2. Enable GitHub Pages in repository settings
3. Set source to deploy from main branch
4. Your site will be available at `https://yourusername.github.io`

## Customization

### Personal Information

Edit `_config.yml` to update:
- Personal details (name, email, bio)
- Social media links
- Google Scholar, GitHub profiles
- Site URL and repository information

### Content Updates

- **About page**: Edit `_pages/about.md`
- **Publications**: Edit `_pages/publications.md`
- **CV**: Edit `_pages/cv.md`
- **Other pages**: Update files in `_pages/` directory

### Adding Content

- **Publications**: Add new papers to `_pages/publications.md`
- **News**: Update latest news in `_pages/about.md`
- **Files**: Add PDFs to `files/` directory (current resume: `Aravind_Cheruvu_Resume_Latest.pdf`)
- **Images**: Add images to `images/` directory

## File Structure

```
├── _config.yml          # Site configuration
├── _data/               # Site data files
├── _includes/           # HTML templates
├── _layouts/            # Page layouts
├── _pages/              # Main website pages
├── _sass/               # Stylesheets
├── assets/              # JavaScript and other assets
├── files/               # PDF files (resume, papers)
├── images/              # Image files
├── Gemfile              # Ruby dependencies
└── README.md            # This file
```

## Key Pages

- `/` - Homepage (about page)
- `/publications/` - Research publications
- `/cv/` - Curriculum Vitae
- `/talks/` - Presentations and talks
- `/teaching/` - Teaching and coursework
- `/portfolio/` - Projects and portfolio

## Research Highlights

### Current Work
- Security and Generative AI
- Toxicity in Conversational AI Systems
- Large Language Model Safety
- Deepfake Detection

### Recent Publications
- **ACSAC 2023**: "A First Look at Toxicity Injection Attacks on Open-domain Chatbots"
- **IEEE S&P 2024**: "An Analysis of Recent Advances in Deepfake Image Detection in an Evolving Threat Landscape"

## Contact

- **Email**: acheruvu@vt.edu
- **Google Scholar**: [Profile](https://scholar.google.co.in/citations?user=nfn3FFQVva4C&hl=en)
- **GitHub**: [aravindcheruvu](https://github.com/aravindcheruvu)

## Technical Details

Built with:
- Jekyll 4.x
- Academic Pages template
- GitHub Pages compatible
- Responsive design
- SEO optimized

## License

This website template is based on Academic Pages, which is licensed under the MIT License. See the original [Academic Pages repository](https://github.com/academicpages/academicpages.github.io) for more details.

## Acknowledgments

- Based on the [Academic Pages](https://github.com/academicpages/academicpages.github.io) template
- Built for Jekyll and GitHub Pages
- Uses the Minimal Mistakes theme as foundation
