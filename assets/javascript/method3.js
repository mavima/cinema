let id = null;

const clip = document.getElementById("animation");
const clip2 = document.getElementById("animation2");
const clip3 = document.getElementById("animation3");
const clip4 = document.getElementById("animation4");

let pos = 0;

clip.style.top = pos + 'px';
clip.style.left = pos + 'px';
clip2.style.top = (pos + 100) + 'px';
clip2.style.left = (pos + 300) + 'px';
clip3.style.top = (pos - 100) + 'px';
clip3.style.left = (pos + 600) + 'px';
clip4.style.top = (pos - 300) + 'px';
clip4.style.left = (pos - 300) + 'px';

function hide(clip) {
    clip.style.display = 'none';
}

function show(clip) {
    clip.style.display = 'block';
}

const clips = [clip, clip2, clip3, clip4 ];



$(document).ready(() => {
    $('#move').on('click', () => {
        clips.forEach((clip, index) => {
            clearInterval(id);
            id = setInterval(frame, 10);
            function frame() {
                if (pos == 600) {
                    clearInterval(id);
                    hide(clip);
                    console.log("done");
                } else {
                    show(clip);
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

        });
    })

});