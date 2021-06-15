class User {
  constructor(private name: string) {}

  sayHello(): string {
    return this.name
  }
}

const user = new User("Paweł")

user.sayHello()
