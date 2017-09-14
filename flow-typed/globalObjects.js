// @flow
declare var age:number;

declare type GenderObject = "male" | "female"

declare type Student = {
  name:string,
  age:string,
  dob:?string,
  tel?:string,
  gender:GenderObject
}
