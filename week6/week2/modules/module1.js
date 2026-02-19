const users = [
  { id: 1, name: "Ravi", role: "student", active: true },
  { id: 2, name: "Anil", role: "admin", active: true },
  { id: 3, name: "Suman", role: "student", active: false }
];
//Get only active users
let active = users.filter(user => user.active)
//  -> Extract names of active users
let names = users.filter(user => user.active).map(user => user.name)
// -> Check if any admin exists
let admin = users.filter(user => user.role === "admin")
//find user by id
let user = users.find(user => user.id === id);
//Deactivate a user immutably
let deactivate_User = id =>
  users.map(u => u.id === id ? { ...u, active: false } : u);

export {active,names,admin,user,deactivate_User}
