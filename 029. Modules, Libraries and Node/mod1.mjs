const reminder = (message, event) => {
    const reason = 'Time for ' + event;
    return message + reason;
};
export default reminder;