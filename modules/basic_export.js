export default class User {
  constructor(name, role) {
    this.name = name;
    this.role = role;
  }

  introduce() {
    return `Hi, I am ${this.name}, working as ${this.role}.`;
  }
}

export const team = [
  new User("Arun", "Frontend Developer"),
  new User("Meena", "Backend Developer"),
  new User("Kavi", "UI Designer"),
];

export function createUser(name, role) {
  return new User(name, role);
}

export function getTeamSize() {
  return team.length;
}

export function getTeamIntroductions() {
  return team.map((member) => member.introduce());
}
