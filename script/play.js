document.querySelectorAll('.skill').forEach(skill => {
    skill.addEventListener('mouseenter', function(){
        // don't refactor to arrow function, cause of 'this' keyword
        let video = this.querySelector('video');
        video.play();
    });
    skill.addEventListener('mouseleave', function(){
        // don't refactor to arrow function, cause of 'this' keyword
        let video = this.querySelector('video');
        video.currentTime = 0;
        video.pause();
    });
});