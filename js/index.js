

//Portfolio item Filter

const filterContainer = document.querySelector('.portfolio-filter'),
      
      filterBtns = filterContainer.children,
      totalFilterBtn = filterBtns.length;

        portfolioItems = document.querySelector('.portfolio-items').children;
        totalPortfolioItem = portfolioItems.length;

      for(let i=0;i<totalFilterBtn;i++){

            filterBtns[i].addEventListener('click',function(){

                filterContainer.querySelector(".active").classList.remove('active')
                this.classList.add('active');

                const filterValue = this.getAttribute("data-filter");

                    for(let k=0;k<totalPortfolioItem;k++){
                        console.log(portfolioItems[k].getAttribute('data-category'))
                        if(filterValue ===portfolioItems[k].getAttribute('data-category')){
                            portfolioItems[k].classList.remove('hide');

                            portfolioItems[k].classList.add('show');
                        }else{
                            portfolioItems[k].classList.remove('show');

                            portfolioItems[k].classList.add('hide');
                        }
                        if(filterValue === 'all'){
                            portfolioItems[k].classList.remove('hide');
                            portfolioItems[k].classList.add('show');
                            
                        }
                    }



            })
      }




      //Portfolio Lightbox

      const lightbox = document.querySelector(".lightbox"),
            lightboxImg = lightbox.querySelector(".lightbox-img"),
            lighhtboxText = lightbox.querySelector(".caption-text"),
            lightboxClose = lightbox.querySelector(".lightbox-close"),
            lightboxCounter  = lightbox.querySelector('.caption-counter');
      
    let itemIndex =0;

    for(let i=0; i<totalPortfolioItem; i++){

        portfolioItems[i].addEventListener("click", ()=>{
            itemIndex=i;
            changeItem();
            toggleLightbox();
        })
    }

    function nextItem(){

        if(itemIndex == totalPortfolioItem-1){
            itemIndex=0;
        }else{
            itemIndex++
        }
        changeItem()
    }
    function prevItem(){

        if(itemIndex ==0){
            itemIndex= totalPortfolioItem -1;
        }else{
            itemIndex--;
        }
        changeItem();
    }

    function toggleLightbox(){

        lightbox.classList.toggle("open")
    }
    function changeItem(){

        imgSrc = portfolioItems[itemIndex].querySelector(".portfolio-item-img img").getAttribute("src");
        lightboxImg.src = imgSrc;
        lighhtboxText.innerHTML = portfolioItems[itemIndex].querySelector("h4").innerHTML;
        lightboxCounter.innerHTML = itemIndex + " de " + totalPortfolioItem;
    }

    // close Lightbox

    lightbox.addEventListener("click",function(event){
            
            if(event.target === lightboxClose){
                toggleLightbox();
            }
    })


    // SELECT THEME

        const links  = document.querySelectorAll('.style-color ul li'),
              totalLinks = links.length;


        
        for(let i=0;i<totalLinks;i++){
            
        }


    document.querySelector('.toggle-style-switcher').addEventListener("click",()=>{

        document.querySelector(".style-color").classList.toggle("open");
    })

    const theme = document.querySelectorAll('.list-switcher li');

    
    for(let i = 0;  i < theme.length; i++){''

        theme[i].addEventListener("click",function() {
           if( theme[i].getAttribute('title') =='light'){
                theme.forEach(res =>res.children[0].classList.remove('color-night'));
               theme[i].children[0].classList.add("color-light");
               document.body.className="";

               
           }else{
            theme.forEach(res =>res.children[0].classList.remove('color-light'));
            this.children[0].classList.add("color-night");
            document.body.className="dark";
            


           }
        })
    }


      // ASIDE BAR

      const nav = document.querySelector(".nav"),
            navlist = document.querySelectorAll("li"),
            totalNavList  = navlist.length-2,
            allSections = document.querySelectorAll(".section"),
            totalSections = allSections.length;

    
        for(let i=0;i<totalNavList; i++){
            const a = navlist[i].querySelector("a");

            a.addEventListener("click",function(){

                for(let i=0;i<totalSections;i++){
                    allSections[i].classList.remove("back-section");
                }

               for(let j=0;j<totalNavList;j++){
                if( navlist[j].querySelector("a").classList.contains("active")){
                   allSections[j].classList.add("back-section");
                }
                      navlist[j].querySelector("a").classList.remove("active");

                   
               }
               this.classList.add("active");
               showSection(this);
               if(window.innerWidth < 1200){
                asideSectionToggleBtn()
               }
            })
            
        }

    function showSection(element){

        for(let i=0;i<totalSections;i++){
            allSections[i].classList.remove("active");
        }
        const target = element.getAttribute("href").split('#')[1];
        document.querySelector("#"+target).classList.add("active")
    }

    const navTogglerBtn = document.querySelector(".nav-toggler"),
          aside = document.querySelector(".aside");

    
    navTogglerBtn.addEventListener("click",()=>{
         asideSectionToggleBtn();
    });


    function asideSectionToggleBtn(){
        aside.classList.toggle("open");
        navTogglerBtn.classList.toggle("open");
        for(let i=0; i < totalSections;i++){
            allSections[1].classList.toggle("open")
        }
    }