var VariableEvents = (function () {

    return (function (obj, propname, defaultValue, getCB, setCB, modGet, modSet) {
        'use strict';
        var i = "_" + propname.toString(),
            f = 'function';
        obj[i] = {
            val: defaultValue,
            g: getCB,
            s: setCB,
            mg: modGet,
            ms: modSet
        };
        Object.defineProperty(obj, propname, {
            get: function () {
                f === typeof obj[i].g && obj[i].g(obj[i].val);
                return (f === typeof obj[i].mg) ? obj[i].mg(obj[i].val) : obj[i].val;
            },
            set: function (value) {
                obj[i].val = (f === typeof obj[i].ms) ? obj[i].ms(value) : value;
                f === typeof obj[i].s && obj[i].s(obj[i].val);
            },
            enumerable: true,
            configurable: true
        });
    })
})();
