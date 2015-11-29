import * as moment from 'moment';

class NinuBot {

	private bornDate: any;

	public constructor() {
		this.born();
	}

	private born() {
		this.bornDate = moment();
	}

	public getBornDate () {
		return this.bornDate;
	}
}

export = NinuBot;
