export interface GithubUser{
  Email:string,
  Name:string
}
export interface ReduxAction{
  type:string,
  payload:any
}
export interface UserState{
  User:GithubUser
}
