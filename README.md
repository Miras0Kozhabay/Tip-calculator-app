# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents


- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)//
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)



## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Screenshot

![Screenshot.png]


### Links

- Solution URL: [Add solution URL here](file:///C:/Users/User/Downloads/tipCalculator/tip-calculator-app-main1%20(1)/tip-calculator-app-main/tip-calculator-app-main/index.html)
- Live Site URL: [https://miras0kozhabay.github.io/Tip-calculator-app/](https://miras0kozhabay.github.io/Tip-calculator-app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Bootstrap
- Font Awesome
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library



### What I learned

We learned to correctly place and replace objects on the website, change values and work with JavaScript, we improved our skills working with buttons and functions, we have lot of ways how to develop further


```html
starting with <div id="darkcyanBg"> and ending with </div> which close it, for me it is the best what i did in this work
```
```css
I proud what I did correctly all things in this work, but class .attribution has it's own role in this work. 
```
```js

function ten(){
tip=bill*0.1;
tipPerPerson=tip/amount;
total=(bill+tip)/amount;
document.getElementById('tipAmount').innerHTML =  "$" + parseFloat(tipPerPerson).toFixed(2) ;
document.getElementById('totalPerPerson').innerHTML =  "$" + parseFloat(total).toFixed(2) ;

}
```



### Continued development

Learning deal with animations, and make it easier wo work with them, create code that would work as animation. Another section is developing to deal with buttons, to make them more presentable. 



### Useful resources

https://www.w3schools.com/ - This is an amazing website that helped us to understand some difficulties working with JS. 

https://fontawesome.com/ - This is the website, where we get icons and placed it in our work, which helped us so much. 


## Author

- Website - [](https://www.your-site.com)
Kozhabay Miras - https://github.com/Miras0Kozhabay/
Issayev Rakhat - https://github.com/issayevrakhat/



## Acknowledgments


