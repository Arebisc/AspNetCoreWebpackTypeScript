export interface User {
	id: number;
	username: string;
}

export interface IUsersGetter {
	getUser(id: number): User | null;
}





