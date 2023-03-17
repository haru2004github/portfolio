  // let firstImg = document.querySelector('#firstImg');
    let firstImgLink = document.querySelector('#firstImgLink');
    let firstLink = document.querySelector('#firstLink');
    let firstPjName = document.querySelector('#firstPjName');

    // let secondImg = document.querySelector('#secondImg');
    let secondImgLink = document.querySelector('#secondImgLink');
    let secondLink = document.querySelector('#secondLink');
    let secondPjName = document.querySelector('#secondPjName');

    let thirdImgLink = document.querySelector('#thirdImgLink');
    let thirdLink = document.querySelector('#thirdLink');
    let thirdPjName = document.querySelector('#thirdPjName');

    let fourthImgLink = document.querySelector('#fourthImgLink');
    let fourthLink = document.querySelector('#fourthLink');
    let fourthPjName = document.querySelector('#fourthPjName');

    ///btn
    let tailwindBtn = document.querySelector('#tailwindBtn');
    let miniPjBtn = document.querySelector('#miniPjBtn');
    let bootstrapBtn = document.querySelector('#bootstrapBtn');

    miniPjBtn.addEventListener('click',()=>{
        // for first Image
        firstImgLink.innerHTML =`
        <a href="https://profile-image-eight.vercel.app/" >
            <div class="overflow-hidden rounded-2xl border border-slate-300/50">
                <img id="firstImg" class="duration-300 w-full hoverEffectImg" src="../dist/img/profile-image-eight.vercel.app_.png" alt="">
            </div>
        </a>
        `


        firstLink.innerHTML = `
        <a target="_blank" href="https://profile-image-eight.vercel.app/" class="px-5 py-3 rounded-2xl clickEffect dark:hover:shadow-dark-ultra dark:active:shadow-dark-inset dark:shadow-dark-extra shadow-extra  text-lg float-right text-slate-800 dark:text-slate-100/90">
            <i class="fas fa-arrow-right mr-2"></i>
            View Demo
         </a>
        `
        firstPjName.innerHTML = `
        <h3 id="firstPjName" class="text-3xl mt-5">Profile Image </h3>
        `

        // for Second Image

        secondImgLink.innerHTML =`
        <a href="https://animated-border-style-with-tailwind-css.vercel.app/" >
            <div class="overflow-hidden rounded-2xl border border-slate-300/50">
                <img id="secondImg" class="duration-300 w-full hoverEffectImg" src="../dist/img/animated-border-style-with-tailwind-css.vercel.app_.png" alt="">
            </div>
        </a>
        `

        secondLink.innerHTML = `
        <a  target="_blank" href="https://animated-border-style-with-tailwind-css.vercel.app/" class="px-5 py-3 rounded-2xl clickEffect dark:hover:shadow-dark-ultra dark:active:shadow-dark-inset dark:shadow-dark-extra shadow-extra  text-lg float-right text-slate-800 dark:text-slate-100/90">
            <i class="fas fa-arrow-right mr-2"></i>
            View Demo
         </a>
        `
        secondPjName.innerHTML = `
        <h3 id="secondPjName" class="text-3xl mt-5">Animated Border</h3>
        `

         // for Third Image

         thirdImgLink.innerHTML =`
        <a href="https://image-gallery-sandy.vercel.app/" >
            <div class="overflow-hidden rounded-2xl border border-slate-300/50">
                <img id="thirdImg" class="duration-300 w-full hoverEffectImg" src="../dist/img/image-gallery-sandy.vercel.app_.png" alt="">
            </div>
        </a>
        `

        thirdLink.innerHTML = `
        <a  target="_blank" href="https://image-gallery-sandy.vercel.app/" class="px-5 py-3 rounded-2xl clickEffect dark:hover:shadow-dark-ultra dark:active:shadow-dark-inset dark:shadow-dark-extra shadow-extra  text-lg float-right text-slate-800 dark:text-slate-100/90">
            <i class="fas fa-arrow-right mr-2"></i>
            View Demo
         </a>
        `
        thirdPjName.innerHTML = `
        <h3 id="thirdPjName" class="text-3xl mt-5">Image Gallery</h3>
        `

        // for Fourth Image

        fourthImgLink.innerHTML =`
        <a href="https://mini-game-alpha.vercel.app/" >
            <div class="overflow-hidden rounded-2xl border border-slate-300/50">
                <img id="fourthImg" class="duration-300 w-full hoverEffectImg" src="../dist/img/mini-game-alpha.vercel.app_.png" alt="">
            </div>
        </a>
        `

        fourthLink.innerHTML = `
        <a  target="_blank" href="https://mini-game-alpha.vercel.app/" class="px-5 py-3 rounded-2xl clickEffect dark:hover:shadow-dark-ultra dark:active:shadow-dark-inset dark:shadow-dark-extra shadow-extra  text-lg float-right text-slate-800 dark:text-slate-100/90">
            <i class="fas fa-arrow-right mr-2"></i>
            View Demo
         </a>
        `
        fourthPjName.innerHTML = `
        <h3 id="fourthPjName" class="text-3xl mt-5">Mini Game</h3>
        `

    })


    tailwindBtn.addEventListener('click',()=>{
        
        // for first Image
        firstImgLink.innerHTML =`
        <a href="https://framer-site-teal.vercel.app/" >
            <div class="overflow-hidden rounded-2xl border border-slate-300/50">
            <img id="firstImg" class="duration-300 w-full hoverEffectImg" src="../dist/img/framer-site-teal.vercel.app_.png" alt="">
            </div>
        </a>
        `


        firstLink.innerHTML = `
        <a  target="_blank" href="https://framer-site-teal.vercel.app/" class="px-5 py-3 rounded-2xl clickEffect dark:hover:shadow-dark-ultra dark:active:shadow-dark-inset dark:shadow-dark-extra shadow-extra  text-lg float-right text-slate-800 dark:text-slate-100/90">
            <i class="fas fa-arrow-right mr-2"></i>
            View Demo
        </a>
        `
        firstPjName.innerHTML = `
        <h3 id="firstPjName" class="text-3xl mt-5">Framer Sites </h3>
        `

        // for Second Image

        secondImgLink.innerHTML =`
        <a href="https://lunaparadise.netlify.app/">
            <div class="overflow-hidden rounded-2xl border border-slate-300/50">
                <img id="secondImg" class="duration-300 w-full hoverEffectImg" src="../dist/img/lunaparadise.netlify.app_.png" alt="">
            </div>
        </a>
        `

        secondLink.innerHTML = `
        <a target="_blank" href="https://lunaparadise.netlify.app/" class="px-5 py-3 rounded-2xl clickEffect dark:hover:shadow-dark-ultra dark:active:shadow-dark-inset dark:shadow-dark-extra shadow-extra  text-lg float-right text-slate-800 dark:text-slate-100/90">
            <i class="fas fa-arrow-right mr-2"></i>
            View Demo
        </a>
        `
        secondPjName.innerHTML = `
        <h3 id="secondPjName" class="text-3xl mt-5">Portfolio</h3>
        `

         // for Third Image

         thirdImgLink.innerHTML =`
         <a  href="https://ionic-mu.vercel.app/" >
            <div class="overflow-hidden rounded-2xl border border-slate-300/50">
                <img class="duration-300 w-full hoverEffectImg" src="../dist/img/ionic-project-six.vercel.app_ (1).png" alt="">
            </div>
        </a>
        `

        thirdLink.innerHTML = `
        <a target="_blank" href="https://ionic-mu.vercel.app/" class="px-5 py-3 rounded-2xl clickEffect dark:hover:shadow-dark-ultra dark:active:shadow-dark-inset dark:shadow-dark-extra shadow-extra  text-lg float-right text-slate-800 dark:text-slate-100/90">
            <i class="fas fa-arrow-right mr-2"></i>
            View Demo
        </a>
        `
        thirdPjName.innerHTML = `
        <h3 id="thirdPjName" class="text-3xl mt-5">Ionic Project</h3>
        `

        // for Fourth Image

        fourthImgLink.innerHTML =`
        <a href="https://tex-pal-page.vercel.app/">
            <div class="overflow-hidden rounded-2xl border border-slate-300/50">
                <img class="duration-300 w-full hoverEffectImg" src="../dist/img/tex-pal-page.vercel.app_.png" alt="">
            </div>
        </a>
        `

        fourthLink.innerHTML = `
        <a target="_blank" href="https://tex-pal-page.vercel.app/" class="px-5 py-3 rounded-2xl clickEffect dark:hover:shadow-dark-ultra dark:active:shadow-dark-inset dark:shadow-dark-extra shadow-extra  text-lg float-right text-slate-800 dark:text-slate-100/90">
            <i class="fas fa-arrow-right mr-2"></i>
            View Demo
        </a>
        `
        fourthPjName.innerHTML = `
        <h3 id="fourthPjName" class="text-3xl mt-5">Texpal Project</h3>
        `

    })


    bootstrapBtn.addEventListener('click',()=>{
        
        // for first Image
        firstImgLink.innerHTML =`
        <a href="https://admin-daskboard.vercel.app/" >
            <div class="overflow-hidden rounded-2xl border border-slate-300/50">
            <img id="firstImg" class="duration-300 w-full hoverEffectImg" src="../dist/img/admin-daskboard.vercel.app_ (1).png" alt="">
            </div>
        </a>
        `


        firstLink.innerHTML = `
        <a  target="_blank" href="https://admin-daskboard.vercel.app/" class="px-5 py-3 rounded-2xl clickEffect dark:hover:shadow-dark-ultra dark:active:shadow-dark-inset dark:shadow-dark-extra shadow-extra  text-lg float-right text-slate-800 dark:text-slate-100/90">
            <i class="fas fa-arrow-right mr-2"></i>
            View Demo
        </a>
        `
        firstPjName.innerHTML = `
        <h3 id="firstPjName" class="text-3xl mt-5">Admin Dashboard</h3>
        `

        // for Second Image

        secondImgLink.innerHTML =`
        <a href="https://berry-leaf.vercel.app/">
            <div class="overflow-hidden rounded-2xl border border-slate-300/50">
                <img id="secondImg" class="duration-300 w-full hoverEffectImg" src="../dist/img/berry-leaf.vercel.app_ (1).png" alt="">
            </div>
        </a>
        `

        secondLink.innerHTML = `
        <a target="_blank" href="https://berry-leaf.vercel.app/" class="px-5 py-3 rounded-2xl clickEffect dark:hover:shadow-dark-ultra dark:active:shadow-dark-inset dark:shadow-dark-extra shadow-extra  text-lg float-right text-slate-800 dark:text-slate-100/90">
            <i class="fas fa-arrow-right mr-2"></i>
            View Demo
        </a>
        `
        secondPjName.innerHTML = `
        <h3 id="secondPjName" class="text-3xl mt-5">Berry Leaf</h3>
        `

         // for Third Image

         thirdImgLink.innerHTML =`
         <a  href="https://my-portfolio-z2tx-35b8mc7lu-haru2004github.vercel.app/" >
            <div class="overflow-hidden rounded-2xl border border-slate-300/50">
                <img class="duration-300 w-full hoverEffectImg" src="../dist/img/my-portfolio-z2tx-35b8mc7lu-haru2004github.vercel.app_ (1).png" alt="">
            </div>
        </a>
        `

        thirdLink.innerHTML = `
        <a target="_blank" href="https://my-portfolio-z2tx-35b8mc7lu-haru2004github.vercel.app/" class="px-5 py-3 rounded-2xl clickEffect dark:hover:shadow-dark-ultra dark:active:shadow-dark-inset dark:shadow-dark-extra shadow-extra  text-lg float-right text-slate-800 dark:text-slate-100/90">
            <i class="fas fa-arrow-right mr-2"></i>
            View Demo
        </a>
        `
        thirdPjName.innerHTML = `
        <h3 id="thirdPjName" class="text-3xl mt-5">My Portfolio</h3>
        `

        // for Fourth Image

        fourthImgLink.innerHTML =`
        <a href="https://starbuck-website.vercel.app/">
            <div class="overflow-hidden rounded-2xl border border-slate-300/50">
                <img class="duration-300 w-full hoverEffectImg" src="../dist/img/starbuck-website.vercel.app_.png" alt="">
            </div>
        </a>
        `

        fourthLink.innerHTML = `
        <a target="_blank" href="https://starbuck-website.vercel.app/" class="px-5 py-3 rounded-2xl clickEffect dark:hover:shadow-dark-ultra dark:active:shadow-dark-inset dark:shadow-dark-extra shadow-extra  text-lg float-right text-slate-800 dark:text-slate-100/90">
            <i class="fas fa-arrow-right mr-2"></i>
            View Demo
        </a>
        `
        fourthPjName.innerHTML = `
        <h3 id="fourthPjName" class="text-3xl mt-5">Starbuck</h3>
        `

    })

