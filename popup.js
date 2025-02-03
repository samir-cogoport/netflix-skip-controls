const nextCheckbox = document.getElementById("toggleNext");
const skipCheckbox = document.getElementById("toggleSkip");
const recapsCheckbox = document.getElementById("toggleRecaps");


if (!chrome.storage) {
    console.error("chrome.storage is undefined. Ensure 'storage' permission is in manifest.json.");
} else {
    
    chrome.storage.local.get(["autoClickNext", "autoClickSkip", "autoClickSkipRecaps"], (data) => {
        nextCheckbox.checked = !!data.autoClickNext; 
        skipCheckbox.checked = !!data.autoClickSkip;
        recapsCheckbox.checked = !!data.autoClickSkipRecaps;
    });

    
    nextCheckbox.addEventListener("change", () => {
        chrome.storage.local.set({ autoClickNext: nextCheckbox.checked });
    });

    
    skipCheckbox.addEventListener("change", () => {
        chrome.storage.local.set({ autoClickSkip: skipCheckbox.checked });
    });

    
    recapsCheckbox.addEventListener("change", () => {
        chrome.storage.local.set({ autoClickSkipRecaps: recapsCheckbox.checked });
    });
}
