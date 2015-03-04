var environment = require("environment"),
    isElement = require("is_element");


var defaultView = environment.document.defaultView,
    hasGetComputedStyle = !!(defaultView && defaultView.getComputedStyle);


module.exports = function getCurrentStyle(node, style) {
    if (isElement(node)) {
        if (hasGetComputedStyle) {
            return defaultView.getComputedStyle(node, "")[style] || "";
        } else if (node.currentStyle) {
            return node.currentStyle[style] || "";
        } else {
            return node.style[style] || "";
        }
    } else {
        return "";
    }
};
