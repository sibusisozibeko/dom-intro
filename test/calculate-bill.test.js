describe('The calculateBtnClicked function', function(){

    it('should return an amount of a call', function(){
         assert.equal(billCalc('call'), '2.75');

        });

        it('should return an amount of an sms', function(){
          assert.equal(billCalc('sms'), '0.75');
      });

      it('should return an amount of an sms and call added together', function(){
        assert.equal(billCalc('sms,call'), '3.50');
    });
});
