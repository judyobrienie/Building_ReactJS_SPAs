import React from 'react';

class ContactForm extends React.Component {
    render() {
        return (
            <tr>
                <td>
                    <input type="text" className="form-control" />
                </td>
                <td>
                    <input type="text" className="form-control" />
                </td>
                <td>
                    <input type="text" className="form-control" />
                </td>
                <td>
                    <input type="button" className="btn btn-primary" value="Add" />
                </td>
            </tr>
        )
    }
}


class Contact extends React.Component {
    render() {
        return (
            <tr >
                <td>
                    {this.props.contact.name}
                </td>
                <td>
                    {this.props.contact.address}
                </td>
                <td>
                    {this.props.contact.phone_number}
                </td>
            </tr>
        );
    }
}




class ContactList extends React.Component {
    render() {
        var contactRows = this.props.contacts.map(function(contact) {
            return <Contact key={contact.name} contact={contact}/>;
        });
        return (
            <tbody >
                {contactRows}
                <ContactForm contacts={this.props.contacts}/>
            </tbody>
        );
    }
}

class ContactsTable extends React.Component {
    render() {
        return (
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Phone Number</th>   
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
              <ContactList contacts={this.props.contacts} />
            </table>
        );
    }
}

class ContactsApp extends React.Component {
    render() {
        return (
            <div>
                <h1>Contact List.</h1>
                <ContactsTable contacts={this.props.contacts} /> 
                
            </div>
        );
    }
}

export default ContactsApp;
