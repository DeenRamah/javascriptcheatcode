const d ={
  ...data,
  ['user']: {
    ...data['user'],
    isLoggedIn : false,
  }
}

console.log(d)
