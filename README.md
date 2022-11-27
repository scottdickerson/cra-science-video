# Special build instructions

We can choose to build the index.html to be viewed directly off the local file system for speed in loading the videos to prevent whitescreens on transitions

```
export PUBLIC_URL=.
npm run build
```

Then start chrome with this extra parameter:

`chrome.exe --allow-file-access-from-files C:\Users\admin\Documents\GitHub\cra-science-video\build\index.html`

If the app can actually load the videos quickly enough without triggering a flash, then we can just build and serve them through the normal `serve` command
