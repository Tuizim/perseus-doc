# 📨 POST — Cadastro de Ordem de Serviço

## 🧩 Visão Geral

Perfeito 👍 — aqui está a estrutura do **POST /ordemservico** separada de forma clara, mostrando primeiro a **base do payload** e depois o que há **dentro de cada objeto** (`patient` e `procedures`).
Assim, fica fácil para quem lê entender a hierarquia e saber exatamente onde cada campo se encontra.

## 📜 Estrutura Base do Payload

```json
{
  "patient": { ... },
  "procedures": [ ... ]
}
```
### Descrição Geral

| Campo        | Tipo   | Obrigatório | Descrição                                        |
| ------------ | ------ | ----------- | ------------------------------------------------ |
| `patient`    | Object | ✅           | Contém as informações do paciente vinculado à OS |
| `procedures` | Array  | ✅           | Lista de procedimentos que compõem a OS          |

### 🧍‍♂️ Dentro de `patient`

```json
"patient": {
  "id": 554
}
```

| Campo | Tipo    | Obrigatório | Descrição                                            |
| ----- | ------- | ----------- | ---------------------------------------------------- |
| `id`  | Integer | ✅           | Identificador único do paciente existente no sistema |

> 🔹 O paciente precisa existir previamente no banco de dados.<br>
> 🔹 Essa referência cria o vínculo direto entre a OS e o paciente informado.

### ⚙️ Dentro de `procedures`

```json
"procedures": [
  {
    "procedure": {
      "id": 131,
      "deadline": 5,
      "price": 38.38
    }
  }
]
```

| Campo                | Tipo    | Obrigatório | Descrição                                                  |
| -------------------- | ------- | ----------- | ---------------------------------------------------------- |
| `procedure`          | Object  | ✅           | Objeto que contém as informações do procedimento vinculado |
| `procedure.id`       | Integer | ✅           | Identificador do procedimento cadastrado no sistema        |
| `procedure.deadline` | Integer | ✅           | Prazo (em dias) para execução do procedimento              |
| `procedure.price`    | Decimal | ✅           | Valor do procedimento em moeda local (ex: BRL)             |

> 🔹 A OS pode conter **um ou vários procedimentos**.<br>
> 🔹 Cada procedimento é vinculado por meio da tabela intermediária `OrdemProcedimento`.<br>
> 🔹 O campo `deadline` define o tempo de execução individual de cada procedimento.<br>
> 🔹 O campo `price` é utilizado no cálculo de valores totais e relatórios financeiros.

### 🧱 Exemplo Completo

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
    },
    {
      "procedure": {
        "id": 148,
        "deadline": 10,
        "price": 50.00
      }
    }
  ]
}
```

> ✅ **Resumo:**
>
> * A **base** é composta por `patient`, `status` e `procedures`.
> * Dentro de `patient` há apenas o identificador do paciente.
> * Dentro de `procedures` há um array de objetos, cada um contendo um `procedure` com seus detalhes (`id`, `deadline`, `price`).
> * Essa estrutura garante clareza, consistência e evita colisões de dados entre diferentes entidades.


## ⚠️ Catálogo de Erros — Códigos e Possíveis Causas

| Código    | Possível Causa                                                          |
| --------- | ----------------------------------------------------------------------- |
| **.0001** | O objeto `patient` não foi informado na requisição.                     |
| **.0002** | Nenhum procedimento foi enviado; é obrigatório ao menos um.             |
| **.0003** | O campo `patient.id` está ausente (nulo).                               |
| **.0004** | O campo `procedure.id` está ausente (nulo).                             |
| **.0005** | O ID do paciente informado é igual ou menor que zero.                   |
| **.0006** | O ID do procedimento informado é igual ou menor que zero.               |
| **.0007** | O campo `deadline` do procedimento não foi informado.                   |
| **.0008** | O campo `price` do procedimento não foi informado.                      |
| **.0009** | O valor informado no campo `price` é negativo ou igual a zero.          |
| **.0010** | O paciente informado não está cadastrado no banco de dados.             |
| **.0011** | O paciente informado está inativo e não pode ser vinculado.             |
| **.0012** | O procedimento informado não existe no banco de dados.                  |
| **.0013** | O procedimento informado está inativo.                                  |
| **.0014** | O paciente já possui um ou mais procedimentos cadastrados no mesmo dia. |
| **.0015** | Tentativa de acessar ou editar uma OS inexistente.                      |
| **.0016** | A Ordem de Serviço está cancelada e não pode ser modificada.            |
| **.0017** | O status informado da Ordem de Serviço é inválido ou não permitido.     |

## 🧠 Regras de Negócio

Perfeito 👍 — aqui está a versão **essencial e limpa**, mantendo boa legibilidade visual sem exageros:

### ⚙️ Status Inicial

* Toda nova Ordem de Serviço é criada **com status `ABERTO`**.
* O status não pode ser definido manualmente no cadastro.

---

### 👥 Paciente

* O paciente deve **existir e estar ativo**.
* Pacientes inativos **não podem ser vinculados** à OS.
* Um paciente **não pode registrar o mesmo procedimento no mesmo dia**.

---

### 🧾 Procedimentos

* É obrigatório informar **ao menos um procedimento**.
* Todos os procedimentos devem estar **ativos**.
* Cada um deve conter:

  * `id` válido (maior que zero)
  * `deadline` (prazo em dias)
  * `price` (valor positivo)

---

### 📆 Data Promessa

* Calculada automaticamente com base nos prazos informados.
* **Regra:** Data Promessa = Data atual + maior prazo entre os procedimentos.

---

### 💰 Valor e Prazo

* O sistema **exige que o valor e prazo sejam enviados** na requisição.
* Esses dados são **fixados na OS**, evitando inconsistências caso o procedimento seja alterado futuramente.
