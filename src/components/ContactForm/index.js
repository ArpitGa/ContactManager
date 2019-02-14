import React, { Component } from 'react';

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.onClickhandler = this.onClickhandler.bind(this);
    }

    onClickhandler(name, number) {
        this.props.onSubmitHandler(name, number);
    }

    render() { 
        return(
        <form className='contact-form'>
            <div>{this.props.formType}</div>
            <div className="form-group">
                <input type="text" className="form-control" ref="contactName" placeholder={this.props.placeholderName} defaultValue={this.props.editName}/>
            </div>
            <div className="form-group">
                <input type="text" className="form-control" ref="contactNumber" placeholder={this.props.placeholderNumber} defaultValue={this.props.editNumber}/>
            </div>
            <button className="btn btn-primary" onClick={(e) => {
                e.preventDefault();
                this.onClickhandler(this.refs.contactName.value, this.refs.contactNumber.value);
                this.refs.contactName.value = '';
                this.refs.contactNumber.value = '';
            }}>{this.props.btnText}</button>
        </form>
    )
    }
}

export default ContactForm;