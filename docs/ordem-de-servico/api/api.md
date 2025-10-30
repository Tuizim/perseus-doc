# 📡 API — Ordem de Serviço (OS)

## 🔗 Endpoint Base

Todas as operações referentes à **Ordem de Serviço** utilizam como base o endpoint:

**`/api/v2/startshift05/ordemservico`**

> Esse endpoint é responsável por **gerenciar o ciclo completo da OS**, permitindo **criar, consultar, editar e listar** registros, sempre respeitando as regras de negócio e os relacionamentos com **Paciente** e **Procedimento**.


## ⚙️ Operações Disponíveis

| Operação              | Método HTTP | Descrição                                                                                     |
| --------------------- | ----------- | --------------------------------------------------------------------------------------------- |
| **Cadastrar OS**      | `POST`      | Cria uma nova Ordem de Serviço vinculada a um paciente e um ou mais procedimentos.            |
| **Buscar OS**         | `GET /:id`  | Retorna os detalhes completos de uma Ordem de Serviço específica.                             |
| **Editar OS**         | `PUT /:id`  | Atualiza dados existentes de uma Ordem de Serviço (ex: status, data promessa, procedimentos). |
| **Listagem Filtrada** | `GET`       | Lista Ordens de Serviço com filtros opcionais (por paciente, status, data, etc.).             |


## 🧾 Estrutura Padrão da Requisição

As requisições seguem o formato **JSON**, e devem conter obrigatoriamente o cabeçalho:

**Authorization:** `Bearer <token>`


## 📦 Exemplo de Estrutura Geral de OS

```json
{
  "patient": {
    "id": 554
  },
  "status": "ABERTO",
  "procedures": [
    {
      "procedure": {
        "id": 131,
        "deadline": 5,
        "price": 38.38
      }
    }
  ]
}
```


### 🧠 Observações

* O campo **`status`** é definido automaticamente como `"ABERTO"` no momento do cadastro.
* O vínculo entre **procedimentos** e a OS é sempre feito por meio da tabela intermediária `OrdemProcedimento`.
* É possível adicionar múltiplos procedimentos por OS, cada um com prazo e valor individual.
* O campo **`dataPromessa`** é obrigatório e representa o prazo de conclusão informado ao paciente.

---

## 📍 Próximas Seções

Nas próximas partes da documentação serão detalhadas individualmente cada operação:

1. **POST** `/ordemservico` → Cadastro de nova Ordem de Serviço
2. **GET** `/ordemservico/:id` → Consulta de uma OS específica
3. **PUT** `/ordemservico/:id` → Edição de uma OS existente
4. **GET** `/ordemservico` → Listagem e filtros de OS

> Esta seção define o **contrato geral da API de Ordem de Serviço**, sendo a base para os módulos de atendimento, faturamento e controle operacional.
