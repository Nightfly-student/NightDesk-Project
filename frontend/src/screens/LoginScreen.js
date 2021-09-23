import React from 'react';
import Particles from 'react-tsparticles';

function LoginScreen(props) {
    return (
        <div className="main">
<Particles
        id="tsparticles"
        options={{
            fps_limit: 60,
            interactivity: {
              detect_on: "canvas",
              events: {
                onclick: { enable: true, mode: "repulse" },
                onhover: {
                  enable: true,
                  mode: "bubble",
                  parallax: { enable: false, force: 2, smooth: 10 }
                },
                resize: true
              },
              modes: {
                bubble: { distance: 400, duration: 0.3, opacity: 1, size: 2, speed: 3 },
                grab: { distance: 400, line_linked: { opacity: 0.5 } },
                push: { particles_nb: 4 },
                remove: { particles_nb: 2 },
                repulse: { distance: 200, duration: 0.4 }
              }
            },
            particles: {
              color: { value: "#fff" },
              line_linked: {
                color: "#ffffff",
                distance: 500,
                enable: false,
                opacity: 0.4,
                width: 2
              },
              move: {
                attract: { enable: false, rotateX: 600, rotateY: 1200 },
                bounce: false,
                direction: "bottom",
                enable: true,
                out_mode: "out",
                random: false,
                size: true,
                speed: 4,
                straight: false
              },
              number: { density: { enable: true, value_area: 800 }, value: 50 },
              opacity: {
                anim: { enable: false, opacity_min: 0.1, speed: 1, sync: false },
                random: true,
                value: 0.5
              },
              shape: {
                character: {
                  fill: false,
                  font: "Verdana",
                  style: "",
                  value: "*",
                  weight: "400"
                },
                image: {
                  height: 20,
                  replace_color: true,
                  src: "images/github.svg",
                  width: 20
                },
                polygon: { nb_sides: 5 },
                stroke: { color: "#000000", width: 0 },
                type: "circle"
              },
              size: {
                anim: { enable: false, size_min: 0.1, speed: 60, sync: false },
                random: true,
                value: 5
              }
            },
            polygon: {
              draw: { enable: false, lineColor: "#ffffff", lineWidth: 0.5 },
              move: { radius: 10 },
              scale: 1,
              type: "none",
              url: ""
            },
            retina_detect: true
        }}
      />
        </div>
    );
}

export default LoginScreen;