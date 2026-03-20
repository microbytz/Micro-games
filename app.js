const genres = {
  Horror: 'High-tension discovery rail for atmospheric co-op, puzzle horror, survival, and narrative thriller experiences.',
  'Town and City': 'Social roleplay hubs, neighborhood simulators, creator storefronts, and civic sandbox worlds.',
  Comedy: 'Physics-first chaos, party mini-games, cartoon timing systems, and replayable challenge loops.',
  Obby: 'Precision platforming, speedrun ghosts, and controller presets tuned for readability and fairness.',
  RPG: 'Quest logs, class systems, persistence hooks, and collaborative worldbuilding spaces.',
  'Sci-Fi': 'Vehicle combat, mech assembly, spatial builders, and modular environment kits.'
};

const threads = [
  {
    title: 'Harbor District bug watch',
    body: 'Players and creators track collision issues, lighting regressions, and patch verification in one dedicated board.'
  },
  {
    title: 'Comedy Jam weekly prompt',
    body: 'A community-led thread for physics challenge ideas, playtest feedback, and featured replay clips.'
  },
  {
    title: 'Tix economy balancing',
    body: 'Developers compare reward loops, abuse prevention, and healthy sinks for non-premium progression.'
  }
];

const navButtons = document.querySelectorAll('.nav__item');
const panels = document.querySelectorAll('.panel');
const genreContainer = document.getElementById('genre-chips');
const genreOutput = document.getElementById('genre-output');
const forumPreview = document.getElementById('forum-preview');
const forumToggle = document.getElementById('forum-toggle');

function renderGenres(selectedGenre) {
  genreContainer.innerHTML = '';
  Object.keys(genres).forEach((genre) => {
    const chip = document.createElement('button');
    chip.className = `chip${genre === selectedGenre ? ' is-selected' : ''}`;
    chip.textContent = genre;
    chip.addEventListener('click', () => renderGenres(genre));
    genreContainer.appendChild(chip);
  });

  genreOutput.innerHTML = `
    <div class="forum-thread">
      <strong>${selectedGenre}</strong>
      <p>${genres[selectedGenre]}</p>
    </div>
  `;
}

function renderThreads(expanded = false) {
  const visibleThreads = expanded ? threads : threads.slice(0, 2);
  forumPreview.innerHTML = visibleThreads
    .map(
      (thread) => `
        <article class="forum-thread">
          <strong>${thread.title}</strong>
          <p>${thread.body}</p>
        </article>
      `
    )
    .join('');

  forumToggle.textContent = expanded ? 'Collapse threads' : 'Expand threads';
  forumToggle.dataset.expanded = String(expanded);
}

navButtons.forEach((button) => {
  button.addEventListener('click', () => {
    navButtons.forEach((item) => item.classList.remove('is-active'));
    panels.forEach((panel) => panel.classList.remove('is-visible'));

    button.classList.add('is-active');
    document.getElementById(button.dataset.target).classList.add('is-visible');
  });
});

forumToggle.addEventListener('click', () => {
  const expanded = forumToggle.dataset.expanded === 'true';
  renderThreads(!expanded);
});

renderGenres('Horror');
renderThreads(false);
