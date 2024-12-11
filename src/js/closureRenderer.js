export function renderClosureSection(section) {
    const container = document.createElement('div');
    container.className = 'mb-12 animate__animated animate__fadeIn';

    const title = document.createElement('h2');
    title.className = 'section-title';
    title.textContent = section.title;
    container.appendChild(title);

    if (section.content) {
        const content = document.createElement('p');
        content.className = 'text-gray-300 mb-6';
        content.textContent = section.content;
        container.appendChild(content);
    }

    if (section.achievements) {
        const achievementsContainer = document.createElement('div');
        achievementsContainer.className = 'grid gap-6 mb-6';

        section.achievements.forEach(achievement => {
            const achievementCard = document.createElement('div');
            achievementCard.className = 'subsection';

            const achievementTitle = document.createElement('h3');
            achievementTitle.className = 'subsection-title';
            achievementTitle.textContent = achievement.title;
            achievementCard.appendChild(achievementTitle);

            const achievementContent = document.createElement('p');
            achievementContent.className = 'text-gray-300';
            achievementContent.textContent = achievement.content;
            achievementCard.appendChild(achievementContent);

            achievementsContainer.appendChild(achievementCard);
        });

        container.appendChild(achievementsContainer);
    }

    if (section.summary) {
        const summary = document.createElement('p');
        summary.className = 'text-gray-300 mt-4';
        summary.textContent = section.summary;
        container.appendChild(summary);
    }

    if (section.items) {
        const itemsContainer = document.createElement('div');
        itemsContainer.className = 'space-y-4';

        section.items.forEach(item => {
            const itemCard = document.createElement('div');
            itemCard.className = 'subsection';

            const itemTitle = document.createElement('h3');
            itemTitle.className = 'subsection-title';
            itemTitle.textContent = item.title;
            itemCard.appendChild(itemTitle);

            const itemContent = document.createElement('p');
            itemContent.className = 'text-gray-300';
            itemContent.textContent = item.content;
            itemCard.appendChild(itemContent);

            itemsContainer.appendChild(itemCard);
        });

        container.appendChild(itemsContainer);
    }

    return container;
}