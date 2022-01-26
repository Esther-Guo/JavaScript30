click最内层`div`时，`click`事件会被逐层传递到最顶层的`document`，因此会出现`three two one`的输出，只要这个元素监听了click事件，就会被触发。  

浏览器监听事件的机制就是首先capture事件（由顶至下），确定是哪个元素被触发该事件。随后被触发的事件会从该元素开始bubble up（由底至上），如果上层的元素也监听了该事件，就也会被触发。  

`{capture: true}`配置意味着从顶至下的capture过程中就触发事件，因此此时点击最内层`div`的输出是`one two three`。`capture`属性的默认值是false。  

`e.stopPropagation()`可以禁止事件的bubble(or capture)行为，在函数中加上这句后，点击最内层`div`只会出现`three`，即事件不会在外层被触发了。如果此时也设置了`{capture: true}`的话，向下的事件传递也会被阻止。

`{once: true}`设置可以让事件在被触发过一次后自动unbind，相当于removeEventListener()。  
应用场景可以是一个只想被人点击一次的按钮（比如购物车的结算）~