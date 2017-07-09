export default class BusinessGenerator {

	constructor(form) {
		this.form = form
	}

	async generate() {
		return `${this.form.ownName}'s Company`
	}

}