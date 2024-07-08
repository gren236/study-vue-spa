const events = new Map();

export default {
    $on(eventName, callback) {
        if (!events.has(eventName)) {
            events.set(eventName, [])
        }

        events.get(eventName).push(callback)
    },

    $off() {
        throw { message: 'Not implemented' }
    },

    $emit(eventName, data) {
        if (events.has(eventName)) {
            events.get(eventName).forEach(callback => callback(data))
        }
    }
}