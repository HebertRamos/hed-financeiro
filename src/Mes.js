function Mes(){
	this.nome;
	this.contas = [];
	this.receitas = [];
}

Mes.prototype.addConta = function(conta){
	this.contas.push(conta);
};

Mes.prototype.getTotalContas = function(){
	var totalContas = 0;
	this.contas.forEach(function(conta){
		totalContas += conta.valor;
	});
	return totalContas;
};

Mes.prototype.addReceita = function(receita){
	this.receitas.push(receita);
};

Mes.prototype.getTotalReceitas = function(){
	var totalReceitas = 0;
	this.receitas.forEach(function(receita){
		totalReceitas += receita.valor;
	});
	return totalReceitas;
};

Mes.prototype.getSobraOrcamento = function(){

	var receita = this.getTotalReceitas();
	var contas = this.getTotalContas();

	return receita - contas;
};

Mes.prototype.getRestanteAPagar = function(){

	var restanteAPagar = 0;
	this.contas.forEach(function(conta){
		restanteAPagar += conta.getRestanteAPagar();
	});

	return restanteAPagar;
};