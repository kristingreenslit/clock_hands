var clock = require( "../clock");
//tests are written for one hour increments (30 deg. per hour)
describe( "a clock's angle", function(){

  describe( "at 1:00", function(){
    it( "should be 30 degrees", function(){
      var degrees = clock.multiply( 30, 1 )
      expect( degrees ).toBe( 30 );
    })
  })

  describe( "at 6:00", function(){
    it( "should be 180 degrees", function(){
      var degrees = clock.multiply( 30, 6 )
      expect( degrees ).toBe( 180 );
    })
  })

  describe( "at 10:00", function(){
    it( "should be 60 degrees", function(){
      var degrees = clock.multiply( 30, 2)
      expect( degrees ).toBe( 60 );
    })
  })

})
