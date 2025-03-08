chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.url) {
      //  Здесь НУЖНО добавить логику определения безопасности сайта!
      //  Это может быть, например, проверка URL по списку известных "плохих" сайтов,
      //  или использование какого-либо API для анализа сайта.
  
      //  Для примера, просто случайное определение статуса:
      const statuses = ['safe', 'warning', 'danger', 'unknown'];
      const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
  
      chrome.storage.sync.set({ siteStatus: randomStatus });
    }
  });
  