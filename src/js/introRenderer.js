export function renderIntroSection(section) {
    const container = document.createElement('div');
    container.className = 'mb-12 animate__animated animate__fadeIn';

    const title = document.createElement('h2');
    title.className = 'section-title';
    title.textContent = section.title;
    container.appendChild(title);

    if (section.content) {
        const content = document.createElement('p');
        content.className = 'text-gray-300 leading-relaxed mb-6';
        content.textContent = section.content;
        container.appendChild(content);
    }

    if (section.subsections) {
        const subsectionsContainer = document.createElement('div');
        subsectionsContainer.className = 'space-y-6';

        section.subsections.forEach(subsection => {
            const subsectionElement = document.createElement('div');
            subsectionElement.className = 'subsection';

            const subtitle = document.createElement('h3');
            subtitle.className = 'subsection-title';
            subtitle.textContent = subsection.title;
            subsectionElement.appendChild(subtitle);

            if (subsection.content) {
                const subsectionContent = document.createElement('p');
                subsectionContent.className = 'text-gray-300';
                subsectionContent.textContent = subsection.content;
                subsectionElement.appendChild(subsectionContent);
            }

            subsectionsContainer.appendChild(subsectionElement);
        });

        container.appendChild(subsectionsContainer);
    }

    return container;
}