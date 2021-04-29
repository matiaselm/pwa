'use strict';
window.addEventListener('load', async() => {
    if ('serviceWorker' in navigator) {
        try {
            await navigator.serviceWorker.register('./sw.js');
            console.log('Service Worker registered')
        } catch (e) {
            console.error(e.message)
        }
    }
});