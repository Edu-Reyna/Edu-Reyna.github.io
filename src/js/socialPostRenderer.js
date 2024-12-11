export function renderSocialPost(post) {
    const postElement = document.createElement('div');
    postElement.className = 'subsection mb-8 hover:transform hover:scale-102 transition-all duration-300';

    const headerDiv = document.createElement('div');
    headerDiv.className = 'flex items-center space-x-4 mb-4';

    const profileImg = document.createElement('img');
    profileImg.src = '/src/images/Balatro_Portada.webp';
    profileImg.className = 'w-12 h-12 rounded-full';
    profileImg.alt = 'Balatro Official';

    const nameDiv = document.createElement('div');
    nameDiv.innerHTML = `
        <div class="font-bold text-red-400">BalatrOficial</div>
        <div class="text-gray-500">@BalatrOficial</div>
    `;

    headerDiv.appendChild(profileImg);
    headerDiv.appendChild(nameDiv);

    const contentDiv = document.createElement('div');
    contentDiv.className = 'space-y-4';

    const titleDiv = document.createElement('div');
    titleDiv.className = 'text-xl text-red-400 font-bold';
    titleDiv.textContent = post.title;

    const descriptionDiv = document.createElement('div');
    descriptionDiv.className = 'text-gray-300';
    descriptionDiv.textContent = post.description;

    const hashtagsDiv = document.createElement('div');
    hashtagsDiv.className = 'text-blue-400 space-x-2';
    hashtagsDiv.innerHTML = post.hashtags.map(tag => `<span>${tag}</span>`).join(' ');

    const imageDiv = document.createElement('div');
    imageDiv.className = 'mt-4 rounded-xl overflow-hidden border border-red-900/20';
    imageDiv.innerHTML = `<img src="${post.imagePath}" alt="${post.character} cards" class="w-full">`;

    const statsDiv = document.createElement('div');
    statsDiv.className = 'flex space-x-8 mt-4 text-gray-400';
    statsDiv.innerHTML = `
        <div>${post.stats.retweets} Retweets</div>
        <div>${post.stats.quotes} Quote Tweets</div>
        <div>${post.stats.likes} Likes</div>
    `;

    contentDiv.appendChild(titleDiv);
    contentDiv.appendChild(descriptionDiv);
    contentDiv.appendChild(hashtagsDiv);
    contentDiv.appendChild(imageDiv);
    contentDiv.appendChild(statsDiv);

    postElement.appendChild(headerDiv);
    postElement.appendChild(contentDiv);

    return postElement;
}