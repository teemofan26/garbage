let main = document.querySelector(".main");
let wrapper = document.querySelector(".wrapper");
let scale = 1;
let dx = 0;
let dy = 0;

window.addEventListener("wheel", (e) => {
    scale += e.wheelDeltaY/1000;
    
    wrapper.style.transform = `matrix(${scale}, 0, 0, ${scale}, ${dx}, ${dy})`;
});

let xA;
let yA;
function move(e){
    const xDiff = e.pageX - xA;
    const yDiff = e.pageY - yA;
    dx += xDiff;
    dy += yDiff;
    wrapper.style.transform = `matrix(${scale}, 0, 0, ${scale}, ${dx}, ${dy})`;
    xA = e.pageX;
    yA = e.pageY;
}
main.addEventListener("mousedown", (e) => {
    xA = e.pageX;
    yA = e.pageY;
    main.addEventListener("mousemove", move);
});
main.addEventListener("mouseup", (e) => {
    main.removeEventListener("mousemove", move);
});