if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/vuetodopwa/sw.js', { scope: '/vuetodopwa/' })})}