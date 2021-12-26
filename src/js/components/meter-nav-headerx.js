import { createFocusTrap } from 'focus-trap'

const SELECTORS = {
    menuBtn: 'meter-nav-header .toggle',
    menuItems: 'meter-nav-header meter-nav-main',
    expandBtn: 'meter-nav-section a',
    mblToggle: 'meter-nav-section s',
    mblPmItems: 'meter-nav-main nav'

}

/***Desktop menu ** */
class MeterNavHeader {
    constructor() {

        this.menuBtn = document.querySelector(SELECTORS.menuBtn);
        this.menuItems = document.querySelector(SELECTORS.menuItems);
        this.mblToggle = Array.from(document.querySelectorAll(SELECTORS.mblToggle));
        this.mblPmItems = document.querySelector(SELECTORS.mblPmItems);
        this.expandBtn = document.querySelector(SELECTORS.expandBtn);
        this.focusTrap = createFocusTrap(this.menuBtn);
        console.log(this.mblToggle); // value

        this.menuBtn.addEventListener('click', () => this.toggleMenu());



        for (var i = 0; i < this.mblToggle.length; i++) {
            this.mblToggle[i].addEventListener('click', () => this.togglePMenu(i));
            console.log(this.mblToggle); // index
        }


    }



    toggleMenu() {
        let x = this.menuBtn.getAttribute("aria-expanded");
        if (x == "true") {
            x = "false"
        } else {
            x = "true"
        }
        this.menuBtn.setAttribute("aria-expanded", x);
        this.menuItems.classList.toggle("open");
        /*  this.isOpen = typeof force === 'boolean' ? force : !this.isOpen

         this.nav.classList.toggle(CLASSES.open, this.isOpen)
         this.toggleBtn.setAttribute('aria-expanded', String(this.isOpen))

         if (this.isOpen) {
             this.focusTrap.activate()
         } else {
             this.focusTrap.deactivate()
         } */
    }
    toggleMobileMenu() {
        this.expandBtn.forEach((menuItems) => {
            menuItems.addEventListener("click", () => {
                menuItems.classList.toggle("open");
            });
        });
    }
    togglePMenu(index) {

        console.log(index);


    }

}




const links = document.querySelectorAll('#nav-main meter-nav-section s');
const childLinks = document.querySelectorAll('meter-nav-main .navsection .left li s');
const parentListHovers = document.querySelectorAll('meter-nav-main li');
const sectionListHovers = document.querySelectorAll('meter-nav-main li meter-nav-section');
const bodyHovers = document.querySelector('body');




parentListHovers.forEach((parentListHover) => {
    parentListHover.addEventListener("mouseover", mOver, false);
    parentListHover.addEventListener("mouseout", mOut, false);

    function mOver() {
        // console.log(parentListHover);
        parentListHover.classList.add('Hv');
        //  parentListHover.querySelector('meter-nav-section').classList.add('active');
        //  parentListHover.closest('meter-nav-section').classList.add('Hw');
    }

    function mOut() {
        //  console.log(parentListHover);
        parentListHover.classList.remove('Hv');
        //   parentListHover.querySelector('meter-nav-section').classList.remove('active');
        //parentListHover.closest('meter-nav-section').classList.remove('Hw');
    }
});
/*
sectionListHovers.forEach((sectionListHover) => {
    sectionListHover.addEventListener("mouseover", mOver, false);
    sectionListHover.addEventListener("mouseout", mOut, false);
    sectionListHover.parentNode.addEventListener("mouseover", mOver, false);
    sectionListHover.parentNode.addEventListener("mouseout", mOut, false);

    function mOver() {
        //  console.log(sectionListHover);
        sectionListHover.classList.add('Hw');
        //const color = sectionListHover.getAttribute('color');
        // bodyHovers.classList.add(color+'-hover');
    }

    function mOut() {
        // console.log(sectionListHover);
        sectionListHover.classList.remove('Hw');
        // bodyHovers.removeAttribute("class");
    }
});

*/

/* for (const sectionListHover of sectionListHovers) {
    sectionListHover.addEventListener('mouseover', () => sectionListHover.parentNode.classList.add('active'));

    if (sectionListHover.parentNode.classList.contains('active')) {
        sectionListHover.addEventListener('mouseout', () => sectionListHover.parentNode.classList.remove('active'));
    }

} */
//const elements = document.getElementsByClassName('inner');


for (const sectionListHover of sectionListHovers) {
    const color = sectionListHover.getAttribute('color').toLowerCase();
    sectionListHover.addEventListener('mouseover', () => bodyHovers.classList.add(color + '-hover'));
    console.log(color);
    /* if (sectionListHover.parentNode.classList.contains(!'Hw')) {
        sectionListHover.addEventListener('mouseleave', () => bodyHovers.classList.remove(color + '-hover'));
    } */

    if (bodyHovers.classList.contains(!color + '-hover')) {
        sectionListHover.addEventListener('mouseout', () => bodyHovers.classList.remove(color + '-hover'));
    }
}


/***Mobile menu ** */

//parentFirstItem.closest('.navsection').classList.add('visible');
links.forEach((link) => {
    link.addEventListener('click', () => {
        const notClickedLinks = Array.from(links).filter((notClickedLink) => {
            return notClickedLink !== link;
        });

        notClickedLinks.forEach((notClickedLink) => {
            notClickedLink.closest('.main-nav-item').classList.remove('visible');
            //notClickedLink.closest('.navsection').classList.remove('visible');
            childLinks.forEach((childLink) => {
                childLink.addEventListener('click', () => {
                    const notClickedChildLinks = Array.from(childLinks).filter((notClickedChildLink) => {
                        return notClickedChildLink !== childLink;
                    });

                    notClickedChildLinks.forEach((notClickedChildLink) => {
                        notClickedChildLink.parentNode.classList.remove('active');
                        //notClickedLink.closest('.navsection').classList.remove('visible');
                    });

                    childLink.parentNode.classList.add('active');
                    //link.closest('.navsection').classList.add('visible');
                });
            });
        });

        link.closest('.main-nav-item').classList.add('visible');
        //link.closest('.navsection').classList.add('visible');
    });
});



/*  */

/*
const menuBtn = document.querySelector(".meter-header-navigation .menu-btn");
const menuItems = document.querySelector(".meter-header-navigation .menu-items");
const expandBtn = document.querySelectorAll(".meter-header-navigation .expand-btn");

// humburger toggle
menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("open");
    menuItems.classList.toggle("open");
});

// mobile menu expand
this.expandBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        btn.classList.toggle("open");
    });
}); */

if (document.querySelector(SELECTORS.menuBtn)) {
    new MeterNavHeader()
}