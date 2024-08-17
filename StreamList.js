import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash, faCheck } from "@fortawesome/free-solid-svg-icons";

const StreamList = ({
    events,
    newEvent,
    setNewEvent,
    handleAddEvent,
    handleEditEvent,
    handleDeleteEvent,
    handleCompleteEvent,
}) => {
    return (
        <div className="streamlist-container">
            <h1>StreamList</h1>
            <form onSubmit={handleAddEvent}>
                <input
                    type="text"
                    value={newEvent}
                    onChange={(e) => setNewEvent(e.target.value)}
                    placeholder="Add a new event"
                />
                <button type="submit">Add</button>
            </form>
            <ul>
                {events.map((event, index) => (
                    <li key={index} className={event.completed ? "completed" : ""}>
                        <span>{event.text}</span>
                        <div className="actions">
                            <button onClick={() => handleCompleteEvent(index)}>
                                <FontAwesomeIcon icon={faCheck} />
                            </button>
                            <button onClick={() => handleEditEvent(index, prompt("Edit Event", event.text))}>
                                <FontAwesomeIcon icon={faPenToSquare} />
                            </button>
                            <button onClick={() => handleDeleteEvent(index)}>
                                <FontAwesomeIcon icon={faTrash} />
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StreamList;
