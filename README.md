## My LIFF APP 
A PoC for LINE Front-end Framework (LIFF) integration

## HowTo
Local verification
- `yarn dev`

Deployment
- https://developers.line.biz/en/docs/liff/trying-liff-app/#deploy-to-server
- `yarn build`
- `netlify env:set VITE_LIFF_ID "YOUR_LIFF_ID"`
- `netlify deploy`
- `netlify deploy --prod`

## LIFF APIs
- LIFF Playground: https://liff-playground.netlify.app/
- API: `liff.scanCodeV2`