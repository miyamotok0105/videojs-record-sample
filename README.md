

This Repo is simple sample which video recorder.

I used videojs-record repo.


https://github.com/collab-project/videojs-record
thank you Thijs Triemstra.

```
node v12.16.3
npm 6.14.4
Python 3.7.1
```

```
# Install library
npm i browser-workarounds.js  --save
npm i video.js --save
npm install videojs-record --save

# for serving test
npm install -g serve

# Run app by webpack-dev-server
serve

normal sample

access your browzer.
http://localhost:5000/index_react

react sample
http://localhost:5000/index_react

vue sample
http://localhost:5000/index_vue

# upload app
npm run start

http://localhost:8080/index_react.html
http://localhost:8080/index_vue.html
```

# Run app by Flask

static, templates folder is based flask rules.
    
Copy node_modules folder to static folder, Before run flask app.
    

```
python app.py

http://127.0.0.1:5000/
```



