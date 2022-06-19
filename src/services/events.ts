//@packages
import axios from "axios";

class Events {

    static async getEvents() {
        try {
            return await axios.get('https://app.ticketmaster.com/discovery/v2/events.json?apikey=ztYK25RmKx8KOsJazhKkTbwrD0DeTAdE&classificationName=festival')
        } catch (e) {
            throw e;
        }
    }
}

export default Events;
