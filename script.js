document.addEventListener('DOMContentLoaded', () =>{
    const artifactsData ={
        "viking":{
            name:"Viking 1 Lander",
            type:"Mars Lander",
            category:"MARS COLLECTION",
            image: "Viking_small.jpg",
            storyVideo:"videos/viking-story.mp4",

            video:[
                {url:"https://www.nasa.gov/resource/viking-mission-to-mars-animation-and-footage/"}
                {url:"https://images.nasa.gov/details/ksc_080805_mro_smrekar9"}
                {url:"https://www.jpl.nasa.gov/videos/viking-1-first-spacecraft-on-mars/"}
                {url:"https://www.youtube.com/watch?v=50-QVbaIdbM"}
                {url:"https://science.nasa.gov/resource/viking-mars-trailblazer/"}
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
            storyVideo:""