// the function
function customReady(callback) {
    function onready() {
        try { callback.call(window); }
        catch (err) { console.error(err); }
    }
    if (Function('/*@cc_on return true@*/')() ? document.readyState === "complete" : document.readyState !== "loading") onready();
    else document.addEventListener('DOMContentLoaded', onready, false);
}

// usage
customReady(function () {
    console.log("DOM Loaded");
});