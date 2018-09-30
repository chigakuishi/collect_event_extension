Function.prototype.toJSON = Function.prototype.toString;
function eventLogger(place){
  return function(...args){
    let args_ = Array.prototype.slice.call(arguments);
    let log = {
      time : new Date().getTime(),
      place : place,
      args : JSON.stringify(args_)
    }
    console.log(log);
  }
}

const log = {};

//chrome.alarms.onAlarm.addListener(eventLogger("__REPLACE__"));

chrome.bookmarks.onCreated.addListener(eventLogger("chrome.bookmarks.onCreated.addListener"));
chrome.bookmarks.onRemoved.addListener(eventLogger("chrome.bookmarks.onCreated.addListener"));
chrome.bookmarks.onChanged.addListener(eventLogger("__REPLACE__"));
chrome.bookmarks.onMoved.addListener(eventLogger("__REPLACE__"));
chrome.bookmarks.onChildrenReordered.addListener(eventLogger("__REPLACE__"));
chrome.bookmarks.onImportBegan.addListener(eventLogger("__REPLACE__"));
chrome.bookmarks.onImportEnded.addListener(eventLogger("__REPLACE__"));

chrome.browserAction.onClicked.addListener(eventLogger("__REPLACE__"));

chrome.commands.getAll(eventLogger("__REPLACE__"));

chrome.contextMenus.onClicked.addListener(eventLogger("__REPLACE__"));

chrome.cookies.onChanged.addListener(eventLogger("__REPLACE__"));
