import User, {
  team,
  createUser,
  getTeamSize,
  getTeamIntroductions,
} from "./basic_export.js";

const newUser = new User("Ravi", "Full Stack Developer");
const createdUser = createUser("Priya", "Project Manager");

console.log(newUser.introduce());
console.log(createdUser.introduce());
console.log(`Team size: ${getTeamSize()}`);

team.forEach((member) => {
  console.log(member.introduce());
});

console.log(getTeamIntroductions());
