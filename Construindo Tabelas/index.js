var paulo ={
	nome: 'paulo',
	vitoria: 0, 
	empate: 0,
	derrota: 0,
	pontos: 0	
}
var rafa ={
	nome: 'rafa',
	vitoria: 5, 
	empate: 0,
	derrota: 0,
	pontos: 0	
}
var cata= {
	nome: 'cata',
	vitoria: 10, 
	empate: 0,
	derrota: 0,
	pontos: 0
}

var elementoTabela =  document.getElementById('tabelaJogadores')
elementoTabela.innerHTML = `
<tr>
<td>$(paulo.nome) </td>
<td>$(paulo.vitoria)</td>
<td>$(paulo.empate)</td>
<td>$(paulo.derrota)</td>
<td>$(paulo.pontos)</td>
<td><button onClick="adicionarVitoria()">Vitória</button></td>
<td><button onClick="adicionarEmpate()">Empate</button></td>
<td><button onClick="adicionarDerrota()">Derrota</button></td>
</tr>
` 





function adicionarVitoria() {} 
function adicionarEmpate()  {}
function adicionarDerrota() {}