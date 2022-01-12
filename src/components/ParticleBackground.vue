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
                    onHover: {
                        enable: true,
                        mode: 'grab'
                    },
                    resize: true
                }
            },
            particles: {
                color: '#F69896',
                links: {
                    color: '#F69896',
                    distance: 150,
                    enable: true,
                    opacity: 0.5
                },
                move: {
                    enable: true,
                    speed: 4,
                },
                number: {
                    density: {
                        enable: true,
                        value_area: 1000
                    },
                    value: 80
                },
                opacity: {
                    value: 0.5
                },
                shape: {
                    type: 'circle'
                },
                size: 2
            },
            detectRetina: true
        }
        return {
            particlesOptions
        }
    }
})
</script>