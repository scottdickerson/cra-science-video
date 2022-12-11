# Special build instructions

We can choose to build the index.html to be viewed directly off the local file system for speed in loading the videos to prevent whitescreens on transitions

```
export PUBLIC_URL=.
npm run build
```

Then start chrome with this extra parameter:

`chrome.exe --kiosk --start-fullscreen --autoplay-policy=no-user-gesture-required --disable-pinch --allow-file-access-from-files file:///C:/Users/admin/Documents/GitHub/cra-science-video/build/index.html`

If the app can actually load the videos quickly enough without triggering a flash, then we can just build and serve them through the normal `serve` command
