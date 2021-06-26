export class User {
  constructor(
    public id = -1,
    public username = '',
    public firstName = '',
    public lastName = '',
    public email = '',
    public role = 'Admin'
  ){}
}
