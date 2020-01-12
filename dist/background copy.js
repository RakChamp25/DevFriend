
chrome.windows.onCreated.addListener(function() {
  chrome.storage.local.get(['webList'], function(result) {
    let { webList } =  result;
    webList.forEach(function(obj) {
      chrome.tabs.create({ url: obj.link });
    });
  });
  });