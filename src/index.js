var environment = require("environment"),
    isElement = require("is_element"),
    camelize = require("camelize");


var defaultView = environment.document.defaultView,
    hasGetComputedStyle = !!(defaultView && defaultView.getComputedStyle);


module.exports = getCurrentStyle;


function getCurrentStyle(node, style) {
    if (isElement(node)) {
        if (hasGetComputedStyle) {
            return defaultView.getComputedStyle(node, "")[camelize(style)] || "";
        } else if (node.currentStyle) {
            return node.currentStyle[camelize(style)] || "";
        } else {
            return node.style[camelize(style)] || "";
        }
    } else {
        return "";
    }
}
