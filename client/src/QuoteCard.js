import React from 'react';

const QuoteCard = (props) => {
    let {fName, lName, events, dates, length, thickness, hasExtension, extension, style, time, needsTravel, travel, email, cell, comments} = props.quote;
    const eventInfo = events.map((event, i) => {
        const info = `${event.event} on ${new Date(dates[i].date)}`
        return <li>{info.slice(0, -43)}</li>
    })
    const extensionDetail = hasExtension ? extension : 'No extensions';
    const styles = style.map(look => <li>{look}</li>);
    const travelDetail = needsTravel ? travel : 'No travel required';
    return (
        <div id='quoteCard'>
            <h2 id="name">{fName} {lName}</h2>
            <p>Events:</p>
            <ul>
                 {eventInfo}
            </ul>
            <p>Hair Details:</p>
            <ul>
                <li>Length: {length}</li>
                <li>Thickness: {thickness}</li>
                <li>Extensions: {extensionDetail}</li>
            </ul>
            <p>Style:</p>
            <ul>
                {styles}
            </ul>
            <p>Time ready: </p>
            <ul>
                <li>{time}</li>
            </ul>
            <p>Travel Details: </p>
            <ul>
                <li>{travelDetail}</li>
            </ul>
            <p>Contact Info:</p>
            <ul>
                <li>{email}</li>
                <li>{cell}</li>
            </ul>
            <p>Additional Comments:</p>
            <ul>
                <li>{comments}</li>
            </ul>
        </div>
    );
};

export default QuoteCard;