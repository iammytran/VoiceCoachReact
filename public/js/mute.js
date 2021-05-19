
function toggleMute(obj) {
    var currentState = obj.getAttribute("class");

    // change class
    if (currentState == "fa fa-microphone fa-5x")
        obj.setAttribute("class", "fa fa-microphone-slash fa-5x");
    else
        obj.setAttribute("class", "fa fa-microphone fa-5x");
}
