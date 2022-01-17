//Nunca habia usado moca y chai para hacer pruebas, soy más team jest, pero aun asi lo deje para demostrar mi capacidad de aprendizaje, espero y los impresione lo suficiente como para contratarme XD, re manipulador el man LOL jajaja
import { expect } from 'chai';
import { GildedRose, Item } from '../app/gilded-rose';

describe('Testing class GildeRose: ', function () {
  it('Check the returned value Quality :  ', function () {
    const gildedRose = new GildedRose([new Item('Preauth', 100, 100)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(50);
  });

  it('Check the returned value name :  ', function () {
    const gildedRose = new GildedRose([new Item('Preauth', 100, 100)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal('Preauth');
  });

  it('Check the returned value SellIng :  ', function () {
    const gildedRose = new GildedRose([new Item('Preauth', 100, 100)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).to.equal(99);
  });

  it('Check the quality of the return value decremented to double :  ', function () {
    const gildedRose = new GildedRose([new Item('Preauth', 0, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal('Solve It');
  });
});
