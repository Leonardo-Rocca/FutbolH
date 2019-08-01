export default  function combinations(array, unique) {
    return (function(){
        'use strict';
        return main(array, unique);
        function create_array(array, value) {
            let r_array = [];
            let limit = array.indexOf(value);
            for (let i = 0; i < limit; i++) {
                r_array.push(array[i]);
            }
            while (limit--) {
                array.shift();
            }
            return array.concat(r_array);
        }
        function combinations(array, number, unique) {
            let r_array = [];
            let c_number = number;
            let first = array.shift();
            while (number--) {
                r_array.push([first].concat(array.slice(0, c_number - 1)));
                array.push(array.shift());
            }
            if (unique) {
                r_array.map(function(value) {
                    return value.sort();
                });
            }
            return r_array;
        }
        function remove_duplicate(array, value) {
            return array.filter(function(item, index, inputArray) {
                return inputArray.indexOf(item) == index;
            });
        }
        function repopulate_array(array, new_value) {
            for (let i = 0, s = new_value.length; i < s; i++) {
                array.push(new_value[i]);
            }
            return array;
        }
        function main(array) {
            unique = typeof unique === 'undefined' ? false : unique;
            let len = array.length + 1;
            let c_array = array.slice();
            let r_array = [];
            let t_array = [];
            let value;
            while (len--) {
                while (c_array.length) {
                    value = c_array.shift();
                    t_array = create_array(array.slice(), value);
                    repopulate_array(r_array, combinations(t_array, len, unique));
                }
                c_array = array.slice();
            }
            r_array = remove_duplicate(r_array);

            r_array = r_array.filter(l=>l.length==array.length);
            return r_array;
        }
    })();
}