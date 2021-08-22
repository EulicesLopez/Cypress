describe('Mi primer test', () => {
    var suma= 4+5;
    var resta=10-5;
    const nombre = "everis";
    
  
    it('Operacion suma corecta', () => {
      expect(9).to.equal(suma)
      
    })

    //https://docs.cypress.io/guides/references/assertions#TDD-Assertions

    it('Validacion palabra corecta', () => {
        expect('everis').to.equal(nombre)
        expect(nombre).to.be.a('string')
        
      })

  })

  