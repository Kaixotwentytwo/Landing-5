'use strict'

window.addEventListener('load', function() {
    
    const body = document.querySelector('body'),
          html = document.querySelector('html'),
          mainBlock = document.querySelectorAll('.main');
    
    let oneOfSix = document.querySelectorAll('.oneOfSix'),
        textOfSixed = document.querySelectorAll('.textOfSixed'),
        halfOfFirstImage = document.querySelectorAll('.halfOfFirstImage'),
        animItem = document.querySelectorAll('.oneItemOfAnimation'),
        animatedBlock = document.querySelector('.animatedBlock');
    
    document.querySelector('#madewithlove').addEventListener('mousedown', function() {
       console.log('da') 
    });
    
    
    
    for (let i = 0; i < oneOfSix.length; i++) {
        oneOfSix[i].style.setProperty('transition-delay', Math.random() * 0.8 + 's');
        
        setTimeout(function() {
            oneOfSix[i].style.setProperty('transition', '.14s ease-in-out') 
            oneOfSix[i].style.setProperty('transition-delay', '0s')
        }, 800)
    };
    
    for (let i = 0; i < textOfSixed.length; i++) {
        textOfSixed[i].style.setProperty('transition-delay', Math.random() * 1.2 + 's');
    };
    
    for (let i = 0; i < animItem.length; i++) {
        animItem[i].style.setProperty('transition-delay', Math.random() * 0.7 + 's');
    }
    setTimeout(function() {
        animItem[0].style.setProperty('transform', 'translateX(-103%)');
        animItem[1].style.setProperty('transform', 'translateY(105%)');
        animItem[2].style.setProperty('transform', 'translateX(105%)');
        animItem.forEach(e => e.style.background = 'var(--white)');
        
        setTimeout(function() {
            animatedBlock.style.zIndex = '0';
        }, 1200);
    }, 500);
    
    
    
    
    
    
    halfOfFirstImage[0].addEventListener('mousedown', moveLeft);
    halfOfFirstImage[0].addEventListener('mouseover', leftWall)
    halfOfFirstImage[0].addEventListener('mouseout', restarting)
    halfOfFirstImage[1].addEventListener('mouseover', rightWall)
    halfOfFirstImage[1].addEventListener('mouseout', restarting)
    halfOfFirstImage[1].addEventListener('mousedown', moveRight);
    
    
    
    
    
    
    
    
    let imgBlock = document.querySelector('.imgBlock'),
        imageimage = document.querySelectorAll('.imageimage'),
        arrowsOfHalf = document.querySelectorAll('.arrowOfHalf');
    imgBlock.style.width = `calc(100% * ${imageimage.length})`
    
    
    
    
    let position = 0;
    function moveRight() {
        
        if (position < imageimage.length - 1) {
            
            position++
            imgBlock.style.setProperty('transform', `translateX(${position * (1 / imageimage.length) * 100 *-1}%)`);
        }
        
        if (position < imageimage.length - 1) {
            arrowsOfHalf[1].style.opacity = 1;
        } else {
            arrowsOfHalf[0].style.opacity = 0;
            arrowsOfHalf[1].style.opacity = 0;
        }
        
        
        imgBlock.style.background = 'var(--white)';
    };

    function moveLeft() {
        if (position > 0) {
            position--
            imgBlock.style.setProperty('transform', `translateX(${position * (1 / imageimage.length) * 100 * -1}%)`);
        }
        
        if (position > 0) {
            arrowsOfHalf[0].style.opacity = 1;
        } else {
            arrowsOfHalf[0].style.opacity = 0;
            arrowsOfHalf[1].style.opacity = 0;
        }
    };
    
    
    
    
    function leftWall() {
        if (position > 0) {
            arrowsOfHalf[0].style.opacity = 1;
        } else {
            arrowsOfHalf[0].style.opacity = 0;
            arrowsOfHalf[1].style.opacity = 0;
        }
    }
    
    function rightWall() {
        if (position < imageimage.length - 1) {
            arrowsOfHalf[1].style.opacity = 1;
        } else {
            arrowsOfHalf[0].style.opacity = 0;
            arrowsOfHalf[1].style.opacity = 0;
        }
    }
    
    function restarting() {
        arrowsOfHalf[0].style.opacity = 0;
        arrowsOfHalf[1].style.opacity = 0;
    }
    
    
    
    
    
    
    
    
    
    let direction = 'right';
    let SetIntervalIsActive = true;
    
    
    
    halfOfFirstImage[0].addEventListener('mouseover', function() {SetIntervalIsActive = false});
    halfOfFirstImage[1].addEventListener('mouseover', function() {SetIntervalIsActive = false}); 
    
    halfOfFirstImage[0].addEventListener('mouseout', function() {SetIntervalIsActive = true});
    halfOfFirstImage[1].addEventListener('mouseout', function() {SetIntervalIsActive = true});
    
    
    
    function thinkingAboutSlideMotionFunction() {
        if (SetIntervalIsActive == true) {
            
            switch (direction) {
                    
                case 'right':
                    moveRight()
                    
                    switch (position) {
                        case (imageimage.length - 1):
                            direction = 'left';
                    }
                    
                    break
                    
                case 'left':
                    moveLeft()
                    
                    switch (position) {
                        case 0:
                            direction = 'right';
                    }
                    
                    break
            }
//            if (direction == 'right') {
//                moveRight()
//            } if (direction == 'left') {
//                moveLeft()
//            } if ((direction == 'right') && (position == (imageimage.length - 1))) {
//                direction = 'left';
//            } if ((direction == 'left') && (position == 0)) {
//                direction = 'right';
//            }
        }
    }
    
    setInterval(thinkingAboutSlideMotionFunction, 5000);

    //

    setInterval(function() {
        let YCoord = window.pageYOffset;
    
        if (YCoord > (mainBlock[0].clientHeight / 2)) {
            
            for (let i = 0; i < oneOfSix.length; i++) {
                oneOfSix[i].style.setProperty('transform', 'translateX(0)');
                oneOfSix[i].style.opacity = 1;
            }
            
            for (let i = 0; i < textOfSixed.length; i++) {
                textOfSixed[i].style.setProperty('transform', 'translateX(0)');
                textOfSixed[i].style.opacity = 1;
            }
        }
    }, 500);
    
    //
    
    let burgerMenu = document.querySelector('.burgerMenu'),
        burgerOpener = document.querySelector('.burgerOpener'),
        burgerCross = document.querySelector('n');
        
        
        
    function openBurger() {
        burgerMenu.style.setProperty('transform', 'translateX(-50%) translateY(0)');
        burgerCross.style.opacity = 1;
        for (let i = 0; i < 3; i++) {
            burgerOpener.children[i].style.opacity = 0;
        };
        burgerOpener.removeEventListener('click', openBurger);
        burgerOpener.addEventListener('click', closeBurger);
    }
    
    function closeBurger() {
        burgerMenu.style.setProperty('transform', 'translateX(-50%) translateY(-200%)');
        burgerCross.style.opacity = 0;
        for (let i = 0; i < 3; i++) {
            burgerOpener.children[i].style.opacity = 1;
        };
        burgerOpener.removeEventListener('click', closeBurger);
        burgerOpener.addEventListener('click', openBurger);
    }
        
    burgerOpener.addEventListener('click', openBurger)
    
    burgerMenu.addEventListener('click', closeBurger)
    
    //
    
    let redBox = document.querySelector('#firstOfSectionUsually');
    let whiteBox = document.querySelector('#secondOfSectionUsually');
    let manySections = document.querySelector('.manySections');
    redBox.addEventListener('mouseover', redBoxBig)
    redBox.addEventListener('mouseout', bothBoxes)
    whiteBox.addEventListener('mouseover', whiteBoxBig)
    whiteBox.addEventListener('mouseout', bothBoxes)
    
    function redBoxBig() {
        redBox.style.zIndex = 9;
        whiteBox.style.zIndex = 0;
        whiteBox.style.setProperty('clip-path', 'polygon(calc(1 / 3 * 100% - (var(--mm) / 3)) calc(1 / 3 * 100% + (var(--mm) / 6)), calc(1 / 3 * 100% - (var(--mm) / 3)) calc(1 / 3 * 100% + (var(--mm) / 6)), calc(1 / 3 * 100% - (var(--mm) / 3)) calc(2 / 3 * 100% + (var(--mm) / 3)), 100% calc(2 / 3 * 100% + (var(--mm) / 3)), 100% 100%, calc(1 / 3 * 100% + (var(--mm) / 6)) 100%, calc(1 / 3 * 100% + (var(--mm) / 6)) calc(2 / 3 * 100% + (var(--mm) / 3)), calc(1 / 3 * 100% - (var(--mm) / 3)) calc(2 / 3 * 100% + (var(--mm) / 3)))');
        
        setTimeout(function() {
            manySections.style.setProperty('grid-template-areas', ' "header d d" "header c c" "footer t t" ')
        }, 200);
        
    }
    
    function whiteBoxBig() {
        redBox.style.zIndex = 0;
        whiteBox.style.zIndex = 9;
        whiteBox.style.setProperty('clip-path', 'polygon(0 0, calc(2 / 3 * 100% - (var(--mm) / 6)) 0, calc(2 / 3 * 100% - (var(--mm) / 6)) 0, 100% 0, 100% 100%, calc(1 / 3 * 100% + (var(--mm) / 6)) 100%, calc(1 / 3 * 100% + (var(--mm) / 6)) calc(2 / 3 * 100% + (var(--mm) / 3)), 0 calc(2 / 3 * 100% + (var(--mm) / 3)))')
    }
    
    function bothBoxes() {
        redBox.style.zIndex = 0;
        whiteBox.style.zIndex = 0;
        whiteBox.style.setProperty('clip-path', 'polygon(0 calc(1 / 3 * 100% + (var(--mm) / 6)), calc(2 / 3 * 100% - (var(--mm) / 6)) calc(1 / 3 * 100% + (var(--mm) / 6)), calc(2 / 3 * 100% - (var(--mm) / 6)) calc(2 / 3 * 100% + (var(--mm) / 3)), 100% calc(2 / 3 * 100% + (var(--mm) / 3)), 100% 100%, calc(1 / 3 * 100% + (var(--mm) / 6)) 100%, calc(1 / 3 * 100% + (var(--mm) / 6)) calc(2 / 3 * 100% + (var(--mm) / 3)), 0 calc(2 / 3 * 100% + (var(--mm) / 3)))')
        manySections.style.setProperty('grid-template-areas', ' "header header d" "c c c" "footer t t" ')
        setTimeout(function() {
            manySections.style.setProperty('grid-template-areas', ' "header header d" "c c c" "footer t t" ')
        }, 200);
    }
    
    //
    
    let AllOfSizes = document.querySelectorAll('.size');
    
    for (let i = 0; i < AllOfSizes.length; i++) {
        AllOfSizes[i].addEventListener('click', pickSize)
    }
    
    function pickSize() {
        for (let i = 0; i < AllOfSizes.length; i++) {
            AllOfSizes[i].style.color = 'var(--black)';
            AllOfSizes[i].style.border = '2px solid var(--black)';
            AllOfSizes[i].style.background = '';
            AllOfSizes[i].style.setProperty('transform', 'scale(1)');
        }
        
        this.style.background = 'var(--red)';
        this.style.border = '2px solid var(--red)';
        this.style.color = 'var(--red)';
        this.style.setProperty('transform', 'scale(1.2)');
    }
    
});
//end of onload