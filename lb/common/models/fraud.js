'use strict';
var watson = require('watson-developer-cloud');
var fs = require('fs');

module.exports = function(Fraud) {
  Fraud.image = function(url, cb) {
    var visual_recognition = watson.visual_recognition({
      api_key: 'edf203ce1c2f1bb46838c659d9d126765e2072e2',
      version: 'v3',
      version_date: '2016-05-20'
    });
    
    var params = {
      images_file: fs.createReadStream(url)
    };
    
    visual_recognition.classify(params, function(err, res) {
      if (err) console.log(err);
      else{
        console.log(JSON.stringify(res, null, 2));
        cb(null, res);
      }
    });
  };
  Fraud.remoteMethod(
    'image',
    {
      accepts: [{arg: 'url', type: 'string'}],
      returns: {arg: 'fraud', type: 'string'},
      http: {path:'/receive-image', verb: 'post'}
    }
  );
};
