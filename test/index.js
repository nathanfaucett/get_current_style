var tape = require("tape"),
    getCurrentStyle = require("..");


tape("getCurrentStyle([element : Element]) should return elements current styles", function(assert) {
    var element = document.createElement("div");

    element.style.marginLeft = "10px";

    document.body.appendChild(element);

    assert.equal(getCurrentStyle(element, "marginLeft"), "10px");

    assert.end();
});
