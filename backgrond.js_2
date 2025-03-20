chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.url) {
      //  Здесь НУЖНО добавить логику определения безопасности сайта!
      //  Это может быть, например, проверка URL по списку известных "плохих" сайтов,
      //  или использование какого-либо API для анализа сайта.
  
      //  Для примера, просто случайное определение статуса:
      const statuses = ['safe', 'warning', 'danger', 'unknown'];
      const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
  
      chrome.storage.sync.set({ siteStatus: randomStatus });
  if (changeInfo.status === 'complete' && tab.url) {
    //  Здесь НУЖНО добавить логику определения безопасности сайта!
    //  Это может быть, например, проверка URL по списку известных "плохих" сайтов,
    //  или использование какого-либо API для анализа сайта.
    const statuses = {
      safe: 'safe',
      warning: 'warning',
      danger: 'danger',
      unknown: 'unknown',
    };

    const websites = {
      'https://ya.ru': statuses.safe,
      'https://gosuslugi.ru/': statuses.safe,
      'https://www.gosuslugi.ru/': statuses.safe,
      'https://vk.com': statuses.warning,
      'https://itorrents-igruha.org/': statuses.warning,
      'https://dnevnik.ru': statuses.safe,
      'https://edu.skysmart.ru': statuses.safe,
      'https://gdz.ru': statuses.warning,   
      'https://install-browser.ru/?': statuses.warning,
      'https://funpay.com': statuses.warning,  
    }
  });
  

    const siteStatus = websites[new URL(tab.url).origin] ?? statuses.unknown;

    chrome.storage.sync.set({ siteStatus  });
  }
});
