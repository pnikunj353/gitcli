'use strict';
var github = require('octonode');
var simpleGit = require('simple-git');

module.exports= function () {
 var user_login = {
  username: process.argv[2],
  password: process.argv[3]
};
var client = github.client(user_login);
var ghme   = client.me();
client.post('/user/repos', {}, function (err, status, body, headers) {
  ghme.repo({
    "name": process.argv[4]
  }, function () {
      require('simple-git')()
     .init()
     .add('./*')
     .commit(process.argv[5])
     .addRemote('origin', 'git@github.com:' + process.argv[2] + '/' + process.argv[4] + '.git')
     .push('origin', 'master');

  });
});

};


