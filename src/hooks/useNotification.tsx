import { useState, useCallback } from 'react';

export const useNotification = () => {
  const [notifications, setNotifications] = useState<string[]>([]);

  const showNotification = useCallback((message: string) => {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Remove notification after animation
    setTimeout(() => {
      if (document.body.contains(notification)) {
        notification.remove();
      }
    }, 3000);
  }, []);

  return { showNotification };
};