import { IUsersGetter, User } from './interfaces/iUsersGetter';

export class FacebookUserGetter implements IUsersGetter {
	public getUser(id: number): User | null {
		if(id === 4) {
			return null;
		}

		return {
			id: id,
			username: "Test"
		};
	}
}



