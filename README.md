1. Register in 8thwall and create an application, visit `https://console.8thwall.com/quick-start-web` for details
2. Download and install NPM `https://www.npmjs.com/get-npm`
3. Add your 8thwall application key to `/src/index.html` - `<script defer src="//apps.8thwall.com/xrweb?appKey=XXXXXXXXXXXXXXXXXX"></script>`
4. Go to `/serve` and run `npm install`
5. Return to root `/mezcalport` folder and run with `./serve/bin/serve -d ./src -p 8080`