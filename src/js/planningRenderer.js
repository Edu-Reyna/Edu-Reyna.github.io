export function renderPlanning(data) {
    const container = document.createElement('div');
    container.className = 'space-y-12';

    data.forEach((section, index) => {
        const sectionElement = document.createElement('section');
        sectionElement.className = 'mb-10 opacity-0 animate-fade-in';
        sectionElement.style.animationDelay = `${index * 0.1}s`;

        const titleElement = document.createElement('h2');
        titleElement.className = 'section-title';
        titleElement.textContent = section.title;
        sectionElement.appendChild(titleElement);

        if (section.subsections) {
            const subsectionsContainer = document.createElement('div');
            subsectionsContainer.className = 'space-y-6';

            section.subsections.forEach(subsection => {
                const subsectionElement = document.createElement('div');
                subsectionElement.className = 'subsection';

                const subtitleElement = document.createElement('h3');
                subtitleElement.className = 'subsection-title';
                subtitleElement.textContent = subsection.title;
                subsectionElement.appendChild(subtitleElement);

                if (subsection.content) {
                    if (Array.isArray(subsection.content)) {
                        subsection.content.forEach(text => {
                            const p = document.createElement('p');
                            p.className = 'section-content mb-2';
                            p.textContent = text;
                            subsectionElement.appendChild(p);
                        });
                    } else {
                        const p = document.createElement('p');
                        p.className = 'section-content mb-2';
                        p.textContent = subsection.content;
                        subsectionElement.appendChild(p);
                    }
                }

                if (subsection.items) {
                    const ul = document.createElement('ul');
                    ul.className = 'section-content list-disc pl-6 space-y-2';
                    subsection.items.forEach(item => {
                        const li = document.createElement('li');
                        li.className = 'list-item';
                        li.textContent = item;
                        ul.appendChild(li);
                    });
                    subsectionElement.appendChild(ul);
                }

                subsectionsContainer.appendChild(subsectionElement);
            });

            sectionElement.appendChild(subsectionsContainer);
        }

        container.appendChild(sectionElement);
    });

    return container;
}