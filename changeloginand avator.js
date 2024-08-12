const d ={
  ...data,
  ['user']:{
    ...data['user'],
    isLoggedIn : false,
    avator : 'Deen'
  }
}
console.log(d)
