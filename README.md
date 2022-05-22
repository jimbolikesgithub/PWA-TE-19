# PWA-TE-19

--- An interesting and very challenging application. Nonetheless, it was very fun
seeing how a PWA works, and how one can go about installing a web page onto their 
local device (computer, in this case; via prompt). Asset caching is not the easiest
thing in the world in all honesty. Nevertheless, once it works, it's good to look
back and asses how far you've come. ---

package.json 
----------
* `npm i`
    - Add the following scripts: 
        * `"start:dev": "concurrently \"cd server && npm run server\" \"cd client && npm run dev\""`
        * `"start": "npm run build && cd server && node server.js"`
        * `"server": "cd server nodemon server.js --ignore client"`
        * `"build": "cd client && npm run build"`
        * `"install": "cd client && npm install"`
        * `"client": "cd client && npm start"`

client/
----------
* Go into the `src/` folder
    - Make changes to the following files:
        * `database.js`
            - Add logic to a method that accepts some content and adds it to the database
            - Add logic for a method that gets all the content from the database
        * `install.js`
            - Add an event handler to the `beforeinstallprompt` event
            - Implement a click event handler on the `butInstall` element
            - Add a handler for the `appinstalled` event
            
* Make changes to the `src-sw.js` file
    - Implemented asset caching
* Make changes to the `webpack.config.js` file
    - Added and configured workbox plugins for a service worker and manifest file
    - Added CSS loaders and babel to webpack


+ note: Make sure to run `npm run build` and `npm run start:dev` after specific changes, such as ones made to the database.

GitHub 
----------
<br/>

Screenshot - 
----------


Acknowledgements
----------------
AskBCS
Seamona Stewart (Host)
