document.addEventListener('DOMContentLoaded', () => {
    chrome.storage.sync.get('siteStatus', (data) => {
      const siteStatus = data.siteStatus || 'unknown'; // По умолчанию - неизвестно
  
      const container = document.getElementById('container');
      const message = document.getElementById('message');
  
      switch (siteStatus) {
        case 'safe':
          container.classList.add('safe');
          message.textContent = "На данном сайте проверенная информация.";
          break;
        case 'warning':
          container.classList.add('warning');
          message.textContent = "Сайт может быть подозрительным или содержать неточную информацию.";
          break;
        case 'danger':
          container.classList.add('danger');
          message.textContent = "Сайт может содержать ложную информацию или быть небезопасным.  Проверьте информацию в официальных источниках: [ССЫЛКА ЗАМЕНИТЬ]"; // Вставьте ссылку
          break;
        default:
          message.textContent = "Не удалось определить статус безопасности сайта.";
      }
    });
  });
  