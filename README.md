#Example:

``` shell
$ npm install sensetive-words --save
```

```javascript

const { sensitiveWords } = require('sensitive-words');

// ES2015 modules

import { sensitiveWords } from 'sensitive-words';

const filtered = sensitiveWords(
    "here is the new life, a good life for my lovely living life. on the verge of death and life",
    ["life","good"]
    );

console.log('here',filtered);

//here here is the new ***, a *** *** for my lovely living ***. on the verge of death and ***


```