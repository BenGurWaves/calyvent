self.addEventListener('push', event => {
  const data = event.data?.json() || { title: 'New form!', body: 'Someone submitted the form' };
  self.registration.showNotification(data.title, {
    body: data.body,
    icon: '/Calyvent Logo possiblly.jpg',
    badge: '/Calyvent Logo possiblly.jpg',
    tag: 'form-submission'
  });
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  clients.openWindow('/admin.html'); // optional: opens your admin page
});
