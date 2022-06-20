//@packages
import axios from "axios";

class Events {

    static async getEvents() {
        try {
            return await axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${process.env.REACT_APP_API_KEY}&classificationName=festival`)
        } catch (e) {
            throw e;
        }
    }
}

export default Events;
