/* Curso de Engenharia de Software - UniEVANGÉLICA 
Disciplina de Programação Web 
Dev: Luiz Henrique Bispo 
DATA: 26/03/2023 */


// Espera o carregamento da página para executar o código
window.onload = function() {
    // Inicializa um contador para nomear os novos campos adicionados
    var counter = 1;

    // Captura o botão "Adicionar Medicamento" pelo ID
    var addBtn = document.getElementById("addBtn");
    // Adiciona um listener de evento para o botão
    addBtn.addEventListener("click", function() {
      // Captura a tabela de medicamentos pelo ID
      var table = document.getElementById("medicamentos");

      // Cria uma nova linha na tabela com um ID único
      var newRow = table.insertRow();
      newRow.id = "row-" + counter;

      // Adiciona as células da nova linha
      var medCell = newRow.insertCell();
      var dosCell = newRow.insertCell();
      var freqCell = newRow.insertCell();
      var btnCell = newRow.insertCell();

      // Cria os inputs de texto para medicamento, dosagem e frequência
      var medInput = document.createElement("input");
      medInput.type = "text";
      medInput.name = "medicamento" + counter;
      medInput.classList.add("form-control");

      var dosInput = document.createElement("input");
      dosInput.type = "text";
      dosInput.name = "dosagem" + counter;
      dosInput.classList.add("form-control");

      var freqInput = document.createElement("input");
      freqInput.type = "text";
      freqInput.name = "frequencia" + counter;
      freqInput.classList.add("form-control");

      // Cria o botão "Remover" para a nova linha e adiciona um listener de evento
      var removeBtn = document.createElement("button");
      removeBtn.type = "button";
      removeBtn.classList.add("btn", "btn-danger", "btn-sm");
      removeBtn.innerHTML = "Remover";
      removeBtn.addEventListener("click", function() {
        // Quando o botão "Remover" é clicado, captura o ID da linha pai do botão e remove a linha
        var rowId = this.parentNode.parentNode.id;
        var row = document.getElementById(rowId);
        row.parentNode.removeChild(row);
      });

      // Adiciona os inputs e o botão à nova linha
      medCell.appendChild(medInput);
      dosCell.appendChild(dosInput);
      freqCell.appendChild(freqInput);
      btnCell.appendChild(removeBtn);

      // Incrementa o contador para o próximo nome de campo
      counter++;
    });
  }