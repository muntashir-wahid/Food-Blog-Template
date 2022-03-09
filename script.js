'use strict';

const [ container1El, 
        container2El, 
        container3El,
        ...restEl
    ] = [...document.querySelector('main').children];

const foodContainers = [container1El, container2El, container3El];

const revealFood = function(entries, observer) {
    const [entry] = entries;
    console.log(entry);
    if(entry.isIntersecting) {
        const [ ,classList] = entry.target.classList;
        if (!classList) return;
        entry.target.classList.remove(classList);
        observer.unobserve(entry.target);
    }
}

const containerObserver = new IntersectionObserver(revealFood, {
    root: null,
    threshold: 0,
});

foodContainers.forEach((container, index)=> {
    containerObserver.observe(container);
    if (index % 2 === 0) {
        container.classList.add('move-right');
    } else {
        container.classList.add('move-left');
    }
})
