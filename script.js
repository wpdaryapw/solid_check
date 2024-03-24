// Принцип единственной обязанности (Single Responsibility Principle)
class UsersDatabase {
    constructor() {
      this.users = [];
    }
  
    addUser(user) {
      this.users.push(user);
    }
  
    deleteUser(user) {
      this.users = this.users.filter(u => u !== user);
    }
  
    getUserById(id) {
      return this.users.find(u => u.id === id);
    }
  }
  
  class UserRenderer {
    constructor(usersDatabase) {
      this.usersDatabase = usersDatabase;
    }
  
    renderUsers() {
      const users = this.usersDatabase.users;
      // Рендеринг пользователей в интерфейсе
    }
  }
  
  // Принцип открытости/закрытости (Open/Closed Principle)
  class PaymentProcessor {
    processPayment(payment) {
      throw new Error('processPayment method must be implemented');
    }
  }
  
  class PayPalPaymentProcessor extends PaymentProcessor {
    processPayment(payment) {
      // Логика обработки платежа через PayPal
    }
  }
  
  class StripePaymentProcessor extends PaymentProcessor {
    processPayment(payment) {
      // Логика обработки платежа через Stripe
    }
  }
  
  // Принцип подстановки Барбары Лисков (Liskov Substitution Principle)
  class Shape {
    area() {
      throw new Error('area method must be implemented');
    }
  }
  
  class Square extends Shape {
    constructor(side) {
      super();
      this.side = side;
    }
  
    area() {
      return this.side * this.side;
    }
  }
  
  class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
    }
  
    area() {
      return Math.PI * this.radius * this.radius;
    }
  }
  
  // Принцип разделения интерфейса (Interface Segregation Principle)
  class Worker {
    work() {
      // Реализация работы
    }
  }
  
  class Eater {
    eat() {
      // Реализация приема пищи
    }
  }
  
  // Принцип инверсии зависимостей (Dependency Inversion Principle)
  class PaymentGateway {
    process(payment) {
      throw new Error('process method must be implemented');
    }
  }
  
  class PayPalPaymentGateway extends PaymentGateway {
    process(payment) {
      // Логика обработки платежа через PayPal
    }
  }
  
  class StripePaymentGateway extends PaymentGateway {
    process(payment) {
      // Логика обработки платежа через Stripe
    }
  }
  