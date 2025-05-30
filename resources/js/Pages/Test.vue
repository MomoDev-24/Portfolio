<script setup>

import gsap from "gsap"
import {onMounted, ref, useTemplateRef} from "vue";


// const dim = useTemplateRef('slider').value;

const inPause = ref(true);

function setPauseState() {
    inPause.value = !inPause.value;
    console.log("Pause:", inPause.value)
}

onMounted (()=>{
    // const dim = document.getElementById("#slider")
    //
    // console.log("slider", dim)
    // console.log(`longueur: ${dim.height}|| largeur: ${dim.width}`);
    // console.log(`longueur: ${dim.offsetWidth}}`);



    const end = 1200;

    const end2 = 1000;



    let tl = gsap.timeline({
        delay: 0.5,
        paused : false,
        yoyo: true,
        repeat: 10
        }
    );
    tl
        .to(".box1",{duration: 2, x: end})
        .to(".box2", {duration: 1, x: end })
        .to(".box3", {duration: 1, x: end })

    let tl2 = gsap.timeline({
            delay: 0.5,
            paused : false,
            yoyo: true,
            repeat: 10
        }
    );
    tl2
        .to("#slider",{duration: 2, x: end2/2})
        .to("#slider", {duration: 1, x: 3*end2/4 })
        .to("#slider", {duration: 1, x: end2 })



})

</script>

<template>
    <div class="flex flex-col items-start h-screen  justify-between  bg-black m">
        <div class=" w-full">
            <div class="box box1 bg-pink-600 w-28 h-28 item1 m-10 rounded-lg "  />
            <div class="box box2 bg-red-700 w-28 h-28 item1 m-10 rounded-lg "  />
            <div class="box box3 bg-blue-400 w-28 h-28 item1 m-10 rounded-lg "  />
        </div>
        <div class="flex flex-row w-screen    items-center justify-center mb-10 ">

            <div id="sliderCont" class="  mx-10 flex-1  relative   ">

                <div id="slider" class="left-0 absolute h-full w-1 bg-amber-800    rounded-lg"> </div>

                <div>
                    <div class="flex flex-row">
                        <div class=" border-l-4 border-white w-1/4 h-6"/>
                        <div class=" border-l-4 border-white w-1/4 h-6"/>
                        <div class=" border-l-4 border-white w-1/4 h-6"/>
                        <div class=" border-l-4 border-r-4 border-white w-1/4 h-6"/>
                    </div>

                    <div class="bg-emerald-950 h-8 mb-2 flex flex-col relative justify-center">
                        <div class="absolute bg-pink-600 flex-1 w-2/4 my-3  h-3 mx-1 left-0 rounded-lg"></div>
                    </div>
                    <div class="bg-emerald-950 h-8 mb-2 flex flex-col relative justify-center">
                        <div class="absolute bg-red-700 flex-1 w-1/4 my-3  h-3 mx-1 left-2/4 rounded-lg"></div>
                    </div>
                    <div class="bg-emerald-950 h-8 mb-2 flex flex-col relative justify-center">
                        <div class="absolute bg-blue-400 flex-1 w-1/4 my-3  h-3 mx-1 left-3/4 rounded-lg"></div>
                    </div>
                </div>

            </div>
            <button class="bg-blue-400 m-10 rounded-lg py-5 px-10" @click="setPauseState">Play</button>

        </div>

    </div>

</template>

<style scoped>
.box{
    width: 3rem;
    height: 3rem;
    margin: 5px;
}
#item{

    animation: scale-x2-animation 5s forwards;
}

@keyframes scale-x2-animation {
    0%{
        transform: scale(1);
    }

    50%{
        transform: scale(2);
    }
    from{
        rotate: 0deg;
    }
    to{
        rotate: 90deg;
    }
}

</style>
