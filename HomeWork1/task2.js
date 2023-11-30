// Задание 2
let mapCook = new Map();
let mapDishes = new Map();
let mapOrders = new Map();


mapCook.set("Виктор", "специализация: Пицца")
.set("Ольга", "специализация: Суши")
.set("Дмитрий", "специализация: Десерты");

mapDishes.set("Пицца 'Маргарита'", "повар: Виктор")
.set("Пицца 'Пепперони'", "повар: Виктор")
.set("Суши 'Филадельфия'", "повар: Ольга")
.set("Суши 'Калифорния'", "повар: Ольга")
.set("Тирамису", "повар: Дмитрий")
.set("Чизкейк", "повар: Дмитрий");

function placeOrder(client, dish) {
    if (!mapOrders.has(client)) {
      mapOrders.set(client, []);
    }
    mapOrders.get(client).push(dish);
  }
placeOrder({ client: 'Алексей' }, 'Пицца "Пепперони"');
placeOrder({ client: 'Алексей' }, 'Тирамису');  
placeOrder({ client: 'Мария' }, 'Суши "Калифорния"');
placeOrder({ client: 'Мария' }, 'Пицца "Маргарита"'); 
placeOrder({ client: 'Ирина' }, 'Чизкейк'); 
console.log(mapCook);
console.log(mapDishes);
console.log(mapOrders);