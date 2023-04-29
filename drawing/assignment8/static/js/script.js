// /** @type {HTMLCanvasElement} */
// const canvas1 = document.querySelector(".canvas1");
// const context1 = canvas1.getContext("2d");
// const canvas2 = document.querySelector(".canvas2");
// const context2 = canvas2.getContext("2d");
// const canvas3 = document.querySelector(".canvas3");
// const context3 = canvas3.getContext("2d");

// //Pixel density
// const pxScale = window.devicePixelRatio;
// canvas1.width *= pxScale;
// canvas1.height *= pxScale;
// canvas2.width *= pxScale;
// canvas2.height *= pxScale;
// canvas3.width *= pxScale;
// canvas3.height *= pxScale;
// const width1 = canvas1.width;
// const height1 = canvas1.height;
// const width2 = canvas2.width;
// const height2 = canvas2.height;
// const width3 = canvas3.width;
// const height3 = canvas3.height;
// context1.scale(pxScale, pxScale);
// context2.scale(pxScale, pxScale)
// context3.scale(pxScale, pxScale);

// const items = document.querySelectorAll(".item");
// //draw something on each canvas
// items.forEach((item) => {
//     item.addEventListener("click", function() {
//         const canvasName = item.getElementsByTagName('canvas')[0].className
//         let canvas;
//         let context;
//         if(canvasName === "canvas1"){
//             canvas = canvas1;
//             context = context1;
//         } else if (canvasName==="canvas2"){
//             canvas = canvas2;
//             context = context2;
//         }else {
//             canvas = canvas3;
//             context = context3;
//         }

//         console.log(canvas);
//     })
// })