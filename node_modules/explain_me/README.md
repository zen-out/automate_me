# explain_me 

problem: lack of clear documentation of how to do things. 
what should be: easy to generate documentation and 
examples for node modules


[![here](https://github.com/zen-out/zen-out.github.io/blob/master/packages/videos/explain_me.gif)](https://github.com/zen-out/zen-out.github.io/blob/master/packages/videos/explain_me.gif)



- Make sure to put everything in your src folder 
- Install this package and be able to generate readme documentation and jsdocs for your module. 



```
npm install jsdoc
npm install explain_me
```

```js
const explain_me = require("explain_me")
    // generates html docs folder 
explain_me.html(
        'test_waters')
    // generates readme and then appends to your readme file
explain_me.readme()
```

