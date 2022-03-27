chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: 'volume-down-01',
        title: 'ボリュームを下げる(x0.1)',
        contexts: ['all']
    });
    chrome.contextMenus.create({
        id: 'volume-down-02',
        title: 'ボリュームを下げる(x0.2)',
        contexts: ['all']
    });
    chrome.contextMenus.create({
        id: 'volume-down-04',
        title: 'ボリュームを下げる(x0.4)',
        contexts: ['all']
    });
    chrome.contextMenus.create({
        id: 'volume-down-06',
        title: 'ボリュームを下げる(x0.6)',
        contexts: ['all']
    });
    chrome.contextMenus.create({
        id: 'volume-down-08',
        title: 'ボリュームを下げる(x0.8)',
        contexts: ['all']
    });

    chrome.contextMenus.create({
        id: 'volume-up-15',
        title: 'ボリュームを上げる(x1.5)',
        contexts: ['all']
    });
    chrome.contextMenus.create({
        id: 'volume-up-25',
        title: 'ボリュームを上げる(x2.5)',
        contexts: ['all']
    });
    chrome.contextMenus.create({
        id: 'volume-up-35',
        title: 'ボリュームを上げる(x3.5)',
        contexts: ['all']
    });
    chrome.contextMenus.create({
        id: 'volume-up-45',
        title: 'ボリュームを上げる(x4.5)',
        contexts: ['all']
    });
});

chrome.contextMenus.onClicked.addListener((info, tabs) => {
    chrome.tabs.sendMessage(
        tabs.id,
        info.menuItemId
    );
});
