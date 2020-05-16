const http = require('http');

const printUserNickname = userId => {
    const url = `http://127.0.0.1:3000/users/${userId}`;
    http.get(url, res => {
        res.setEncoding('utf8');
        let body = '';
        res.on('data', data => {
          body += data;
        });
        res.on('end', () => {
          body = JSON.parse(body);
          console.log(body)
          // console.log(body.profile.nickname); // TypeError
          console.log('Nickname:' + body.profile?.nickname)
        });
      });
}

printUserNickname(1);
printUserNickname(2);

