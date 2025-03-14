import React from "react";
import '../StyleSheets/UpcomingEvents.css';

class UpcomingEvents extends React.Component {
    render() {
        return (
            <div className="upcoming-events-container">
                <h2>Center College Schedule</h2>
                <div className="iframe-container">
                    <iframe
                        src="https://calendar.google.com/calendar/embed?src=0cba95d846860096dd533d40321809e6ee2e5559fed89c4a34221ddce31d4e24%40group.calendar.google.com&ctz=America%2FNew_York"
                        title="Upcoming Events Calendar"
                    ></iframe>
                </div>
            </div>
        );
    }
}

export default UpcomingEvents;
