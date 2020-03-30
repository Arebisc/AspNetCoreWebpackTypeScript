import { FacebookUserGetter } from './facebookUserGetter';
import { IUsersGetter } from "./interfaces/iUsersGetter";

class Main {
	private facebookReader: IUsersGetter = new FacebookUserGetter();

	public hello() {
		const data = this.facebookReader.getUser(1);
		if(!data) {
			return;
		}
		console.log(data.id);
		console.log(data.username);
	}
}

const mainInstance = new Main();
mainInstance.hello();





