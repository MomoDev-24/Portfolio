<script setup >

import {ref} from "vue";
import AppLogo from "@/Components/AppLogo.vue";
import NavLink from "@/Components/NavLink.vue";
import {Link} from "@inertiajs/vue3"
import MenuSvg from "@/Components/MenuSvg.vue";

const showMenu = ref(false);

</script>

<template>
    <div class="min-h-screen bg-black flex flex-col">
        <nav >
            <div
                class="flex  flex-col items-center  pt-6 sm:justify-center sm:pt-0">
                <div class=" w-full    px-4 sm:px-2 lg:px8">
                    <div class="flex  sm:h-16    flex-row items-center justify-between "

                    >
                        <Link href="/">
                            <AppLogo ></AppLogo>
                        </Link>
                        <transition
                            enter-active-class="transition ease-in-out"
                            enter-from-class="bg-blue-500"
                            leave-active-class="transition ease-in-out"
                            leave-to-class="bg-amber-500"
                            duration="1000">
                            <div class="flex items-end  flex-row text-white " :class="{
                            'flex-col' : showMenu
                        }" >

                                <MenuSvg
                                    class=" sm:hidden"
                                    @click="showMenu = !showMenu ; console.log(showMenu)" :show="showMenu" />
                                <div
                                    class=" space-x-8 sm:-my-px sm:ms-10 sm:flex"
                                    :class="{
                                'hidden': !showMenu
                                }"

                                >
                                    <NavLink
                                        :href="'/'"
                                        :active="route().current('home')">

                                        Acceuil
                                    </NavLink>
                                </div>
                                <div
                                    class="  space-x-8 sm:-my-px sm:ms-10 sm:flex"
                                    :class="{
                                'hidden': !showMenu
                                }"
                                >
                                    <NavLink
                                        :href="'about'"
                                        :active="route().current('about')"
                                    >
                                        A propos
                                    </NavLink>
                                </div>
                                <div
                                    class=" space-x-8 sm:-my-px sm:ms-10 sm:flex"
                                    :class="{
                                'hidden': !showMenu
                                }"
                                >
                                    <NavLink
                                        :href="'skills'"
                                        :active="route().current('skills')"
                                    >
                                        Compétences
                                    </NavLink>
                                </div>
                                <div
                                    class=" space-x-8 sm:-my-px sm:ms-10 sm:flex"
                                    :class="{
                                'hidden': !showMenu
                                }"
                                >
                                    <NavLink
                                        :href="'projects'"
                                        :active="route().current('projects')"
                                    >
                                        Réalisations
                                    </NavLink>
                                </div>

                            </div>
                        </transition>

                    </div>
                </div>
            </div>
        </nav>
<!--        Partie principale-->
        <main class="flex-1  flex flex-col  ">
             <slot/>
        </main>
    </div>


</template>

<style scoped>
    html{
        scroll-behavior: smooth;
    }
</style>
