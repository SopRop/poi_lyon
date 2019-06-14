# Notes à destination des développeurs

Clone the repository.

## Back-end

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