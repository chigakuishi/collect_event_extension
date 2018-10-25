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

//chrome.alarms.onAlarm.addListener(eventLogger("chrome.alarms.onAlarm.addListener"));

chrome.bookmarks.onCreated.addListener(eventLogger("chrome.bookmarks.onCreated.addListener"));
chrome.bookmarks.onRemoved.addListener(eventLogger("chrome.bookmarks.onCreated.addListener"));
chrome.bookmarks.onChanged.addListener(eventLogger("chrome.bookmarks.onChanged.addListener"));
chrome.bookmarks.onMoved.addListener(eventLogger("chrome.bookmarks.onMoved.addListener"));
chrome.bookmarks.onChildrenReordered.addListener(eventLogger("chrome.bookmarks.onChildrenReordered.addListener"));
chrome.bookmarks.onImportBegan.addListener(eventLogger("chrome.bookmarks.onImportBegan.addListener"));
chrome.bookmarks.onImportEnded.addListener(eventLogger("chrome.bookmarks.onImportEnded.addListener"));

chrome.browserAction.onClicked.addListener(eventLogger("chrome.browserAction.onClicked.addListener"));

chrome.commands.getAll(eventLogger("chrome.commands.getAll"));

chrome.contextMenus.onClicked.addListener(eventLogger("chrome.contextMenus.onClicked.addListener"));

chrome.cookies.onChanged.addListener(eventLogger("chrome.cookies.onChanged.addListener"));

chrome.debugger.onEvent.addListener(eventLogger("chrome.debugger.onEvent.addListener"));
chrome.debugger.onDetach.addListener(eventLogger("chrome.debugger.onDetach.addListener"));

chrome.downloads.onCreated.addListener(eventLogger("chrome.downloads.onCreated.addListener"));
chrome.downloads.onErased.addListener(eventLogger("chrome.downloads.onErased.addListener"));
chrome.downloads.onChanged.addListener(eventLogger("chrome.downloads.onChanged.addListener"));
chrome.downloads.onDeterminingFilename.addListener(eventLogger("chrome.downloads.onDeterminingFilename.addListener"));

chrome.extension.onRequest.addListener(eventLogger("chrome.extension.onRequest.addListener"));
chrome.extension.onRequestExternal.addListener(eventLogger("chrome.extension.onRequestExternal.addListener"));

chrome.fontSettings.onFontChanged.addListener(eventLogger("chrome.fontSettings.onFontChanged.addListener"));
chrome.fontSettings.onDefaultFontSizeChanged.addListener(eventLogger("chrome.fontSettings.onDefaultFontSizeChanged.addListener"));
chrome.fontSettings.onDefaultFixedFontSizeChanged.addListener(eventLogger("chrome.fontSettings.onDefaultFixedFontSizeChanged.addListener"));
chrome.fontSettings.onMinimumFontSizeChanged.addListener(eventLogger("chrome.fontSettings.onMinimumFontSizeChanged.addListener"));

chrome.gcm.onMessage.addListener(eventLogger("chrome.gcm.onMessage.addListener"));
chrome.gcm.onMessagesDeleted.addListener(eventLogger("chrome.gcm.onMessagesDeleted.addListener"));
chrome.gcm.onSendError.addListener(eventLogger("chrome.gcm.onSendError.addListener"));

chrome.history.onVisited.addListener(eventLogger("chrome.history.onVisited.addListener"))
chrome.history.onVisitRemoved.addListener(eventLogger("chrome.history.onVisitRemoved.addListener"))

chrome.identity.onSignInChanged.addListener(eventLogger("chrome.identity.onSignInChanged.addListener"));;

chrome.idle.onStateChanged.addListener(eventLogger("chrome.idle.onStateChanged.addListener"));

chrome.input.ime.onActivate.addListener(eventLogger("chrome.input.ime.onActivate.addListener"));
chrome.input.ime.onDeactivated.addListener(eventLogger("chrome.input.ime.onDeactivated.addListener"));
chrome.input.ime.onFocus.addListener(eventLogger("chrome.input.ime.onFocus.addListener"));
chrome.input.ime.onBlur.addListener(eventLogger("chrome.input.ime.onBlur.addListener"));
//chrome.input.ime.onInputContextUpdate.addListener(eventLogger("chrome.input.ime.onInputContextUpdate.addListener"));
chrome.input.ime.onKeyEvent.addListener(eventLogger("chrome.input.ime.onKeyEvent.addListener"));
//chrome.input.ime.onCandidateClicked.addListener(eventLogger("chrome.input.ime.onCandidateClicked.addListener"));
//chrome.input.ime.onMenuItemActivated.addListener(eventLogger("chrome.input.ime.onMenuItemActivated.addListener"));
//chrome.input.ime.onSurroundingTextChanged.addListener(eventLogger("chrome.input.ime.onSurroundingTextChanged.addListener"));
chrome.input.ime.onReset.addListener(eventLogger("chrome.input.ime.onReset.addListener"));
chrome.input.ime.onCompositionBoundsChanged.addListener(eventLogger("chrome.input.ime.onCompositionBoundsChanged.addListener"));

chrome.instanceID.onTokenRefresh.addListener(eventLogger("chrome.instanceID.onTokenRefresh.addListener"));

chrome.management.onInstalled.addListener(eventLogger("chrome.management.onInstalled.addListener"));
chrome.management.onUninstalled.addListener(eventLogger("chrome.management.onUninstalled.addListener"));
chrome.management.onEnabled.addListener(eventLogger("chrome.management.onEnabled.addListener"));
chrome.management.onDisabled.addListener(eventLogger("chrome.management.onDisabled.addListener"));

chrome.notifications.onClosed.addListener(eventLogger("chrome.notifications.onClosed.addListener"));
chrome.notifications.onClicked.addListener(eventLogger("chrome.notifications.onClicked.addListener"));
chrome.notifications.onButtonClicked.addListener(eventLogger("chrome.notifications.onButtonClicked.addListener"));
chrome.notifications.onPermissionLevelChanged.addListener(eventLogger("chrome.notifications.onPermissionLevelChanged.addListener"));
chrome.notifications.onShowSettings.addListener(eventLogger("chrome.notifications.onShowSettings.addListener"));

chrome.omnibox.onInputChanged.addListener(eventLogger("chrome.omnibox.onInputChanged.addListener"));
chrome.omnibox.onInputEntered.addListener(eventLogger("chrome.omnibox.onInputEntered.addListener"));
chrome.omnibox.onInputCancelled.addListener(eventLogger("chrome.omnibox.onInputCancelled.addListener"));
chrome.omnibox.onDeleteSuggestion.addListener(eventLogger("chrome.omnibox.onDeleteSuggestion.addListener"));

//chrome.pageAction.onClicked.addListener(eventLogger("chrome.pageAction.onClicked.addListener"));

chrome.permissions.onAdded.addListener(eventLogger("chrome.permissions.onAdded.addListener"));
chrome.permissions.onRemoved.addListener(eventLogger("chrome.permissions.onRemoved.addListener"));

chrome.printerProvider.onGetPrintersRequested.addListener(eventLogger("chrome.printerProvider.onGetPrintersRequested.addListener"));
chrome.printerProvider.onGetUsbPrinterInfoRequested.addListener(eventLogger("chrome.printerProvider.onGetUsbPrinterInfoRequested.addListener"));
chrome.printerProvider.onGetCapabilityRequested.addListener(eventLogger("chrome.printerProvider.onGetCapabilityRequested.addListener"));
chrome.printerProvider.onPrintRequested.addListener(eventLogger("chrome.printerProvider.onPrintRequested.addListener"));

chrome.proxy.onProxyError.addListener(eventLogger("chrome.proxy.onProxyError.addListener"));

chrome.runtime.onStartup.addListener(eventLogger("chrome.runtime.onStartup.addListener"));
chrome.runtime.onInstalled.addListener(eventLogger("chrome.runtime.onInstalled.addListener"));
chrome.runtime.onSuspend.addListener(eventLogger("chrome.runtime.onSuspend.addListener"));
chrome.runtime.onSuspendCanceled.addListener(eventLogger("chrome.runtime.onSuspendCanceled.addListener"));
chrome.runtime.onUpdateAvailable.addListener(eventLogger("chrome.runtime.onUpdateAvailable.addListener"));
chrome.runtime.onBrowserUpdateAvailable.addListener(eventLogger("chrome.runtime.onBrowserUpdateAvailable.addListener"));
chrome.runtime.onConnect.addListener(eventLogger("chrome.runtime.onConnect.addListener"));
chrome.runtime.onConnectExternal.addListener(eventLogger("chrome.runtime.onConnectExternal.addListener"));
chrome.runtime.onMessage.addListener(eventLogger("chrome.runtime.onMessage.addListener"));
chrome.runtime.onMessageExternal.addListener(eventLogger("chrome.runtime.onMessageExternal.addListener"));
chrome.runtime.onRestartRequired.addListener(eventLogger("chrome.runtime.onRestartRequired.addListener"));

chrome.sessions.onChanged.addListener(eventLogger("chrome.sessions.onChanged.addListener"));

chrome.storage.onChanged.addListener(eventLogger("chrome.storage.onChanged.addListener"));

chrome.system.storage.onAttached.addListener(eventLogger("chrome.system.storage.onAttached.addListener"));
chrome.system.storage.onDetached.addListener(eventLogger("chrome.system.storage.onDetached.addListener"));

chrome.tabCapture.onStatusChanged.addListener(eventLogger("chrome.tabCapture.onStatusChanged.addListener"));

chrome.tabs.onCreated.addListener(eventLogger("chrome.tabs.onCreated.addListener"));
chrome.tabs.onUpdated.addListener(eventLogger("chrome.tabs.onUpdated.addListener"));
chrome.tabs.onMoved.addListener(eventLogger("chrome.tabs.onMoved.addListener"));
chrome.tabs.onSelectionChanged.addListener(eventLogger("chrome.tabs.onSelectionChanged.addListener"));
chrome.tabs.onActiveChanged.addListener(eventLogger("chrome.tabs.onActiveChanged.addListener"));
chrome.tabs.onActivated.addListener(eventLogger("chrome.tabs.onActivated.addListener"));
chrome.tabs.onHighlightChanged.addListener(eventLogger("chrome.tabs.onHighlightChanged.addListener"));
chrome.tabs.onHighlighted.addListener(eventLogger("chrome.tabs.onHighlighted.addListener"));
chrome.tabs.onDetached.addListener(eventLogger("chrome.tabs.onDetached.addListener"));
chrome.tabs.onAttached.addListener(eventLogger("chrome.tabs.onAttached.addListener"));
chrome.tabs.onRemoved.addListener(eventLogger("chrome.tabs.onRemoved.addListener"));
chrome.tabs.onReplaced.addListener(eventLogger("chrome.tabs.onReplaced.addListener"));
chrome.tabs.onZoomChange.addListener(eventLogger("chrome.tabs.onZoomChange.addListener"));

chrome.ttsEngine.onSpeak.addListener(eventLogger("chrome.ttsEngine.onSpeak.addListener"));
chrome.ttsEngine.onStop.addListener(eventLogger("chrome.ttsEngine.onStop.addListener"));
chrome.ttsEngine.onPause.addListener(eventLogger("chrome.ttsEngine.onPause.addListener"));
chrome.ttsEngine.onResume.addListener(eventLogger("chrome.ttsEngine.onResume.addListener"));

chrome.webNavigation.onBeforeNavigate.addListener(eventLogger("chrome.webNavigation.onBeforeNavigate.addListener"));
chrome.webNavigation.onCommitted.addListener(eventLogger("chrome.webNavigation.onCommitted.addListener"));
chrome.webNavigation.onDOMContentLoaded.addListener(eventLogger("chrome.webNavigation.onDOMContentLoaded.addListener"));
chrome.webNavigation.onCompleted.addListener(eventLogger("chrome.webNavigation.onCompleted.addListener"));
chrome.webNavigation.onErrorOccurred.addListener(eventLogger("chrome.webNavigation.onErrorOccurred.addListener"));
chrome.webNavigation.onCreatedNavigationTarget.addListener(eventLogger("chrome.webNavigation.onCreatedNavigationTarget.addListener"));
chrome.webNavigation.onReferenceFragmentUpdated.addListener(eventLogger("chrome.webNavigation.onReferenceFragmentUpdated.addListener"));
chrome.webNavigation.onTabReplaced.addListener(eventLogger("chrome.webNavigation.onTabReplaced.addListener"));
chrome.webNavigation.onHistoryStateUpdated.addListener(eventLogger("chrome.webNavigation.onHistoryStateUpdated.addListener"));

//chrome.webstore.onInstallStageChanged.addListener(eventLogger("chrome.webstore.onInstallStageChanged.addListener"));
//chrome.webstore.onDownloadProgress.addListener(eventLogger("chrome.webstore.onDownloadProgress.addListener"));

chrome.windows.onCreated.addListener(eventLogger("chrome.windows.onCreated.addListener"));
chrome.windows.onRemoved.addListener(eventLogger("chrome.windows.onRemoved.addListener"));
chrome.windows.onFocusChanged.addListener(eventLogger("chrome.windows.onFocusChanged.addListener"));
