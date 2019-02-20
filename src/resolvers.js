import { users } from "./db";

const resolvers = {
  Query: {
    user: (parent, { id }, context, info) => {
        return users.find(user => user.id == id);
      },
      users: (parent, args, context, info) => {
        return users;
      }
  },
  Mutation: {
      createUser:(parent, { id, name, email, age }, context, info) => {
          id = +id
        const newUser = { id, name, email, age };
  
        users.push(newUser);
  
        return newUser;
      },
      deleteUser: (parent, { id }, context, info) => {
          console.log('>>>>>: ', users, id, typeof id)
        const userIndex = users.findIndex(user => user.id == id);
        console.log('>>>>userIndex: >: ', userIndex)
  
        if (userIndex === -1) throw new Error("User not found.");
  
        const deletedUsers = users.splice(userIndex, 1);
  
        return deletedUsers[0];
      }
  }
};

export default resolvers;