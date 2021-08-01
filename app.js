const cursor = document.querySelector('.cursor');
const navLinks = document.querySelectorAll('.nav-item');
const logo = document.querySelector('.logo img');
const dark = document.querySelector('.darkmode');
const navWrapper = document.querySelector('.nav-wrapper');
const darkTrack = document.querySelector('.dark-mode-track');
const darkThumb = document.querySelector('.dark-mode-thumb');
const link = document.querySelectorAll('.link');
const cursorBorder = document.querySelectorAll('.cursor-border');
const DarkModeBackground = document.querySelector('.darkModeBackground');



const editCursor = e => {
    const { clientX: x, clientY: y } = e;
    cursor.style.left = x + 'px';
    cursor.style.top = y + 'px';
    cursorBorder.forEach(cursor => {
        cursor.style.left = x + 'px';
        cursor.style.top = y + 'px';
    });
};

navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        cursor.classList.add('hoverCursor');
        // cursorBorder.forEach(cursor => {
        //     cursor.classList.add('hoverCursor-border');
        // })
        cursorBorder[0].classList.add('hoverCursor-border');
        cursorBorder[1].classList.add('hoverCursor-border2');
        cursorBorder[2].classList.add('hoverCursor-border3');
    });

    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('hoverCursor');
        cursorBorder[0].classList.remove('hoverCursor-border');
        cursorBorder[1].classList.remove('hoverCursor-border2');
        cursorBorder[2].classList.remove('hoverCursor-border3');
    })
});


dark.addEventListener('mouseover', () => {
    cursor.classList.add('darkModeButtonHoverCursor');
    cursorBorder[0].classList.add('darkModeButtonHoverCursorBorder');
});

dark.addEventListener('mouseleave', () => {
    cursor.classList.remove('darkModeButtonHoverCursor');
    cursorBorder[0].classList.remove('darkModeButtonHoverCursorBorder');

});


dark.addEventListener('click', function () {

    navWrapper.classList.toggle('dark-nav-wrapper');
    document.body.classList.toggle('dark-body');
    cursor.classList.toggle('dark-cursor');
    darkTrack.classList.toggle('light-mode-track');
    darkThumb.classList.toggle('light-mode-thumb');
    logo.classList.toggle('dark-logo');
    link.forEach(link => {
        link.classList.toggle('dark--link--underline-effect');
        link.classList.toggle('link--underline-effect');
    })

    // DarkModeBackground.classList.toggle('darkModeBackgroundActive');
    // DarkModeBackground.classList.toggle('cursor');

});

function mouseMove(displayOption) {
    cursor.style.visbility = displayOption; 
    cursorBorder.forEach(cursorRing => {
        cursorRing.style.visbility = displayOption;
    });
};


window.addEventListener('mousemove', editCursor);
// document.body.addEventListener('mousemove', mouseMove(''));
// document.body.addEventListener('mouseleave', mouseMove('hidden'));

