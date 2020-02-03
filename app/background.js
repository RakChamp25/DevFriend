
chrome.windows.onCreated.addListener(function() {
  chrome.storage.sync.get(['webList'], function(result) {
    let { webList } =  result;
    (webList || []).forEach(function(obj) {
      chrome.tabs.query({},function(tabs) {
        if(!tabs.find(tab => tab.url === obj.link)) {
          chrome.tabs.create({ url: obj.link });
        }
     });
    });
  });
});