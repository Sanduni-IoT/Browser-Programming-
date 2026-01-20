# Lecture 02 – Semantic HTML & Structure

## 1. What I implemented this lecture
- Organized content using `<header>`, `<main>`, `<section>`, and `<footer>`.
- Implemented a "Skip to content" link for keyboard accessibility.
- Used `<figure>` and `<figcaption>` to group images and the video iframe.
- Created a logical heading hierarchy from `<h1>` to `<h3>`.

## 2. Semantic decisions I made
### Decision 1
- Element(s) used: `<header>`
- Where in the page: Top of the body
- Why this element is semantically correct: It groups my name and bio as introductory content rather than just using a generic `div`.

### Decision 2
- Element(s) used: `<section>`
- Where in the page: Portfolio and Areas of Interest
- Why this element is semantically correct: It defines a thematic grouping of content, helping screen readers understand the page layout.

### Decision 3
- Element(s) used: `<figure>` and `<figcaption>`
- Where in the page: Inside the Portfolio section
- Why this element is semantically correct: It links my media (images/video) directly to their text descriptions so they are treated as a single unit.

## 3. Accessibility considerations
- Included a skip link to allow users to bypass the header content.
- Provided descriptive `alt` text for all images to assist visually impaired users.

## 4. What I learned
- I learned how to structure a document so that it is readable by machines and humans without using CSS.

## 5. What I still need to improve
- I need to practice more with complex ARIA labels for advanced accessibility.

## 6. Notes about AI usage
- Tool used: Gemini
- What I accepted as-is: The semantic structure and accessibility skip-link logic.
- What I modified manually: My personal details, name, and interest list.