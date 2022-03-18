<template>
    <Particles :options="particlesOptions" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    setup() {
        const particlesOptions = {
            fpsLimit: 20,
            interactivity: {
                detectsOn: 'window',
                events: {
                    resize: true
                }
            },
            particles: {
                color: '#FFFFFF',
                move: {
                    enable: true,
                    direction: "bottom",
                    speed: 3,
                },
                number: {
                    density: {
                        enable: true,
                        value_area: 1000
                    },
                    value: 50
                },
                opacity: {
                    value: 0.6
                },
                shape: {
                    type: 'circle'
                }
            },
            detectRetina: true
        }
        return {
            particlesOptions
        }
    }
})
</script>