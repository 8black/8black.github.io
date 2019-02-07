const http = require('http');
const fs = require('fs');


http.createServer(function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (req.url == "/postdata") {
        let postData = "";
        req.on('data',function(postDataChunk){
            　postData += postDataChunk;
    　　});
    　　req.on('end',function(){
            let filedata = fs.readFileSync('../js/conf.js').toString().split("=")[1]
            filedata = JSON.parse(filedata)
            let params = JSON.parse(postData.toString())
            let list =[]
            if(params.listname=="homelist"){
                list = filedata.homelist
            }else if(params.listname=="uilist"){
                list = filedata.uilist
            }else if(params.listname=="illustrationlist"){
                list = filedata.illustrationlist
            }else if(params.listname=="essaylist"){
                list = filedata.essaylist
            }
            if(list.length >0){
                list[params.id].like+=1
                let header = "let SETTING="
                let string = header+JSON.stringify(filedata, null, "\t");
                fs.writeFileSync('../js/conf.js', string)
            　　res.end("success");
            }else{
                res.end("error");
            }

    　　});
    }
}).listen(8080, function () {
    console.log("http://localhost:8080");
});