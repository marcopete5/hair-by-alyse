import React, { Component } from 'react';
import Navbar from './Navbar';
import {connect} from 'react-redux';
import {addQuote} from './redux';

class Quote extends Component {
    constructor(){
        super()

        this.state = {
            dates: [{date: ''}],
            events: [{event: ''}],
            fName: '',
            lName: '',
            length: '',
            thickness: 'Average thickness',
            hasExtension: 'no',
            extension: '',
            style: [],
            time: '',
            needsTravel: 'no',
            travel: '',
            cell: '',
            email: '',
            checked: false,
            comments: ''
        }
    }

    handleDateEventChange = i => e => {
        if (e.target.name === 'date'){
            const newDate = this.state.dates.map((day, si) => {
                if (i !== si) return day;
                return { ...day, date: e.target.value };
              });
            this.setState({ dates: newDate });
        }
        if (e.target.name === 'event'){
            const newEvent = this.state.events.map((occasion, si) => {
                if (i !== si) return occasion;
                return { ...occasion, event: e.target.value };
              });
            this.setState({ events: newEvent });
        }
        
    }

    addDate = () => {
        this.setState(prevState => {
            return {
                dates: [...prevState.dates, {date: ''}]
            }
        })
    }
    addEvent = () => {
        this.setState(prevState => {
            return {
                events: [...prevState.events, {event: ''}]
            }
        })
    }
    subDate = () => {
        if(this.state.dates.length > 1){
            this.setState(prevState => {
                return {
                    dates: prevState.dates.slice(0, -1)
                }
            })
        }
    }
    subEvent = () => {
        if(this.state.events.length > 1){
            this.setState(prevState => {
                return {
                    events: prevState.events.slice(0, -1)
                }
            })
        }
    }
    handleStyles = e => {
        this.setState({style: e.target.value})
    }
    handleThickness = e => {
        this.setState({thickness: e.target.value})
    }
    handleChange = e => {
        let {value, checked, type, name} = e.target;
        const itemValue = type === 'checkbox' ? checked : value;

        if (type !== 'checkbox'){
            this.setState({[name]: itemValue })
        }else if (type === 'checkbox' && checked === true) {
            this.setState(prevState => {
                return {
                    checked: itemValue, 
                    style: [...prevState.style, value] 
                }})
        } else if (type === 'checkbox' && checked === false) {
            this.setState(prevState => {
                prevState.style.splice((prevState.style.indexOf(value)), 1)
                return {
                    checked: itemValue,
                    style: prevState.style
                }})
            
        }
    }
    submitQuote = e => {
        e.preventDefault()
        this.props.addQuote(this.state)
    }

    email = () => {
        
    }

    
    render() {

        const dateInputs = this.state.dates.map((dateInfo, i) => {
            return <div key={i}>
                <input type="date" name="date" value={dateInfo.date} onChange={this.handleDateEventChange(i)} />
                <button onClick={this.addDate}>+</button>
                <button onClick={this.subDate}>-</button>
            </div>
        })
        const eventInputs = this.state.events.map((occasion, i) => {
            return <div key={i}>
                <input type="text" placeholder='Occasion' name="event" value={occasion.event} onChange={this.handleDateEventChange(i)} />
                <button onClick={this.addEvent}>+</button>
                <button onClick={this.subEvent}>-</button>
            </div>
        })
        return (
            <div>
                <div id="adminNavbar">
                   <Navbar />
                </div>
                <div id='quoteDiv'>
                    <h1>Get Your Specific Hair Quote</h1>
                    <i>To receive a quote for your event, answer the questions below. I will respond via email within 1 business day.</i>

                    <ol>
                        <li>Full Name</li>
                        <input type="text" name="fName" value={this.state.fName} onChange={this.handleChange}/>
                        <input type="text" name="lName" value={this.state.lName} onChange={this.handleChange}/>
                        <li>Date(s) of event(s) and what is(are) the occasion(s)? List all below:</li>
                        {dateInputs}
                        {eventInputs}
                        <li>Where does your natural hair hit your body? (Length)</li>
                        <input type="text" placeholder="Hair Length" name="length" value={this.state.length} onChange={this.handleChange}/>
                        <li>Which best describes your hair?</li>
                        <select name="thickness" value={this.state.thickness } onChange={this.handleThickness}>
                            <option value="Abnormally thick">Abnormally thick</option>
                            <option value="Average thickness">Average thickness</option>
                            <option value="On the thin side">On the thin side</option>
                            <option value="Extremely thin">Extremely thin</option>
                        </select>
                        <li>Will you have extensions? If so, what kind?</li>
                        <div>
                        {this.state.hasExtension === 'yes' ? 
                            <div>
                                <input name='hasExtension' type='radio' onChange={this.handleChange} value='yes'/>Yes
                                <input name='hasExtension' type='radio' onChange={this.handleChange} value='no'/>No
                                <br/>
                                <input type="text" placeholder="Extension Type" name='extension' value={this.state.extension} onChange={this.handleChange}/>
                            </div>
                            :
                            <div>
                                <input name='hasExtension' type='radio' onChange={this.handleChange} value='yes'/>Yes
                                <input name='hasExtension' type='radio' onChange={this.handleChange} value='no'/>No
                            </div>
                        }
                        </div>
                        <li>How are you wanting your hair? **I sometimes have brides request hairstyles that aren’t ideal for their hair simply because their hair texture or length works better with a different style. If you are unsure about the style you want, that is okay - let’s consult about what will look best on YOU when I meet you. In the meantime, check any styles you are interested.**</li>
                        <div id="checkboxInputs">
                            <input name='checked' type='checkbox' onChange={this.handleChange} value='Updo'/>Updo
                            <input name='checked' type='checkbox' onChange={this.handleChange} value='All down and curled'/>All down and curled
                            <input name='checked' type='checkbox' onChange={this.handleChange} value='Half up/half down'/>Half up/half down
                            <input name='checked' type='checkbox' onChange={this.handleChange} value='A braid of some sort'/>A braid of some sort
                            <input name='checked' type='checkbox' onChange={this.handleChange} value='Coming to one side and down'/>Coming to one side and down
                        </div>                        
                        <li>What time do YOU need to be ready by on your wedding day? (This isn’t a start time - I need to know what time I need to be finished by).</li>
                        <input type="time" name='time' value={this.state.time} onChange={this.handleChange} />
                        <li>Did you want me to travel to you on your wedding day? If so, what is the location?</li>
                        {this.state.needsTravel === 'yes' ? 
                            <div>
                                <input name='needsTravel' type='radio' onChange={this.handleChange} value='yes'/>Yes
                                <input name='needsTravel' type='radio' onChange={this.handleChange} value='no'/>No
                                <br/>
                                <input type="text" name='travel' value={this.state.travel} onChange={this.handleChange}/>
                            </div>
                            :
                            <div>
                                <input name='needsTravel' type='radio' onChange={this.handleChange} value='yes'/>Yes
                                <input name='needsTravel' type='radio' onChange={this.handleChange} value='no'/>No
                            </div>
                        }
                        <li>Email</li> 
                        <input type="email" name="email" value={this.state.email} onChange={this.handleChange}/>
                        <li>Cell Phone</li>
                        <input type="phone" name="cell" value={this.state.cell} onChange={this.handleChange}/>
                        <li>Additional Comments:</li>
                        <textarea name="comments" value={this.state.comments} onChange={this.handleChange} cols="30" rows="10"></textarea>
                    </ol>
                    <button onClick={this.submitQuote}>Submit</button>
                    <button onClick={this.email}>Email</button>
                </div>
            </div>
        );
    }
}

export default connect(state => state, {addQuote})(Quote);

// FOR ALL ADDITIONAL HAIR PRICING INFO, PLEASE OPEN THE PDF BELOW:

// Alyse Peterson
// Hair Stylist
// Cell: (801)898-8526
// Instagram @hairbyalyse
// hairbyalyse@gmail.com