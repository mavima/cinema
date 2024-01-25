let id = null;

function hide(elem, time) {
    setTimeout(function () {
        elem.style.display = 'none';
    }, time);
}

function show(elem) {
    elem.style.display = 'block';
}

$(document).ready(() => {
    $('#move').on('click', () => {
        const clip = document.getElementById("animation");
        const clip2 = document.getElementById("animation2");
        const clip3 = document.getElementById("animation3");
        const clip4 = document.getElementById("animation4");
        show(clip);
        show(clip2);
        show(clip3);
        show(clip4);
        let pos = 0;
        clearInterval(id);
        id = setInterval(frame, 10);
        function frame() {
            if (pos == 600) {
                clearInterval(id);
                hide(clip, 300);
                hide(clip2, 0);
                hide(clip3, 600);
                hide(clip4, 900);
            } else {
                pos++;
                clip.style.top = pos + 'px';
                clip.style.left = pos + 'px';
                clip2.style.top = (pos + 100) + 'px';
                clip2.style.left = (pos + 300) + 'px';
                clip3.style.top = (pos - 100) + 'px';
                clip3.style.left = (pos + 600) + 'px';
                clip4.style.top = (pos - 300) + 'px';
                clip4.style.left = (pos - 300) + 'px';
            }
        }
    })


});

