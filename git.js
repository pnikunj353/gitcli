var github = require('octonode');
var simpleGit = require('simple-git');
var client = github.client({
  username: '<USERNAME',
  password: '<PASSWORD>'
});
var ghme   = client.me();
client.post('/user/repos', {}, function (err, status, body, headers) {
  ghme.repo({
    "name": process.argv[2]
  }, function () {
      require('simple-git')()
     .init()
     .add('./*')
     .commit("first commit!")
     .addRemote('origin', 'git@github.com:akashnimare/'+ process.argv[2] + '.git')
     .push('origin', 'master');

  } );
});
