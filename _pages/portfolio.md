---
layout: archive
title: "Portfolio"
permalink: /portfolio/
author_profile: true
---

{% include base_path %}

{% for post in site.portfolio reversed %}
  {% include archive-single.html %}
{% endfor %}

## Research Projects

### TuneShield: Mitigating Toxicity in Conversational AI
**Status:** Submitted to arXiv (July 2025)  
**Description:** Defense framework designed to mitigate toxicity during chatbot fine-tuning while preserving conversational quality. Leverages LLM-based toxicity classification and generates synthetic 'healing data' to reinforce desirable behavior.  
**Technologies:** Python, PyTorch, LLMs, Transformers, Fine-tuning  
**Links:** [arXiv](https://arxiv.org/abs/2507.05660) | [PDF](https://arxiv.org/abs/2507.05660)

---

### Taming Data Challenges in ML-based Security Tasks
**Status:** Submitted to arXiv (July 2025)  
**Description:** Comprehensive study on using Generative AI to address data challenges in ML-based security tasks. Introduces novel GenAI scheme "Nimai" for controlled data synthesis and evaluates across 7 diverse security tasks.  
**Technologies:** Python, Generative AI, Tabular Data Synthesis, Security ML  
**Links:** [arXiv](https://arxiv.org/abs/2507.06092) | [PDF](https://arxiv.org/html/2507.06092v1)

---

### Toxicity Injection Attacks on Chatbots
**Status:** Published at ACSAC 2023  
**Description:** First comprehensive study on toxicity injection attacks against open-domain chatbots. Developed novel attack methods and evaluated defenses across multiple state-of-the-art conversational AI systems.  
**Technologies:** Python, PyTorch, Transformers, LLMs  
**Links:** [Paper]({{ base_path }}/files/Toxicity_injection_acsac_paper.pdf) | [Code](https://github.com/secml-lab-vt/Chatbot-Toxicity-Injection/) | [Video](https://www.youtube.com/watch?v=Y9FTew96mxo)

---

### Deepfake Detection in Evolving Threat Landscapes
**Status:** Published at IEEE S&P 2024  
**Description:** Analysis of recent advances in deepfake image detection methods and their performance against evolving generation techniques.  
**Technologies:** Python, Computer Vision, GANs, Diffusion Models  
**Links:** [Paper](https://arxiv.org/abs/2404.16212) | [Code](https://github.com/secml-lab-vt/EvolvingThreat-DeepfakeImageDetect)

---

### LLM Security & Safety Alignment
**Status:** Ongoing Research  
**Description:** Investigating safety alignment techniques for large language models, including supervised fine-tuning and direct preference optimization methods.  
**Technologies:** HuggingFace Transformers, PEFT, LoRA, PyTorch

---

## Industry Projects

### Oracle HCM Cloud Implementations
**Company:** Deloitte Consulting  
**Role:** Senior Consultant  
**Description:** Led multiple large-scale Oracle HCM Cloud transformations for Fortune 500 clients, specializing in payroll reconciliation and technical integrations.  
**Impact:** Successfully delivered 5+ client implementations with $MM payroll systems

---

### Payroll Analytics & Reporting Tools
**Company:** Deloitte Consulting  
**Description:** Developed automated payroll comparison and executive reporting tools for data integrity validation across legacy and new systems.  
**Technologies:** Oracle SQL, BI Publisher, Excel Analytics

---

## Patents & Innovations

### COVID-19 Detection System
**Patent:** Indian Patent No. 387074  
**Description:** Machine learning-based system for COVID-19 diagnosis from chest X-rays using novel image processing techniques.

---

### Temporal Pattern Mining
**Patent:** Indian Patent No. 397728  
**Description:** Novel temporal tree structure for efficient discovery of temporal association rules in large datasets.

---

## Technical Skills Demonstrated

- **AI/ML:** LLMs, Computer Vision, Adversarial Attacks, Model Fine-tuning
- **Programming:** Python, Java, C++, SQL
- **Frameworks:** PyTorch, HuggingFace, DeepSpeed, PEFT
- **Cloud & Enterprise:** Oracle HCM Cloud, AWS, Docker
- **Data Analysis:** SQL, Excel, BI Publisher 