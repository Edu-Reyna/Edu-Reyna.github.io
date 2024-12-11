export function renderMonitoringSection(section) {
    const container = document.createElement('div');
    container.className = 'mb-12 animate__animated animate__fadeIn';

    const title = document.createElement('h2');
    title.className = 'section-title';
    title.textContent = section.title;
    container.appendChild(title);

    if (section.description) {
        const description = document.createElement('p');
        description.className = 'text-gray-300 mb-6';
        description.textContent = section.description;
        container.appendChild(description);
    }

    if (section.subsections) {
        section.subsections.forEach(subsection => {
            const subsectionElement = document.createElement('div');
            subsectionElement.className = 'subsection mb-6';

            const subtitle = document.createElement('h3');
            subtitle.className = 'subsection-title';
            subtitle.textContent = subsection.title;
            subsectionElement.appendChild(subtitle);

            if (subsection.items) {
                const list = document.createElement('ul');
                list.className = 'section-content list-disc pl-6 space-y-2';
                subsection.items.forEach(item => {
                    const li = document.createElement('li');
                    li.textContent = item;
                    list.appendChild(li);
                });
                subsectionElement.appendChild(list);
            }

            if (subsection.metrics) {
                import('./metricsRenderer.js').then(({ renderMetrics }) => {
                    subsectionElement.appendChild(renderMetrics(subsection.metrics));
                });
            }

            if (subsection.subsections) {
                subsection.subsections.forEach(nestedSubsection => {
                    const nestedTitle = document.createElement('h4');
                    nestedTitle.className = 'text-amber-300 font-semibold mt-4 mb-2';
                    nestedTitle.textContent = nestedSubsection.title;
                    subsectionElement.appendChild(nestedTitle);

                    if (nestedSubsection.metrics) {
                        import('./metricsRenderer.js').then(({ renderMetrics }) => {
                            subsectionElement.appendChild(renderMetrics(nestedSubsection.metrics));
                        });
                    }

                    if (nestedSubsection.items) {
                        const nestedList = document.createElement('ul');
                        nestedList.className = 'section-content list-disc pl-6 space-y-2';
                        nestedSubsection.items.forEach(item => {
                            const li = document.createElement('li');
                            li.textContent = item;
                            nestedList.appendChild(li);
                        });
                        subsectionElement.appendChild(nestedList);
                    }
                });
            }

            container.appendChild(subsectionElement);
        });
    }

    return container;
}