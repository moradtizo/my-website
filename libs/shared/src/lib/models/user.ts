export interface User {
  _id?: string;
  name?: string,
  email?: string,
  password?: string,
  address?: string,
  city?: string,
  country?: string,
  phone?: string,
  isAdmn?: boolean,
  isEditing?: boolean,
}
export interface ResUser {
  success?: boolean;
  users: User[]
}
