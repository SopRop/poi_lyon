# POIT Lyon

Check and locate some of Lyon's points of interest.  
Data : [Points d'intérêt touristiques de la Métropole de Lyon](https://data.beta.grandlyon.com/fr/accueil)

## Back-end

- NodeJS
- ExpressJS

Install:
```
cd back
npm install
```

Start:
```
npm start
```

To add routes, follow example:  
> app.get('/api/v1/poi/:code_postal'  

(Install and use Postman to check if the paths are correct.)
  

## Front-end

- Ionic 4
- Cordova
- Angular 7

Install:
```
cd poit-lyon
npm install -g ionic cordova
npm install
```

Start:
```
ionic serve
```

Manage the routes in the Services directory.  
You will need to add interfaces if you add routes, check Interfaces directory.

To geotag and add markers, the map Leaflet was used.  
Check [documentation](https://leafletjs.com/reference-1.5.0.html) to add options.

![alt text](https://i.ibb.co/Msc9ryz/cap.jpg "Capture application")