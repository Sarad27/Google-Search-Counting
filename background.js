console.log('background Runing')

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab){
    let clicked = 'success';
    chrome.tabs.sendMessage(tab.id, clicked);
}