exports.getAllEvents = (req, res) => {
    // Sample data (replace with database query)
    const events = [
        { id: 1, name: "Event One", location: "Location A" },
        { id: 2, name: "Event Two", location: "Location B" }
    ];
    res.json(events);
};
