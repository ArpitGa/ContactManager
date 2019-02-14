import React, { PureComponent, Fragment } from 'react';

class ContactList extends PureComponent {
    constructor(props) {
        super(props);
        this.getContactListBody = this.getContactListBody.bind(this);
        this.getContactListHeading = this.getContactListHeading.bind(this);
    }

    getContactListBody() {
        const { contactArr, fields } = this.props;
        return contactArr.map((item, index) => {
            return (
                item &&
                <tbody>
                    <tr>
                        <td>{index + 1}</td>
                        {fields.map(f => <td>{item[f]}</td>)}
                        <td><button className="btn btn-primary" onClick={() => this.props.editContact(item['number'])}>Edit</button></td>
                        <td><button className="btn btn-primary" onClick={() => this.props.removeContact(item['number'])}>Delete</button></td>
                    </tr>
                </tbody>
            )
        })
    }

    getContactListHeading() {
        const { fields } = this.props;
        return (
            <thead className='thead-dark'>
                <tr>
                    <th>SR NO</th>
                    {fields.map(f => <th>{f.toUpperCase()}</th>)}
                </tr>
            </thead>
        )
    }

    render() {
        return (
            <Fragment>
                <table className='table table-striped'>
                    {this.getContactListHeading()}
                    {this.getContactListBody()}
                </table>
            </Fragment>
        );
    }
}

export default ContactList;