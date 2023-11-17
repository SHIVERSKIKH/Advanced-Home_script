// Задание 1


const musicCollection = {
    alboms : [
        { title: "О себе", artist: "Полина Гагарина", year: "2010" },
        { title: "Открой мне дверь!", artist: "Руки Вверх", year: "2012" },
        { title: "Белые розы", artist: "Ласковый май", year: "1988" },
        { title: "Раневская", artist: "Лолита", year: "2018" }
       ],
       [Symbol.iterator]:
       function() {
        let index = 0;
        return {
            next:() => {
                if(index < this.alboms.length) {
                    const albom = this.alboms[index];
                    index++;
                    return{value: albom, done: false};
                }
                return {done: true};
            }
        }
    }
}
    for (let albom of musicCollection) {
        console.log(`Название альбома: ${albom.title}, Исполнитель: ${albom.artist}, год: ${albom.year}`);
    }

