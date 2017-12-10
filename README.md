# moon-moment
A small wrapper for integrating momentjs to Moon.js


## How to install:
### CommonJS:
```
npm install --save moment moon-moment
```

And in your entry file:
```
import Moon from 'moon'
import moment from 'moment'
import MoonMoment from 'moon-moment'

Moon.use(MoonMoment, moment)
```

### Script:
Just add 3 scripts in order: `moon`, `moment` and `moon-moment` to your `document`.
```html
<script src="https://unpkg.com/moon-moment"></script>
```

### Usage
Call `this.$moment()` in any component.


## License
Copyright to [Daksh Miglani](https://dak.sh) | Licensed to MIT. 
