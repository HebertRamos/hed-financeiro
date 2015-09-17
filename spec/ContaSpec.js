describe("Conta", function() {
    
  var mes;

  beforeEach(function() {
    conta = new Conta();
  });

  describe("Total de Pagamentos", function() {

    it("Deve devolver 10 como total de pagamentos quando ha uma pagamento de 7 e outro de 3", function() {
        var pagamento1 = new Pagamento();
        pagamento1.valor = 7;

        var pagamento2 = new Pagamento();
        pagamento2.valor = 3;

        conta.addPagamento(pagamento1);
        conta.addPagamento(pagamento2);

        var totalPagamento = 10;

        expect(conta.getTotalPagamentos()).toEqual(totalPagamento);
    });

    it("Deve devolver 0 como total de pagamentos quando não há pagamentos na conta", function() {
        
        var totalPagamento = 0;
        
        expect(conta.getTotalPagamentos()).toEqual(totalPagamento);
    });

  });

  describe("Restante a Pagar", function() {
    it("Deve devolver 10 como restante a pagar quando a conta é de 15 e ha uma pagamento de 5", function() {

      conta.valor = 15;

      var pagamento1 = new Pagamento();
      pagamento1.valor = 5;

      conta.addPagamento(pagamento1);

      var restanteAPagar = 10;
        
        expect(conta.getRestanteAPagar()).toEqual(restanteAPagar);

    });

    it("Deve devolver 20 como restante a pagar quando a conta é de 20 e não ha nenhum pagamento", function() {

      conta.valor = 20;

      var restanteAPagar = 20;
        
      expect(conta.getRestanteAPagar()).toEqual(restanteAPagar);

    });

    it("Deve devolver 0 como restante a pagar quando a conta é de 20 e há um pagamento de 20", function() {

      conta.valor = 20;

      var pagamento1 = new Pagamento();
      pagamento1.valor = 20;

      conta.addPagamento(pagamento1);

      var restanteAPagar = 0;
        
      expect(conta.getRestanteAPagar()).toEqual(restanteAPagar);

    });

    it("Deve devolver 0 como restante a pagar quando a conta é de 20 e há um pagamento de 30", function() {

      conta.valor = 20;

      var pagamento1 = new Pagamento();
      pagamento1.valor = 30;

      conta.addPagamento(pagamento1);

      var restanteAPagar = 0;
        
      expect(conta.getRestanteAPagar()).toEqual(restanteAPagar);

    });
  });
});