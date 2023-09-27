import React, { useState, useEffect } from "react";
import Sidebar from "../components/sidebar";

export default function Contacts() {
  const [contactsData, setContactsData] = useState([]);
  const getAllContacts = async () => {
    try {
      const response = await fetch("http://localhost:3001/select_all_contacts");
      const data = await response.json();
      setContactsData(data);
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    getAllContacts();
  }, []);
  const deletContact = async (id) => {
    try {
      await fetch(`http://localhost:3001/delete_contact_details/${id}`, {
        method: "DELETE",
      });
      setContactsData(contactsData.filter((contact) => contact.id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <Sidebar />
      <section className="is-hero-bar">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          <h1 className="title">Contact information</h1>
        </div>
      </section>
      <section className="section main-section">
        <div className="card has-table">
          <header className="card-header">
            <p className="card-header-title">
              <span className="icon">
                <i className="mdi mdi-account-multiple"></i>
              </span>
              Contact Information
            </p>
          </header>
          <div className="card-content">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Surname</th>
                  <th>Email</th>
                  <th>Contact No</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {contactsData.map((contact) => (
                  <tr key={contact.id}>
                    <td className="image-cell">
                      <div className="image">
                        <span className="icon">
                          <i className="mdi mdi-account-circle"></i>
                        </span>
                      </div>
                    </td>
                    <td data-label="Name">{contact.name}</td>
                    <td data-label="Company">{contact.surname}</td>
                    <td data-label="email">{contact.email}</td>
                    <td data-label="contact">{contact.contact_number}</td>
                    <td className="actions-cell">
                      <div className="buttons right nowrap">
                        <button
                          className="button small red --jb-modal"
                          data-target="sample-modal"
                          type="button"
                          onClick={() => {
                            if (
                              window.confirm(
                                "Are you sure you want to delete this contact?"
                              )
                            ) {
                              deletContact(contact.id);
                            }
                          }}
                        >
                          <span className="icon">
                            <i className="mdi mdi-trash-can"></i>
                          </span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
