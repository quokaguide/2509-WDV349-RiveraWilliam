# Florida Springs App — Weekly Research Update  
**Topic:** Security, Compliance, Innovation  
**Project:** Florida Springs Web App  
**Author:** William Rivera  

---

## Project SWOT Breakdown

### Strengths  
The Florida Springs app is being built with modern tools and a clean project structure. This makes it easier to update features, fix bugs, and keep the app organized. Using GitHub also helps track changes and manage different versions of the project. The design is focused on speed and accessibility so users can have a smooth experience.

### Weaknesses  
Since the project is still in early development, not all security features are fully set up yet. Things like user authentication and advanced data protection still need to be added. There is also limited real-world testing so far, which means bugs could show up later. As more tools and libraries are added, managing dependencies can become more complicated.

### Opportunities  
There is a big opportunity to build strong security into the app early. Adding automated scanning tools can help catch problems before the app goes live. The project could also grow by adding features like saved locations, reviews, user profiles, or interactive maps.

### Threats  
Using outdated packages can create security problems. If API keys or secret data are handled incorrectly, it could lead to leaks. Without proper scanning tools, small coding mistakes could turn into bigger security risks.

---

## OWASP Security Risks (Important Takeaways)

The OWASP Top 10 lists the most common security problems in web apps. A few important ones for this project include:

### Broken Access Control  
This happens when users can access things they should not be allowed to. To avoid this, proper login systems and permission controls need to be used.

### Injection Attacks  
Injection attacks happen when bad input is allowed into the system. This can be prevented by validating user input and using secure database queries.

### Security Misconfiguration  
This includes leaving default settings on, exposing debug tools, or not locking down servers. Separating development and production environments helps reduce these risks.

### Sensitive Data Exposure  
If data is not encrypted or secrets are stored incorrectly, private information can be exposed. Using HTTPS and environment variables is important to protect sensitive data.

Learning about these risks early makes it easier to build safer systems.

---

## Code Scanning and Security Tools

GitHub CodeQL is a built-in tool that scans code to find bugs and security issues automatically. It helps catch problems without needing to manually review everything.

Other tools that do similar things include:

### Snyk  
Snyk checks project dependencies and alerts developers when insecure packages are being used.

### SonarQube  
SonarQube scans code for bugs, security problems, and code quality issues. It is often used in professional development teams.

### Dependabot  
Dependabot automatically updates vulnerable packages by creating pull requests. This saves time and helps keep projects secure.

Using these tools together helps reduce risk and keeps the project healthier over time.

---

## Creativity and Innovation (EFF Research)

The Electronic Frontier Foundation focuses on protecting digital rights and online privacy. One important topic reviewed was user privacy.

For the Florida Springs app, this means:

- Only collecting necessary user data  
- Protecting all connections with HTTPS  
- Being clear about how information is stored and used  

When users trust an app with their data, it creates a better experience and encourages long-term use.

---

## How This Research Helps the Project

This research will help guide development by:

- Adding security features earlier instead of later  
- Using scanning tools to catch problems faster  
- Managing dependencies more carefully  
- Designing the app with privacy in mind  

By thinking about these issues now, the Florida Springs app will be more secure, stable, and ready to scale in the future.

---
