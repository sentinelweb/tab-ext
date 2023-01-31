// doesnt work compare xith this project: https://github.com/mdn/webextensions-examples/blob/main/bookmark-it/background.js

// Save tabs
browser.browserAction.onClicked.addListener(function(tab) {
  var tabs = [];
  browser.tabs.query({currentWindow: true}).then(function(tabs) {
    tabs.forEach(function(tab) {
      tabs.push({url: tab.url, active: tab.active});
    });
    console.log("Saving tabs: " + tabs)
    browser.storage.local.set({tabs: tabs});
  });
});

// Restore tabs
browser.runtime.onStartup.addListener(function() {
  browser.storage.local.get("tabs").then(function(items) {
    var tabs = items.tabs;
    console.log("restoring tabs: " + tabs)
    if (!tabs) return;
    tabs.forEach(function(tab) {
      browser.tabs.create({url: tab.url, active: tab.active});
    });
  });
});
