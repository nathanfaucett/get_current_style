var supports = require("@nathanfaucett/supports"),
    environment = require("@nathanfaucett/environment"),
    isElement = require("@nathanfaucett/is_element"),
    isString = require("@nathanfaucett/is_string"),
    camelize = require("@nathanfaucett/camelize");


var baseGetCurrentStyles;


module.exports = getCurrentStyle;


function getCurrentStyle(node, style) {
    if (isElement(node)) {
        if (isString(style)) {
            return baseGetCurrentStyles(node)[camelize(style)] || "";
        } else {
            return baseGetCurrentStyles(node);
        }
    } else {
        if (isString(style)) {
            return "";
        } else {
            return null;
        }
    }
}

if (supports.dom && environment.document.defaultView) {
    baseGetCurrentStyles = function(node) {
        return node.ownerDocument.defaultView.getComputedStyle(node, "");
    };
} else {
    baseGetCurrentStyles = function(node) {
        if (node.currentStyle) {
            return node.currentStyle;
        } else {
            return node.style;
        }
    };
}
