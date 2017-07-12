// Don't look at this file, unless you really want to, menyuch!!

import initialState from './initialState'

class Store {



	state = initialState

	setState(updates) {
		Object.assign(this.state, updates)
		this.notify()
	}

	//------
	// Subscriptions

	handlers = new Set()

	subscribe(handler) {
		this.handlers.add(handler)
		handler(this.state)

		return {
			remove: () => {
				this.handlers.delete(handler)
			}
		}
	}

	notify() {
		for (const handler of this.handlers) {
			handler(this.state)
		}
	}

}

export default new Store()
