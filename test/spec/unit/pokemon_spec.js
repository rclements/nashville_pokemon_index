'use strict';

describe('Pokemon', function () {
  var subject;

  beforeEach(function(){
    subject = new Pokemon({
      name: 'shitplatter',
      picture: 'http://f3nation.com/wp-content/uploads/2013/06/Mmmmm-cheeseburger1.jpg',
      description: "Lays on the floor and eats cheeseburgers"
    });
  });

  it('knows its name', function () {
    expect(subject.name).toEqual('shitplatter');
  });

  it('knows its picture', function () {
    expect(subject.picture).toEqual('http://f3nation.com/wp-content/uploads/2013/06/Mmmmm-cheeseburger1.jpg');
  });

  it('knows its description', function () {
    expect(subject.description).toEqual('Lays on the floor and eats cheeseburgers');
  });
});
