import React from 'react';
import './App.css'

class SelectBox extends React.Component {
    render() {
        return (
            <div className="col-md-10">
                <input type="text" placeholder="Search" />
                Sort by:
            <select>
                    <option value="name">Alphabetical</option>
                    <option value="age">Newest</option>
                </select>
            </div>
        );
    }
}


// TODO (PhoneItem component)
class PhoneItem extends React.Component {
    render() {
        let list = `phones/${this.props.phone.id}` /*creates link to all phone*/
        let image = `/phoneSpecs/${this.props.phone.imageUrl}`  /*creates link to all images*/
        return (
           <li className='thumbnail phone-listing'>
                <a href={list} className='thumb'>
                    <img src={image} alt={this.props.phone.name} />
                </a>
                <a href={list}>{this.props.phone.name}</a>
                <p>{this.props.phone.snippet}</p>
            </li>
        )
    }
}


class FilteredPhoneList extends React.Component {
    render() {
        var displayedPhones = this.props.phones.map(function (phone) {
            return <PhoneItem key={phone.id} phone={phone} />;
        });
        return (
            <div className="col-md-10">
                <ul className="phones">
                    {displayedPhones}
                </ul>
            </div>
        );
    }
}

class PhoneCatalogueApp extends React.Component {
    render() {
        return (
            <div className="view-container">
                <div className="view-frame">
                    <div className="container-fluid">
                        <div className="row">
                            <SelectBox />
                            <FilteredPhoneList phones={this.props.phones} /> {/*//renders the phone list to screen*/}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default PhoneCatalogueApp;
