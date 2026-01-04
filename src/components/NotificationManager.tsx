import { useEffect, useState } from 'react';
import { Bell, BellOff } from 'lucide-react';
import { getNogaDate } from '../utils/nogaCalendar';
import { EUDORIA_EVENTS } from '../utils/events';

const NotificationManager = () => {
  const [permission, setPermission] = useState<NotificationPermission>('default');

  useEffect(() => {
    if ('Notification' in window) {
      setPermission(Notification.permission);
    }
  }, []);

  const requestPermission = async () => {
    if (!('Notification' in window)) {
      alert('This browser does not support desktop notifications');
      return;
    }

    const result = await Notification.requestPermission();
    setPermission(result);

    if (result === 'granted') {
      checkForEvents();
    }
  };

  const checkForEvents = () => {
    const today = new Date();
    const nogaDate = getNogaDate(today);
    
    // Find events for today
    const todaysEvents = EUDORIA_EVENTS.filter(
      e => e.month === nogaDate.month && e.day === nogaDate.day
    );

    if (todaysEvents.length > 0) {
      todaysEvents.forEach(event => {
        new Notification(`Eudoria Calendar: ${event.title}`, {
          body: `Today is ${event.title}! (Year ${nogaDate.year})`,
          icon: '/pwa-192x192.png' // Will use placeholder if missing
        });
      });
    }
  };

  // Check for events on load if already granted
  useEffect(() => {
    if (permission === 'granted') {
      checkForEvents();
    }
  }, [permission]);

  if (permission === 'granted') {
    return null; // Invisible if already set up
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={requestPermission}
        className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-3 rounded-full shadow-lg hover:bg-indigo-700 transition-all animate-bounce"
      >
        {permission === 'denied' ? <BellOff size={20} /> : <Bell size={20} />}
        <span className="font-medium">
          {permission === 'denied' ? 'Notifications Blocked' : 'Enable Event Reminders'}
        </span>
      </button>
    </div>
  );
};

export default NotificationManager;
