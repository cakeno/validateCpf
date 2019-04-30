var chai = require('chai');
var expect = chai.expect;
var index = require('../lib/index.js');

describe('teste index lib', () => {
  
  describe('função cpfValidator', () => {

    it('418.477.368-07 número é válido', () => {

      expect(index.cpfValidator('418.477.368-07')).to.equal(true);

    });
    
    it('41847736807 string é válido', () => {

      expect(index.cpfValidator('41847736807')).to.equal(true);

    });

    it('41847736807 número é válido', () => {

      expect(index.cpfValidator(41847736807)).to.equal(true);

    });

    it('41847736800 não tem o segundo dígito válido', () => {

      expect(index.cpfValidator('41847736800')).to.equal(false);

    });

    it('41847736817 não tem o primeiro dígito válido', () => {

      expect(index.cpfValidator('41847736817')).to.equal(false);

    });

    it('4184773680 falta 1 número', () => {

      expect(index.cpfValidator('4184773680')).to.equal(false);

    });

    it('418477368022 tem 1 número a mais', () => {

      expect(index.cpfValidator('418477368022')).to.equal(false);

    });

  });

});