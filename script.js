document.addEventListener('DOMContentLoaded', () => {

  /* ---------- artifact data ---------- */
  // add(id, name, type, category, videos[{title,url}], infoHtml)
  // Images:  <id>-small.jpg   Story video: videos/<id>.mp4   3D model: models/<id>.glb
  const artifactsData = {};
  function add(id, name, type, category, videos = [], infoHtml = '') {
    artifactsData[id] = {
      name, type, category, videos,
      image: `${id}-small.jpg`,
      storyVideo: `videos/${id}.mp4`,
      model3d: `models/${id}.glb`,
      infoHtml: infoHtml || `<h3>${name.toUpperCase()}</h3><p>Detailed information is coming soon.</p>`
    };
  }

  const MARS = 'MARS COLLECTION', MOON = 'THE MOON COLLECTION', SPACE = 'OUTER SPACE COLLECTION';

  add('viking', 'Viking 1 Lander', 'Mars Lander', MARS, [
    { title: 'Viking mission to Mars', url: 'https://www.nasa.gov/resource/viking-mission-to-mars-animation-and-footage/' },
    { title: 'Viking 1: first spacecraft on Mars', url: 'https://www.jpl.nasa.gov/videos/viking-1-first-spacecraft-on-mars/' },
    { title: 'Viking trailblazer', url: 'https://science.nasa.gov/resource/viking-mars-trailblazer/' },
    { title: 'Viking legacy and Mars exploration', url: 'https://www.jpl.nasa.gov/videos/viking-legacy-and-mars-exploration-7-min/' },
    { title: 'Viking on YouTube', url: 'https://www.youtube.com/watch?v=50-QVbaIdbM' }
  ], /* PASTE your original Viking infoHtml (the `...` block) here, or leave empty */ '');

  add('pathfinder', 'Mars Pathfinder Lander', 'Mars Lander', MARS);
  add('sojourner', 'Sojourner', 'Mars Rover', MARS);
  add('spirit', 'Spirit', 'Mars Rover', MARS);
  add('opportunity', 'Opportunity', 'Mars Rover', MARS);
  add('insight', 'InSight', 'Mars Lander', MARS);
  add('ingenuity', 'Ingenuity', 'Mars Helicopter', MARS);

  add('apollo11', 'Apollo 11 Lunar Module', 'Crewed Lunar Lander', MOON, [
    { title: 'Apollo 11 videos', url: 'https://www.nasa.gov/specials/apollo50th/videos.html' },
    { title: 'Apollo 11 video archive', url: 'https://www.nasa.gov/wp-content/uploads/static/history/alsj/a11/video11.html' },
    { title: 'Apollo 11 mission page', url: 'https://www.nasa.gov/mission/apollo-11/' },
    { title: 'Restored moonwalk video', url: 'https://www.nasa.gov/missions/apollo/apollo-11/nasa-releases-restored-apollo-11-moonwalk-video/' }
  ], /* PASTE your original Apollo 11 infoHtml here, or leave empty */ '');
  add('lrv', 'Lunar Roving Vehicle (Apollo 15)', 'Lunar Rover', MOON);
  add('surveyor3', 'Surveyor 3', 'Lunar Lander', MOON);
  add('apollo12pse', 'Apollo 12 Passive Seismic Experiment (PSE)', 'Experiment', MOON);
  add('lunarprospector', 'Lunar Prospector', 'Orbiter', MOON);
  add('lcross', 'LCROSS Shepherding Spacecraft', 'Spacecraft', MOON);

  add('pioneer10', 'Pioneer 10', 'Space Probe', SPACE);
  add('voyager1', 'Voyager 1', 'Interstellar Spacecraft', SPACE, [
    { title: 'Voyager 1 launches', url: 'https://www.jpl.nasa.gov/videos/voyager-1-launches/' },
    { title: 'Voyager reaches interstellar space', url: 'https://www.jpl.nasa.gov/videos/voyager-reaches-interstellar-space/' },
    { title: 'Voyager animation', url: 'https://svs.gsfc.nasa.gov/15120/' },
    { title: 'Voyager on YouTube', url: 'https://www.youtube.com/watch?v=8Ddt8xnnGGA' }
  ], /* PASTE your original Voyager 1 infoHtml here, or leave empty */ '');
  add('voyager2', 'Voyager 2', 'Space Probe', SPACE);
  add('kepler', 'Kepler Space Telescope', 'Space Observatory', SPACE);
  add('spitzer', 'Spitzer Space Telescope', 'Space Observatory', SPACE);
  add('dawn', 'Dawn', 'Spacecraft', SPACE);

  /* ---------- museum halls: popup ---------- */
  const detailedPlaque = document.getElementById('detailedPlaque');
  const closePlaqueBtn = document.getElementById('closePlaque');

  document.querySelectorAll('.circle-arrow-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      if (!detailedPlaque) return;
      const id = btn.dataset.target;
      const a = artifactsData[id];
      if (a) {
        const img = document.getElementById('plaqueImg');
        img.style.display = '';
        img.src = a.image;
        document.getElementById('plaqueName').textContent = a.name;
        document.getElementById('plaqueType').textContent = a.type;
        document.getElementById('btnStory').href = `artifact.html?id=${id}&tab=story`;
        document.getElementById('btnVideos').href = `artifact.html?id=${id}&tab=videos`;
        document.getElementById('btn3D').href = `artifact.html?id=${id}&tab=model3d`;
        document.getElementById('btnInfo').href = `artifact.html?id=${id}&tab=info`;
      }
      detailedPlaque.hidden = false;
    });
  });
  if (closePlaqueBtn) closePlaqueBtn.addEventListener('click', () => { detailedPlaque.hidden = true; });
  if (detailedPlaque) detailedPlaque.addEventListener('click', e => { if (e.target === detailedPlaque) detailedPlaque.hidden = true; });

  /* ---------- home: search ---------- */
  const searchForm = document.getElementById('searchForm');
  if (searchForm) {
    searchForm.addEventListener('submit', e => {
      e.preventDefault();
      const q = document.getElementById('searchInput').value.trim().toLowerCase();
      if (!q) return;
      const hit = Object.entries(artifactsData).find(([, a]) => a.name.toLowerCase().includes(q));
      if (hit) window.location.href = `artifact.html?id=${hit[0]}&tab=story`;
      else alert('No artifact found. Try "Voyager", "Apollo" or "Viking".');
    });
  }

  /* ---------- artifact page ---------- */
  const params = new URLSearchParams(window.location.search);
  const artifactId = params.get('id');
  const tabAlias = { story: 'story', videos: 'videos', model3d: 'model3d', info: 'info' };
  const activeTab = tabAlias[params.get('tab')] || 'story';
  const data = artifactsData[artifactId];

  if (document.getElementById('artifactTitle')) {
    if (data) {
      document.getElementById('artifactTitle').textContent = data.name;
      document.getElementById('artifactCategory').textContent = data.category;
      document.title = `Stellar Remains Museum - ${data.name}`;

      const storyImg = document.getElementById('storyImg');
      if (storyImg) storyImg.src = data.image;

      const player = document.getElementById('storyVideoPlayer');
      if (player) { player.querySelector('source').src = data.storyVideo; player.load(); }

      const vc = document.getElementById('videosContainer');
      if (vc) {
        vc.innerHTML = data.videos.length
          ? data.videos.map(v => `<div class="video-card-item"><h3>${v.title}</h3><a href="${v.url}" target="_blank" rel="noopener" class="watch-link">Watch video &rarr;</a></div>`).join('')
          : '<p>No videos have been added for this artifact yet.</p>';
      }

      const mv = document.getElementById('model3dFrame');
      if (mv) mv.setAttribute('src', data.model3d);

      const info = document.getElementById('infoTextContainer');
      if (info) info.innerHTML = data.infoHtml;
    }

    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');
    function showTab(name) {
      tabButtons.forEach(b => b.classList.toggle('active', b.dataset.tab === name));
      tabPanels.forEach(p => { p.hidden = p.id !== `panel-${name}`; });
    }
    tabButtons.forEach(b => b.addEventListener('click', () => showTab(b.dataset.tab)));
    showTab(activeTab);

    const backBtn = document.getElementById('backToHallBtn');
    if (backBtn) backBtn.addEventListener('click', () => window.history.back());
  }

  /* ---------- full-screen video page ---------- */
  const fsPlayer = document.getElementById('artifactVideoPlayer');
  if (fsPlayer) {
    if (data) {
      fsPlayer.querySelector('source').src = data.storyVideo;
      fsPlayer.load();
    }
    const close = document.getElementById('videoCloseBtn');
    if (close && artifactId) close.href = `artifact.html?id=${artifactId}&tab=story`;
  }
});
