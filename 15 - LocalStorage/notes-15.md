### Takeaway
In this exercise, listen to the `submit` event is better than the `click` button event cuz form submission includes clicking the button, hitting enter key etc.

The preferred way of creating a checkbox item. By setting the property for the same value, `for` attribute of \<label> links the `id` attribute of \<input>, so that when the label is clicked, input checkbox will also be checked.
```html
<li>
    <input type="checkbox" id="item${i}" data-index=${i} />
    <label for="item${i}">${item.text}</label>
</li>
```

`${}` can even have tenary operator in it. eg `${item.done? 'checked':''}`

Local storage can handle nothing but string! If the item is an object, stringify it first before put it into local storage.

