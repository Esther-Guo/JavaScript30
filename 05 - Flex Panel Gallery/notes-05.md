This exercise focuses mostly on CSS.

### Takeaway
Nested flexbox: Elements in flexbox layout can be both a flex item as well as a flex container.

CSS selector: `.a.b` refers to one or more element with both class a and class b. `.a .b` refers to one or more element with class b with **any** parent element with class a.

If one flex item is set to `flex: 1;` and the other set to `flex:5`, then the first item will take 5/6 of spare space.

Difference of using parameter and this:  
In code v1, this always refers to the div element with class `panel` no matter where the user click.  
While in code v2, if the user clicks the p element, `e.target` will refers to the p element and adds a class for p.

```js
// version 1
function changeClass() {
    console.log(this);
    this.classList.toggle('open');
}

// version 2
function changeClass(e) {
    console.log(e.target);
    e.target.classList.toggle('open');
}
panels.forEach(panel => panel.addEventListener('click', changeClass));
```

`toggle()` is much better than looping `add()` and `remove()`!

Capability:   
> Safari transitionend event.propertyName === flex  
> Chrome + FF transitionend event.propertyName === flex-grow  

To make our code compatible, we use `e.propertyName.includes('flex')` instead of `e.propertyName === 'flex-flow'`.