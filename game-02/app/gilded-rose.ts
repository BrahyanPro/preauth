import {
  updateSulfuras,
  updateAgedBrie,
  updateBackstagePasses,
  updateConjured,
  updateItemDefault,
} from './utils';

export class Item {
  constructor(
    public name: string,
    public sellIn: number,
    public quality: number
  ) {}
  //Fiuuu Esquivar duende*** Perdon gruñon, pero siempre que se puede hay que actualizar y optimizar codigo
}

//Oyee Leeroy como te vas en una aventura despues de hacer este desastree, tu teclado debio llorar despues de que lo hicieras escribir estó, el karma te espera XD
export class GildedRose {
  constructor(public items: Array<Item>) {}
  updateQuality() {
    this.items.forEach((item) => {
      switch (item.name) {
        case 'Sulfuras, Hand of Ragnaros':
          item = updateSulfuras(item);
          break;
        case 'Aged Brie': {
          item = updateAgedBrie(item);
          break;
        }
        case 'Backstage passes to a TAFKAL80ETC concert': {
          item = updateBackstagePasses(item);
          break;
        }
        case 'Conjured': {
          item = updateConjured(item);
          break;
        }
        default:
          item = updateItemDefault(item);
      }
    });
    return this.items;
  }
}

// Ahora siii jeje esta mucho mejor XD, fue muy divertido hacer esto, sera porque amo programar? bueno esto es lo mejor del mundo
