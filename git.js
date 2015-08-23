var github = require('octonode');
var simpleGit = require('simple-git');
var user_login = {
  username: '<USERNAME',
  password: '<PASSWORD>'
};
var client = github.client(user_login);
var ghme   = client.me();
client.post('/user/repos', {}, function (err, status, body, headers) {
  ghme.repo({
    "name": process.argv[2]
  }, function () {
      require('simple-git')()
     .init()
     .add('./*')
     .commit("first commit!")
     .addRemote('origin', 'git@github.com:' + user_login.username + '/' + process.argv[2] + '.git')
     .push('origin', 'master');

  } );
});

