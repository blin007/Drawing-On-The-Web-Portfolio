# Final Project

This project consists of 3 drawings and an interface

## Interface

- Three grid columns
- Hovering over their svg icons reveals a button
- Clicking on the button navigates to their corresponding drawing
- Note that in Firefox the grid fits the screen since the CSS has selector does not work on firefox browsers by default
- In Chrome (and hopefully other browsers) hovering over a grid column causes it to expand

## Drawing 1: Playstation

The first drawing consists of a old-school television and playstation 1, both of which were created entirely in CSS (Except the playstation logo which is an svg). The window behind the television was made using canvas, each star in the back was given a random velocity to simulate a parallax effect. Clicking on the playstation power button will switch the video element of the tv to the ps1 startup.

## Drawing 2: Gameboys

The second drawing consists of two gameboys, again both were entirely created in CSS. The buttons on the gameboys can be clicked, however only one button on each does something. For the left (red) gameboy, clicking on the top power switch will turn it on and play the gameboy startup video. For the right (blue) gameboy, clicking on the "A" button will play a pokemon clip. The CSS before and after selectors were my best friend for this drawing. I also utilized box shadows that add an extra layer of depth to the devices.

## Drawing 3: Among Us (Everyone gets ejected)

The third drawing consists of 12 among us characters (all created in CSS), bouncing around in space, which is supposed to simulate the ejection scene. The space background was created using HTML canvas. This drawing is probably the most complex in terms of javascript. Each character is represented by a class and is assigned a random velocityX, velocityY, and rotational velocity value. Their position in the viewport is changed based on these velocity values. Because the characters are not part of the canvas, I got their position by using the JS getBoundingClientRect function. The signs of the velocity values are switched if the character hits the edge of the screen. In addition, hovering over a character will slow down its velocity values.
