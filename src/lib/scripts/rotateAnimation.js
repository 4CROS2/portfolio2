// archivo: focusFunctions.js

export let coordinates = { layerX: 0, layerY: 0 };

export function focus(evt,element) {
    let width = element.clientWidth;
    let height = element.clientHeight;

    coordinates.layerX = evt.layerX;
    coordinates.layerY = evt.layerY;

    const yRotation = ((coordinates.layerX - width / 2) / width) * 20;
    const xRotation = ((coordinates.layerY - height / 2) / height) * 20;

    const string = `
		perspective(140px)
		scale(1.1)
		rotateX(${xRotation}deg)
		rotateY(${yRotation}deg)
	`;
    element.style.transform = string
}

export function unfocus(element) {
    const string = `
		perspective(150px)
		scale(1)
		rotate(0)
	`;
    element.style.transform = string
}
