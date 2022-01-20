当某元素的`position`属性被设置为`fixed`时，该元素不再占据空间。也就是说当我们在本例中把nav设置为`fixed`的时候，整个页面的元素位置会被重新渲染，nav后的元素被上移以填补空间。  
解决方法就是将nav的高度填补在body的`padding-top`中。  

另外几个css动效的实现，都是仅仅通过增加一个`.fixed-nav xxx`来实现的，这也是为什么要把`fixed-nav`放在最外层body上的原因，很方便。  