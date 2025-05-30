<template>
    <div class=" h-screen  overflow-hidden">
        <!-- Fond animé -->
        <div class="background-animation " ref="bgAnim">
<!--            <nav >-->
<!--                <div-->
<!--                    class="flex  flex-col items-center  pt-6 sm:justify-center sm:pt-0">-->
<!--                    <div class=" w-full    px-4 sm:px-2 lg:px8">-->
<!--                        <div class="flex  sm:h-16    flex-row items-center justify-between "-->

<!--                        >-->
<!--                            <Link href="/">-->
<!--                                <AppLogo ></AppLogo>-->
<!--                            </Link>-->
<!--                            <transition-->
<!--                                enter-active-class="transition ease-in-out"-->
<!--                                enter-from-class="bg-blue-500"-->
<!--                                leave-active-class="transition ease-in-out"-->
<!--                                leave-to-class="bg-amber-500"-->
<!--                                duration="1000">-->
<!--                                <div class="flex items-end  flex-row text-white " :class="{-->
<!--                            'flex-col' : showMenu-->
<!--                        }" >-->

<!--                                    <MenuSvg-->
<!--                                        class=" sm:hidden"-->
<!--                                        @click="showMenu = !showMenu ; console.log(showMenu)" :show="showMenu" />-->
<!--                                    <div-->
<!--                                        class=" space-x-8 sm:-my-px sm:ms-10 sm:flex"-->
<!--                                        :class="{-->
<!--                                'hidden': !showMenu-->
<!--                                }"-->

<!--                                    >-->
<!--                                        <NavLink-->
<!--                                            :href="'/'"-->
<!--                                            :active="route().current('home')">-->

<!--                                            Acceuil-->
<!--                                        </NavLink>-->
<!--                                    </div>-->
<!--                                    <div-->
<!--                                        class="  space-x-8 sm:-my-px sm:ms-10 sm:flex"-->
<!--                                        :class="{-->
<!--                                'hidden': !showMenu-->
<!--                                }"-->
<!--                                    >-->
<!--                                        <NavLink-->
<!--                                            :href="'about'"-->
<!--                                            :active="route().current('about')"-->
<!--                                        >-->
<!--                                            A propos-->
<!--                                        </NavLink>-->
<!--                                    </div>-->
<!--                                    <div-->
<!--                                        class=" space-x-8 sm:-my-px sm:ms-10 sm:flex"-->
<!--                                        :class="{-->
<!--                                'hidden': !showMenu-->
<!--                                }"-->
<!--                                    >-->
<!--                                        <NavLink-->
<!--                                            :href="'skills'"-->
<!--                                            :active="route().current('skills')"-->
<!--                                        >-->
<!--                                            Compétences-->
<!--                                        </NavLink>-->
<!--                                    </div>-->
<!--                                    <div-->
<!--                                        class=" space-x-8 sm:-my-px sm:ms-10 sm:flex"-->
<!--                                        :class="{-->
<!--                                'hidden': !showMenu-->
<!--                                }"-->
<!--                                    >-->
<!--                                        <NavLink-->
<!--                                            :href="'projects'"-->
<!--                                            :active="route().current('projects')"-->
<!--                                        >-->
<!--                                            Réalisations-->
<!--                                        </NavLink>-->
<!--                                    </div>-->

<!--                                </div>-->
<!--                            </transition>-->

<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </nav>-->
<slot/>
        </div>


    </div>
  </template>

  <script setup>
  import { onMounted, ref } from 'vue';
  import gsap from 'gsap';
  import {Link} from "@inertiajs/vue3";
  import AppLogo from "../Components/AppLogo.vue";
  import MenuSvg from "../Components/MenuSvg.vue";
  import NavLink from "../Components/NavLink.vue";


  const showMenu = ref(false);

  const bgAnim = ref(null);
  onMounted(() => {

      for (let i = 0; i < 30; i++) {
          const circle = createCircle();
          floatCircle(circle);
          }



  })

  function animateBackground() {
      const bg = bgAnim.value;

      // Animation de scale pulsante
      gsap.to(bg, {
          scale: 1.1,
          duration: 8,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut'
      });

      // Animation de position pour créer un effet de dérive
      gsap.to(bg, {
          x: 50,
          y: 30,
          duration: 15,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut'
      });


  }
  function createCircle() {

      const circle = document.createElement('div');
      circle.className = "circle";
      bgAnim.value.appendChild(circle);
      const size = Math.random() * 20 + 10;
      gsap.set(circle, {
          width: size,
          height: size,
          backgroundColor: 'white',
          borderRadius: '50%',
          opacity: 0.1 + Math.random() * 0.3,
          x: Math.random() * window.innerHeight,
          y: Math.random() * window.innerWidth,
      });

      return circle;
  }

  function floatCircle(el) {
      // Animation plus complexe pour disperser les cercles
      const tl = gsap.timeline({ repeat: -1 });

      // Mouvement aléatoire dans toutes les directions
      tl.to(el, {
          x: `+=${Math.random() * 400 - 200}`,
          y: `+=${Math.random() * 300 - 150}`,
          duration: 8 + Math.random() * 6,
          ease: 'sine.inOut'
      })
          .to(el, {
              x: `+=${Math.random() * 400 - 200}`,
              y: `+=${Math.random() * 300 - 150}`,
              duration: 8 + Math.random() * 6,
              ease: 'sine.inOut'
          })
          .to(el, {
              x: `+=${Math.random() * 400 - 200}`,
              y: `+=${Math.random() * 300 - 150}`,
              duration: 8 + Math.random() * 6,
              ease: 'sine.inOut'
          });

      // Animation d'opacité séparée
      gsap.to(el, {
          opacity: 0.05 + Math.random() * 0.3,
          duration: 3 + Math.random() * 4,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut'
      });



      // Rotation légère
      gsap.to(el, {
          rotation: 360,
          duration: 20 + Math.random() * 20,
          repeat: -1,
          ease: 'none'
      });
  }

  // function floatCircle(el) {
  //     gsap.to(el, {
  //         y: -100 - Math.random() * 200,
  //         x: `+=${Math.random() * 100 - 50}`,
  //         duration: 10 + Math.random() * 10,
  //         ease: 'sine.inOut',
  //         repeat: -1,
  //         yoyo: true
  //     })}
  </script>

  <style scoped>

  .circle {
      position: absolute;
  }
  .background-animation {
      position: fixed;
      width: 100%;
      height: 100%;
      overflow: hidden;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  }
/*
  .background-animation::before,
  .background-animation::after {
      content: '';
      position: absolute;
      width: 200%;
      height: 200%;
      background-image: radial-gradient(circle, rgba(255,255,255,0.15) 2px, transparent 1px);
      background-size: 35px 35px;
      animation: float 30s linear infinite;
  }

  .background-animation::after {
      animation-direction: reverse;
      opacity: 0.5;
  }

  @keyframes float {
      0% {
          transform: translate(0, 0);
      }
      100% {
          transform: translate(-25%, -25%);
      }
  }
*/
  </style>
