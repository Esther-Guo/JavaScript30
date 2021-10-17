### Takeaway
checkbox的事件监听应该使用click还是change？  
`onchange` in IE only fires when the checkbox loses focus. So if you tab to it, hit space a few times, tab out, you'll only get one `onchange` event, but several `onclick` events. Usually, `click` is a preferred choice.

