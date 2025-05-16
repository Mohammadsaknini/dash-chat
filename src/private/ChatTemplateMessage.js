import React from "react";
import PropTypes from "prop-types";

/**
 * A resuable template message component for chat interfaces.
*/

const TemplateMessages = ({
    messages,
    onClick,
}) => {
    const handleClick = (message) => {
        if (onClick) {
            onClick(message);
            const templateMessages = document.querySelector(".template-messages");
            if (templateMessages) {
                templateMessages.remove();
            }
        }
    };
    return (
        <div className="template-messages" style={{ display: "flex", gap: "5px", justifyContent: "center", flexWrap: "wrap" }}>
            {messages.map((message, index) => (
                <div
                    key={index}
                    className="template-message"
                    style={{
                        backgroundColor: "#f0f0f0",
                        color: "#333",
                        padding: "10px",
                        borderRadius: "5px",
                        margin: "5px 0",
                        cursor: "pointer",
                    }}
                    onClick={() => handleClick(message)}
                >
                    {message}
                </div>
            ))}
        </div>
    );
};

TemplateMessages.propTypes = {
    /**
     * Function to handle click events on the template message
    */
    messages: PropTypes.arrayOf(PropTypes.string).isRequired,
    /**
     * Function to handle click events on the template message
    */
    onClick: PropTypes.func,
};

export default TemplateMessages;
