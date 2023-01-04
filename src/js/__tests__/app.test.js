import sortByProp from '../app';

describe('object sort with arr properties and alphabet', () => {
  let obj;
  let prop;
  let result;

  beforeEach(() => {
    obj = {
      name: 'мечник',
      health: 10,
      level: 2,
      attack: 80,
      shield: true,
      defence: 40,
      power: 32,
      local: true,
      helm: 'Dominator',
    };

    prop = ['name', 'helm', 'level', 'health'];

    result = [
      { key: 'name', value: 'мечник' },
      { key: 'helm', value: 'Dominator' },
      { key: 'level', value: 2 },
      { key: 'health', value: 10 },
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'local', value: true },
      { key: 'power', value: 32 },
      { key: 'shield', value: true },
    ];
  });

  test('result is array', () => {
    const res = sortByProp(obj, prop);
    expect(Array.isArray(res)).toBe(true);
  });
  test('good sort with properties in arr and alphabet', () => {
    expect(sortByProp(obj, prop)).toEqual(result);
  });

  test('edit entries obj, delete some properties', () => {
    delete obj.power;
    delete obj.local;
    result = [
      { key: 'name', value: 'мечник' },
      { key: 'helm', value: 'Dominator' },
      { key: 'level', value: 2 },
      { key: 'health', value: 10 },
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'shield', value: true },
    ];
    expect(sortByProp(obj, prop)).toEqual(result);
  });

  test('edit entries obj, delete properties that match the sorting array', () => {
    delete obj.defence;
    delete obj.level;
    result = [
      { key: 'name', value: 'мечник' },
      { key: 'helm', value: 'Dominator' },
      { key: 'health', value: 10 },
      { key: 'attack', value: 80 },
      { key: 'local', value: true },
      { key: 'power', value: 32 },
      { key: 'shield', value: true },
    ];
    expect(sortByProp(obj, prop)).toEqual(result);
  });

  test('edit properties array', () => {
    prop = ['level', 'health'];
    result = [
      { key: 'level', value: 2 },
      { key: 'health', value: 10 },
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'helm', value: 'Dominator' },
      { key: 'local', value: true },
      { key: 'name', value: 'мечник' },
      { key: 'power', value: 32 },
      { key: 'shield', value: true },
    ];
    expect(sortByProp(obj, prop)).toEqual(result);
  });
});
