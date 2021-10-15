### Steps:
- [x] set default style using CSS
- [x] use JS to fetch values from input elements
- [x] update css value when input changes

### Takeaway
Nodelist 和 Array 的不同：Array有reduce, map等方法，但NodeList没有。我们的例子里可以用NodeList自带的forEach方法。

将Nodelist转换为Array可以用`arr = Array.from(nl);`. 另一种转换方式见 note-04.md