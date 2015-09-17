describe("Mes", function() {
    
  var mes;

  beforeEach(function() {
    mes = new Mes();
  });

  describe("Total de Contas", function() {

    it("Deve devolver 10 como total de contas quando ha uma conta de 4 e outra de 6", function() {
        var conta1 = new Conta();
        conta1.valor = 4;

        var conta2 = new Conta();
        conta2.valor = 6;

        mes.addConta(conta1);
        mes.addConta(conta2);

        var totalConta = 10;

        expect(mes.getTotalContas()).toEqual(totalConta);
    });

    it("Deve devolver 0 como total de contas quando não há contas no mês", function() {
        
        var totalConta = 0;
        
        expect(mes.getTotalContas()).toEqual(totalConta);
    });
  });

  describe("Total de Receitas", function() {

    it("Deve devolver 15 como total de receitas quando ha uma receita de 7 e outra de 8", function() {
        var receita1 = new Receita();
        receita1.valor = 7;

        var receita2 = new Receita();
        receita2.valor = 8;

        mes.addReceita(receita1);
        mes.addReceita(receita2);

        var totalReceita = 15;

        expect(mes.getTotalReceitas()).toEqual(totalReceita);
    });

    it("Deve devolver 0 como total de receitas quando não ha nenhuma receita", function() {

      var totalReceita = 0;

      expect(mes.getTotalReceitas()).toEqual(totalReceita);

    });
  });

  describe("Sobra do Orçamento", function() {

    it("Deve -10 quando há uma receita de 10 e uma conta de 20", function() {

         var receita1 = new Receita();
         receita1.valor = 10;

         var conta1 = new Conta();
         conta1.valor = 20;

         mes.addReceita(receita1);
         mes.addConta(conta1);


        var totalSobra = -10;

        expect(mes.getSobraOrcamento()).toEqual(totalSobra);

    });

    it("Deve 0 quando há uma receita de 15 e uma conta de 15", function() {

         var receita1 = new Receita();
         receita1.valor = 15;

         var conta1 = new Conta();
         conta1.valor = 15;

         mes.addReceita(receita1);
         mes.addConta(conta1);


        var totalSobra = 0;

        expect(mes.getSobraOrcamento()).toEqual(totalSobra);

    });

    it("Deve 2 quando há uma receita de 18 e uma conta de 16", function() {

         var receita1 = new Receita();
         receita1.valor = 18;

         var conta1 = new Conta();
         conta1.valor = 16;

         mes.addReceita(receita1);
         mes.addConta(conta1);


        var totalSobra = 2;

        expect(mes.getSobraOrcamento()).toEqual(totalSobra);

    });

  });


  describe("Restante a pagar", function() {

    it("Deve retornar 0 quando há uma conta de 10 que foi totalmente paga.", function() {


        var conta = jasmine.createSpyObj('Conta', [(function getRestanteAPagar(){
          return 0;
        })]);
        
        mes.addConta(conta);


        var restanteAPagar = 0;

        expect(mes.getRestanteAPagar()).toEqual(restanteAPagar);

    });
  });

});  