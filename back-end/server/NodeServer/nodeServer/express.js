var express = require('express');
var bodyParser = require('body-parser')
var mainapp = express();
mainapp.use(function(req,res,next){
    try{
        if (req.url.substr(0, 18).indexOf("socket.io")>-1){
            //console.log("SOCKET.IO", req.url)
            return proxy.web(req, res, { target: 'wss://localhost:4567', ws: true }, function(e) { 
            //console.log('PROXY ERR',e)
            });
        } else {
            var target = proxyRules.match(req);
            if (target) {
                //console.log("TARGET", target, req.url)
                return proxy.web(req, res, {
                    target: target
                }, function(e) { 
                //console.log('PROXY ERR',e)
                });
            } else {
                res.sendStatus(404);
            }
        }
    } catch(e){
        res.sendStatus(500);
    }
});
mainapp.use(bodyParser.json());
mainapp.use(bodyParser.urlencoded({ extended: false }));