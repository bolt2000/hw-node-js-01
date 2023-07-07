const contacts = require("./contacts");
const argv = require("yargs").argv;

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const all = await contacts.listContacts();
      return console.table(all);

    case "get":
      const getId = await contacts.getContactById(id);
      return console.log(getId);

    case "add":
      const newContact = await contacts.addContact({ name, email, phone });
      return console.log(newContact);

    case "remove":
      const delContact = await contacts.removeContact(id);
      return console.log(delContact);

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

invokeAction(argv);
