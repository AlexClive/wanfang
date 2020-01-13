/* IE9, IE10 and IE11 requires all of the following polyfills. */
// 兼容ie10
(function () {
    Object.setPrototypeOf = Object.setPrototypeOf || ({__proto__: []} instanceof Array ? setProtoOf : mixinProperties);

    function setProtoOf(obj, proto) {
        obj.__proto__ = proto;
        return obj;
    }

    function mixinProperties(obj, proto) {
        for (const prop in proto) {
            if (!obj.hasOwnProperty(prop)) {
                obj[prop] = proto[prop];
            }
        }
        return obj;
    }
})();
// This polyfill adds compatibility to all Browsers supporting ES5:
if ((window as any).NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (let i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}

// 解决ie下报错 对象不支持matches
if (!Element.prototype.matches) {
    Element.prototype.matches =
        (Element.prototype as any).matchesSelector ||
        (Element.prototype as any).mozMatchesSelector ||
        (Element.prototype as any).msMatchesSelector ||
        (Element.prototype as any).oMatchesSelector ||
        Element.prototype.webkitMatchesSelector ||
        function (s) {
            const matches = (this.document || this.ownerDocument).querySelectorAll(s);
            let i = matches.length;
            while (--i >= 0 && matches.item(i) !== this) {
            }
            return i > -1;
        };
}
import 'mutationobserver-shim';

/** IE10 and IE11 requires the following for the Reflect API. */
import 'core-js/es/symbol';
import 'core-js/es/object';
import 'core-js/es/function';
import 'core-js/es/parse-int';
import 'core-js/es/parse-float';
import 'core-js/es/number';
import 'core-js/es/math';
import 'core-js/es/string';
import 'core-js/es/date';
import 'core-js/es/array';
import 'core-js/es/regexp';
import 'core-js/es/map';
import 'core-js/es/weak-map';
import 'core-js/es/set';
import 'core-js/es/array';
import 'core-js/es/promise';


/** IE10 and IE11 requires the following for the Reflect API. */
import 'core-js/es/reflect';

/* Evergreen browsers require these. */
// Used for reflect-metadata in JIT. If you use AOT (and only Angular decorators), you can remove.
import 'core-js/es/reflect';

/** IE10 and IE11 requires the following for NgClass support on SVG elements */
import 'classlist.js'; // Run `npm install --save classlist.js`.

/**
 * Web Animations `@angular/platform-browser/animations`
 * Only required if AnimationBuilder is used within the application and using IE/Edge or Safari.
 * Standard animation support in Angular DOES NOT require any polyfills (as of Angular 6.0).
 */
import 'web-animations-js'; // Run `npm install --save web-animations-js`.
import 'zone.js/dist/zone'; // Included with Angular CLI.

