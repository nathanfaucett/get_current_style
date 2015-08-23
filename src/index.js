var supports = require("supports"),
    environment = require("environment"),
    isElement = require("is_element"),
    isString = require("is_string"),
    camelize = require("camelize");


var baseGetCurrentStyle;


module.exports = getCurrentStyle;


function getCurrentStyle(node, style) {
    if (isElement(node) && isString(style)) {
        return baseGetCurrentStyle(node, style);
    } else {
        return "";
    }
}


if (supports.dom && environment.document.defaultView) {
    baseGetCurrentStyle = function(node, style) {
        return node.ownerDocument.defaultView.getComputedStyle(node, "")[camelize(style)] || "";
    };
} else {
    baseGetCurrentStyle = function(node, style) {
        if (node.currentStyle) {
            return node.currentStyle[camelize(style)] || "";
        } else {
            return node.style[camelize(style)] || "";
        }
    };
}
