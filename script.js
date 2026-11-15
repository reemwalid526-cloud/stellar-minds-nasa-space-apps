document.addEventListener('DOMContentLoaded', () =>{
    const artifactsData ={
        "viking":{
            name:"Viking 1 Lander",
            type:"Mars Lander",
            category:"MARS COLLECTION",
            image: "Viking_small.jpg",
            storyVideo:"videos/viking-story.mp4",

            video:[
                {url:"https://www.nasa.gov/resource/viking-mission-to-mars-animation-and-footage/"},
                {url:"https://images.nasa.gov/details/ksc_080805_mro_smrekar9"},
                {url:"https://www.jpl.nasa.gov/videos/viking-1-first-spacecraft-on-mars/"},
                {url:"https://www.youtube.com/watch?v=50-QVbaIdbM"},
                {url:"https://science.nasa.gov/resource/viking-mars-trailblazer/"},
                {ur:"https://www.jpl.nasa.gov/videos/viking-legacy-and-mars-exploration-7-min/"}
            ],

            model3d:"models/Viking Lander.glb",

            infoHtml:`
            <h3>VIKING 1</h3>
            <p><strong>Frist:Mission Information</strong><br>
            Mission Type: Orbiter and Lander.<br>
            Mission Objective: To study Mars from orbit and its surface, atmosphere, climate, and search for signs of life.<br>
            Destination: Mars – Chryse Planitia.<br>
            Country: United States of America.<br>
            Mission Partners: NASA, Jet Propulsion Laboratory (JPL), and Langley Research Center.<br>
            Mission Cost: The individual cost of Viking 1 is not separately specified; it was part of the Viking program.<br>
            Mission Outcome: Successful. It became the first NASA spacecraft to successfully land and operate on Mars.</p>

            <p><strong>Second: Dates and Duration</strong><br>
            Launch Date: August 20, 1975.<br>
            Launch Site: Cape Canaveral, Florida, USA.<br>
            Launch Vehicle: Titan IIIE-Centaur.<br>
            Arrival Date: June 19, 1976.<br>
            Landing Date: July 20, 1976.<br>
            Mission End Date: November 11, 1982 (Lander).<br>
            Planned Mission Duration: 90 days after landing.<br>
            Actual Mission Duration: More than 6 years on the Martian surface.<br>
            Final Status: Mission completed; communication ended after a faulty command.</p>

            <p><strong>Third: Achievements</strong><br>
            Scientific Instruments: Cameras, Gas Chromatograph Mass Spectrometer, Seismometer, X-ray Fluorescence Spectrometer, Biological Laboratory, and Weather Instrument Package.<br>
            Major Achievements: Successfully landed on Mars, collected and analyzed Martian soil samples, and returned thousands of images.<br>
            Landing Site: Chryse Planitia, Mars.<br>
            Records & Firsts: First successful NASA landing on Mars and first NASA mission to conduct biological experiments on Martian soil.</p>

            <p><strong>Fourth: Engineering Specifications</strong><br>
            Mass: Orbiter: approximately 2,339 kg; Lander: approximately 600 kg at landing.<br>
            Dimensions: Orbiter: approximately 9.7 m in diameter with solar panels extended; Lander: approximately 3.02 m wide and 2.13 m high.<br>
            Power Source: Orbiter used solar panels and batteries; Lander used two Radioisotope Thermoelectric Generators (RTGs).<br>
            Communication System: S-band radio communication with high-gain and low-gain antennas.<br>
            Propulsion System: Orbiter used a liquid-fuel bipropellant engine; Lander used a hydrazine monopropellant system.</p>

            <p><strong>Fifth: Operational Information</strong><br>
            Operational Lifetime: The lander operated for more than 6 years, from July 20, 1976, until November 11, 1982. The orbiter operated until August 7, 1980.</p>
        `

    },

        "apollo11":{ 
            name:"Apollo 11 Lunar Module",
            type:"Crewed Lunar Lander",
            category:"THE MOON COLLECTION",
            image:"apollo_small.jpg",
            storyVideo:"videos/apollo 11.mp4",

            videos:[
                {url:"https://www.nasa.gov/specials/apollo50th/videos-download.html"},
                {url:"https://www.nasa.gov/specials/apollo50th/videos.html"},
                {url:"https://www.nasa.gov/wp-content/uploads/static/history/alsj/a11/video11.html"},
                {url:"https://www.nasa.gov/mission/apollo-11/"},
                {url:"https://www.nasa.gov/missions/apollo/apollo-11/nasa-releases-restored-apollo-11-moonwalk-video/"}
            ],
            model3d: "models/Apollo 11.obj",
      infoHtml: `
        <h3>APOLLO 11 LUNAR MODULE – DESCENT STAGE</h3>
        <p><strong>First: Mission Information</strong><br>
        Mission Type: A crewed lunar landing system.<br>
        Purpose: To carry astronauts to the Moon's surface and provide the landing stage of the Lunar Module.<br>
        Destination: The lunar surface, in the Sea of Tranquility.<br>
        Country: United States.<br>
        Organizations: NASA and companies working with NASA.<br>
        Cost: There is no separate announced cost for the descent stage alone.<br>
        Result: The mission successfully landed on the Moon. The descent stage remained on the lunar surface after the ascent stage took off.</p>

        <p><strong>Second: Dates and Duration</strong><br>
        Launch Date: July 16, 1969.<br>
        Launch Location: Kennedy Space Center, Florida.<br>
        Launch Vehicle: Saturn V.<br>
        Lunar Arrival and Landing Date: July 20, 1969.<br>
        Mission End Date: July 24, 1969.<br>
        Total Mission Duration: About 8 days.<br>
        Final Status: The mission ended successfully, and the descent stage remained on the Moon.</p>

        <p><strong>Third: Achievements</strong><br>
        Helped achieve the first successful human landing on the Moon.<br>
        Provided a landing platform and storage space for equipment.<br>
        Carried the ladder that astronauts used to climb down to the lunar surface.<br>
        Was left on the Moon after the ascent stage separated from it.</p>

        <p><strong>Fourth: Engineering Specifications</strong><br>
        Dry Mass: About 2,033 kg.<br>
        Shape: An eight-sided structure.<br>
        Height: About 3.23 meters.<br>
        Diameter: About 4.22 meters.<br>
        Power System: Silver-zinc batteries.<br>
        Propulsion System: A liquid-fuel rocket engine used for landing.<br>
        Communication: Used the communication systems of the Lunar Module.</p>

        <p><strong>Fifth: Operational Information</strong><br>
        Operating Duration: Worked during the lunar landing stage of the Apollo 11 mission.<br>
        After the mission ended, it remained on the lunar surface and did not return to Earth.</p>
      `
    }
  };










  const arrowButtons = document.querySelectorAll('.circle-arrow-btn');
  const detailedPlaque = document.getElementById('detailedPlaque');
  const closePlaqueBtn = document.getElementById('closePlaque');

  if (arrowButtons && detailedPlaque) {
    arrowButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = btn.getAttribute('data-target');
        const artifact = artifactsData[targetId];

        if (artifact) {
          document.getElementById('plaqueImg').src = artifact.image;
          document.getElementById('plaqueName').textContent = artifact.name;
          document.getElementById('plaqueType').textContent = artifact.type;

          document.getElementById('btnStory').href = `artifact.html?id=${targetId}&tab=story`;
          document.getElementById('btnVideos').href = `artifact.html?id=${targetId}&tab=videos`;
          document.getElementById('btn3D').href = `artifact.html?id=${targetId}&tab=model3d`;
          document.getElementById('btnInfo').href = `artifact.html?id=${targetId}&tab=info`;
        }

        detailedPlaque.removeAttribute('hidden');
        detailedPlaque.style.display = 'block';
      });
    });
  }

  if (closePlaqueBtn && detailedPlaque) {
    closePlaqueBtn.addEventListener('click', () => {
      detailedPlaque.setAttribute('hidden', 'true');
      detailedPlaque.style.display = 'none';
    });
  }

  // إدارة صفحة تفاصيل الآلة (artifact.html)
  const urlParams = new URLSearchParams(window.location.search);
  const artifactId = urlParams.get('id');
  const activeTab = urlParams.get('tab') || 'story';

  if (artifactId && artifactsData[artifactId]) {
    const data = artifactsData[artifactId];

    document.getElementById('artifactTitle').textContent = data.name;
    document.getElementById('artifactCategory').textContent = data.category;

    // 1. فيديو القصة
    const storyVideoPlayer = document.getElementById('storyVideoPlayer');
    if (storyVideoPlayer && data.storyVideo) {
      let sourceEl = storyVideoPlayer.querySelector('source');
      if (!sourceEl) {
        sourceEl = document.createElement('source');
        sourceEl.type = 'video/mp4';
        storyVideoPlayer.appendChild(sourceEl);
      }
      sourceEl.src = data.storyVideo;
      storyVideoPlayer.load();
    }

    // 2. فيديوهات الأرشيف
    const videosContainer = document.getElementById('videosContainer');
    if (videosContainer && data.videos) {
      videosContainer.innerHTML = '';
      data.videos.forEach(vid => {
        const card = document.createElement('div');
        card.className = 'video-card-item';
        card.innerHTML = `
          <h3>${vid.title}</h3>
          <a href="${vid.url}" target="_blank" class="watch-link">Watch Official Video &rarr;</a>
        `;
        videosContainer.appendChild(card);
      });
    }

    // 3. المجسم 3D
    const modelViewer = document.getElementById('model3dFrame');
    if (modelViewer && data.model3d) {
      modelViewer.setAttribute('src', data.model3d);
    }

    // 4. نصوص المعلومات التفصيلية (Information)
    const infoContainer = document.getElementById('infoTextContainer');
    if (infoContainer && data.infoHtml) {
      infoContainer.innerHTML = data.infoHtml;
    }
  }

  // التبديل بين التبويبات (Tabs)
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  if (tabButtons.length > 0) {
    tabButtons.forEach(btn => {
      const tabName = btn.getAttribute('data-tab');
      if (tabName === activeTab) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    tabPanels.forEach(panel => {
      if (panel.id === `panel-${activeTab}`) {
        panel.removeAttribute('hidden');
        panel.style.display = 'block';
      } else {
        panel.setAttribute('hidden', 'true');
        panel.style.display = 'none';
      }
    });

    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetTab = btn.getAttribute('data-tab');

        tabButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        tabPanels.forEach(panel => {
          if (panel.id === `panel-${targetTab}`) {
            panel.removeAttribute('hidden');
            panel.style.display = 'block';
          } else {
            panel.setAttribute('hidden', 'true');
            panel.style.display = 'none';
          }
        });
      });
    });
  }

  // زر العودة للمتحف
  const backBtn = document.getElementById('backToHallBtn');
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      window.history.back();
    });
  }

});