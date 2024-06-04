export class User {
	public firstName: string;
	public lastName: string;
	public email: string;
	public password: string;

	constructor(firstName: string, lastName: string, email: string, password: string) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
	}

	public toString() {
		let s: string = "";
		s += "firstName : " + this.firstName + "\n";
		s += "lastName : " + this.lastName + "\n";
		s += "email : " + this.email + "\n";
		s += "password : " + this.password + "\n";
		console.log(s);
		return s;
	}

}
