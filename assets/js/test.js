function myFunction() {
    var copyText = document.getElementById("myInput");
    var textContent = copyText.textContent || copyText.innerText;
    // copyText.textContent;
    navigator.clipboard.writeText(textContent.value);
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied"
}

function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
}