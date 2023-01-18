class EventBus {
    constructor() {
        this.events = {};
    }

    subscribe(event, callback) {
        if (!this.events[event]) {
            this.events[event] = [];
        }

        this.events[event].push(callback);
    }

    unsubscribe(event, callback) {
        if (!this.events[event]) {
            return;
        }

        this.events[event] = this.events[event].filter(cb => cb !== callback);
    }

    emit(event, data) {
        if (!this.events[event]) {
            return;
        }

        this.events[event].forEach(callback => callback(data));
    }
}

export default EventBus;