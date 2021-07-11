import {flatFn, flatMap} from './a'
import wait from './b'

const array = [1, 2, 3, 4, 5]

flatFn(array)
flatMap(array)
wait().then(r => r)