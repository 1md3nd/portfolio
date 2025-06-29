import React, { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

function ParticleBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      className="particles-bg"
      init={particlesInit}
      options={{
        fullScreen: false,
        background: {
          color: "transparent"
        },
        fpsLimit: 60,
        particles: {
          color: {
            value: "#0ff"
          },
          links: {
            color: "#0ff",
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1
          },
          move: {
            enable: true,
            outModes: {
              default: "bounce"
            },
            random: true,
            speed: 1,
            straight: false
          },
          number: {
            density: {
              enable: true,
              area: 800
            },
            value: 80
          },
          opacity: {
            value: 0.5
          },
          shape: {
            type: "circle"
          },
          size: {
            value: { min: 1, max: 3 }
          }
        },
        detectRetina: true,
        smooth: true
      }}
    />
  );
}

export default ParticleBackground;