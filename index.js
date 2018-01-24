const token = 'Your token here'
// fetch('https://api.github.com/repos/jquery/jquery/commits')
//   .then(res => res.json()) //shorthand for saying "give me the body of the response parsed as JSON"
//   .then(json => console.log(json));


fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
