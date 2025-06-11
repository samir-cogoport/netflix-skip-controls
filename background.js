chrome.runtime.onStartup.addListener(() => {
    chrome.storage.local.set({
        autoClickNext: true,
        autoClickSkipRecaps: true,
        autoClickSkip: true,
    });
});

chrome.webNavigation.onHistoryStateUpdated.addListener((details) => {
    chrome.scripting.executeScript({
        target: { tabId: details.tabId },
        files: ['contentScript.js'],
    });
});

chrome.alarms.create('keepAlive', { periodInMinutes: 0.1 });
chrome.alarms.onAlarm.addListener(() => {});
