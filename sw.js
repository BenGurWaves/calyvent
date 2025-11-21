// Service Worker – this is what shows the notification even when the tab is closed
self.addEventListener('push', event => {
  const data = event.data?.json() || { title: 'New message!', body: 'You have a new message' };
  self.registration.showNotification(data.title, {
    body: data.body,
    icon: '/Calyvent Logo possiblly.jpg',   // you can change this to your logo later
    badge: '/Calyvent Logo possiblly.jpg'
  });
});
