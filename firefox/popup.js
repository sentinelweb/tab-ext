// Save tabs
document.getElementById("save-tabs").addEventListener("click", function() {
    console.log("Save tabs pressed");
  browser.runtime.sendMessage({type: "save-tabs"});
});

// Restore tabs
document.getElementById("restore-tabs").addEventListener("click", function() {
console.log("Restore tabs pressed")
  browser.runtime.sendMessage({type: "restore-tabs"});
});
