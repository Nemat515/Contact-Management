import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  //const [contacts, setContacts] = useState([]);
  const contacts = [
    {
      id: "1",
      name: "Nemat",
      email: "zadrannemat0@gmail",
    },
  ];

  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
