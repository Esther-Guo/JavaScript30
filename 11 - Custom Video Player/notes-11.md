### Takeaway
video element only has a `paused` property indicating whether it's paused or not. Not need for another 'playing' property.

textContent 与 innerHTML 的区别:  
正如其名称，Element.innerHTML 返回 HTML。通常，为了在元素中检索或写入文本，人们使用 innerHTML。但是，textContent 通常具有更好的性能，因为文本不会被解析为HTML。  
此外，使用 textContent 可以防止 XSS 攻击。

In JavaScript, kebab-case doesn't fit because of syntax rule. - is not allowed in identifier so `padding-top` is not valid for variable or property name.  
In CSS, camelCase is not a good practice because CSS is case-insensitive. `className` and `classname` is the same identifier for CSS.  
When changing CSS property in JS, such as `flex-basis`, use `xxx.style.flexBasis`.

### My doubts
什么时候应该把event作为参数传进function里，什么时候不传？（代码参考本例中57,58行）