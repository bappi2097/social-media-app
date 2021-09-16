import database from "./firebase";

export const addUser = (data) => {
    console.log(database.ref("/users").push(data));
};
