### Takeaway
console.table 可以把 array 展示得更加美观。

spread方法：将NodeList用`[...NodeList]`包起来也可以实现NodeList到Array的转换。

querySelector不仅可以在document上使用，也可以在任何已有的DOM元素上使用。

字符串的split方法可以将字符串拆分为字符串Array。

#### Array.prototype.filter()
Inside the filter function, the array is looped over.

If the object satisfied certain conditions, filter function returns true for this object so that this object is kept. Otherwise, it is dropped.

#### Array.prototype.map()
map function takes in an array, do something with the array, and return a **new** array with the same length.

#### Array.prototype.sort()
sort() handles two objects, compare them, return 1 or -1 based on the comparison result.

For object a and b, return 1 puts a after b, vice versa.

#### Array.prototype.reduce()
reduce() works as a great replacement for the cumbersome for loop when we want an summary output of the array. 

The method takes two parameters. First is the output and second is the current iterated object.