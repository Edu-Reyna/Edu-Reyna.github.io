export function renderSection(section) {
    const sectionElement = document.createElement('section');
    sectionElement.className = 'mb-10 opacity-0';

    const titleElement = document.createElement('h2');
    titleElement.className = 'section-title';
    titleElement.textContent = section.title;
    sectionElement.appendChild(titleElement);

    if (section.content) {
        if (Array.isArray(section.content)) {
            const ul = document.createElement('ul');
            ul.className = 'section-content';
            section.content.forEach(item => {
                const li = document.createElement('li');
                li.className = 'list-item';
                li.textContent = item;
                ul.appendChild(li);
            });
            sectionElement.appendChild(ul);
        } else {
            const p = document.createElement('p');
            p.className = 'section-content';
            p.textContent = section.content;
            sectionElement.appendChild(p);
        }
    }

    if (section.subsections) {
        const subsectionsContainer = document.createElement('div');
        subsectionsContainer.className = 'grid gap-6 mt-6';
        
        section.subsections.forEach(subsection => {
            const subsectionDiv = document.createElement('div');
            subsectionDiv.className = 'subsection';

            if (subsection.title) {
                const subTitle = document.createElement('h3');
                subTitle.className = 'subsection-title';
                subTitle.textContent = subsection.title;
                subsectionDiv.appendChild(subTitle);
            }

            if (subsection.items) {
                const ul = document.createElement('ul');
                ul.className = 'section-content';
                subsection.items.forEach(item => {
                    const li = document.createElement('li');
                    li.className = 'list-item';
                    li.textContent = item;
                    ul.appendChild(li);
                });
                subsectionDiv.appendChild(ul);
            }

            if (subsection.content) {
                const p = document.createElement('p');
                p.className = 'text-xl font-bold text-blue-600';
                p.textContent = subsection.content;
                subsectionDiv.appendChild(p);
            }

            subsectionsContainer.appendChild(subsectionDiv);
        });

        sectionElement.appendChild(subsectionsContainer);
    }

    return sectionElement;
}