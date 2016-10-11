describe("Diagram", function() {

  var diagram;

  beforeEach(function(){
    diagram = new Diagram();
  });

  it("should take a call of makeBox", function() {
    expect(diagram.makeBox()).toEqual(true)
  })

});
