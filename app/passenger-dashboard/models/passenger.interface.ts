export interface Child {
  name: string,
  age: number
}

// we can use | null when an attribute is optional
// or use ? beside the attribute to convert it into optional
export interface Passenger {
  id: number,
  fullname: string,
  checkedIn: boolean,
  checkInDate: number | null,
  children?: Child[]
}