class MyMap<T> {
    private map:{[key: string]: T} = {};

    setItem(key: string, item: T) {
        this.map[key] = item;
    }

    getItem(key: string) {
        return this.map[key];
    }// should retrieve the value of the provided key

    clear() {
        this.map = {};
    }// should remove all key-value pairs

    printMap() {
        for (let key in this.map) {
            console.log(key, this.map[key]);
        }
    }// should output key-value pairs
}

const numberMap = new MyMap<number>();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
numberMap.printMap();
 
const stringMap = new MyMap<string>();
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
stringMap.printMap();