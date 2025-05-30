<template>
    <div class="relative h-screen overflow-hidden bg-black">
        <div ref="bgContainer" class="absolute inset-0 z-0"></div>
        <div class="relative z-10 text-white text-center mt-40">
            <h1 class="text-4xl">Bienvenue sur mon portfolio</h1>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'

const bgContainer = ref(null)

onMounted(() => {
    for (let i = 0; i < 50; i++) {
        const circle = document.createElement('div')
        circle.className = 'circle'
        bgContainer.value.appendChild(circle)

        const size = Math.random() * 20 + 10
        gsap.set(circle, {
            width: size,
            height: size,
            backgroundColor: 'white',
            borderRadius: '50%',
            opacity: 0.1 + Math.random() * 0.3,
            position: 'absolute',
            top: Math.random() * window.innerHeight,
            left: Math.random() * window.innerWidth
        })

        floatCircle(circle)
    }
})

function floatCircle(el) {
    gsap.to(el, {
        y: -100 - Math.random() * 200,
        x: `+=${Math.random() * 100 - 50}`,
        duration: 10 + Math.random() * 10,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true
    })
}
</script>

<style scoped>
.circle {
    position: absolute;
}
</style>
