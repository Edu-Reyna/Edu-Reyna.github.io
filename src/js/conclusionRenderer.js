export function renderConclusion(data) {
    const container = document.createElement('div');
    container.className = 'space-y-12';

    data.sections.forEach(section => {
        const sectionElement = document.createElement('section');
        sectionElement.className = 'mb-12 animate__animated animate__fadeIn';

        const title = document.createElement('h2');
        title.className = 'section-title';
        title.textContent = section.title;
        sectionElement.appendChild(title);

        if (section.content) {
            const content = document.createElement('p');
            content.className = 'text-gray-300 mb-6';
            content.textContent = section.content;
            sectionElement.appendChild(content);
        }

        if (section.achievements) {
            const list = document.createElement('ul');
            list.className = 'section-content list-disc pl-6 space-y-2 mb-6';
            section.achievements.forEach(achievement => {
                const li = document.createElement('li');
                li.textContent = achievement;
                list.appendChild(li);
            });
            sectionElement.appendChild(list);
        }

        if (section.summary) {
            section.summary.forEach(paragraph => {
                const p = document.createElement('p');
                p.className = 'text-gray-300 mb-4';
                p.textContent = paragraph;
                sectionElement.appendChild(p);
            });
        }

        if (section.recommendations) {
            const recommendationsContainer = document.createElement('div');
            recommendationsContainer.className = 'space-y-6';

            section.recommendations.forEach(recommendation => {
                const recElement = document.createElement('div');
                recElement.className = 'subsection';

                const recTitle = document.createElement('h3');
                recTitle.className = 'subsection-title';
                recTitle.textContent = recommendation.title;
                recElement.appendChild(recTitle);

                const recContent = document.createElement('p');
                recContent.className = 'text-gray-300';
                recContent.textContent = recommendation.content;
                recElement.appendChild(recContent);

                recommendationsContainer.appendChild(recElement);
            });

            sectionElement.appendChild(recommendationsContainer);
        }

        if (section.finalNote) {
            const finalNote = document.createElement('p');
            finalNote.className = 'text-gray-300 mt-6 font-medium';
            finalNote.textContent = section.finalNote;
            sectionElement.appendChild(finalNote);
        }

        container.appendChild(sectionElement);
    });

    return container;
}