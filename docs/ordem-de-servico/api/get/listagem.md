# **Listagem de OS**

**Endpoint:**
`GET /api/v2/startshift05/ordemservico`

Retorna uma **lista paginada** de Ordens de Serviço, ordenadas pela data de criação (**mais recente primeiro**).

### 📤 Exemplo de uso

```
GET /api/v2/startshift05/ordemservico?pageStartIndex=0&pageSize=10&sort=dataHoraCadastro:desc
Authorization: Bearer <token>
```

### 📦 Exemplo de retorno (OrdemServicoPaginacaoDto)

```json
[
  {
    "id": 42,
    "patientFullName": "Luciana Ferreira",
    "cpf": "123.456.789-00",
    "procedureQuantity": 2,
    "registrationDateTime": "2025-10-20T09:32:00Z",
    "promiseDate": "2025-11-04",
    "status": "EMPROCESSAMENTO"
  },
  {
    "id": 41,
    "patientFullName": "Rafael Oliveira",
    "cpf": "987.654.321-00",
    "procedureQuantity": 1,
    "registrationDateTime": "2025-10-18T14:10:00Z",
    "promiseDate": "2025-10-25",
    "status": "FINALIZADO"
  }
]
```

> 📄 **Paginação padrão:**
>
> * `pageStartIndex = 0`
> * `pageSize = 10`
> * `sort = dataHoraCadastro:desc`


### 🎯 Filtros Disponíveis

| Parâmetro                     | Tipo         | Descrição                                                                  |
| ----------------------------- | ------------ | -------------------------------------------------------------------------- |
| `filtroStatusOrdemServico`    | String       | Filtra por status (`ABERTO`, `EMPROCESSAMENTO`, `FINALIZADO`, `CANCELADO`) |
| `filtroNomePaciente`          | String       | Nome parcial do paciente                                                   |
| `filtroSobrenomePaciente`     | String       | Sobrenome parcial do paciente                                              |
| `filtroNomeCompletoPaciente`  | String       | Nome completo do paciente                                                  |
| `filtroCpfPaciente`           | String       | CPF do paciente                                                            |
| `filtroDataHoraCadastroMin`   | DateTime     | Data/hora mínima de cadastro                                               |
| `filtroDataHoraCadastroMax`   | DateTime     | Data/hora máxima de cadastro                                               |
| `filtroDataPromessaMin`       | Date         | Data mínima da promessa                                                    |
| `filtroDataPromessaMax`       | Date         | Data máxima da promessa                                                    |
| `filtroMnemonicoProcedimento` | List&lt;String&gt; | Lista de identificadores de procedimentos                                  |
| `sort`                        | String       | Campo de ordenação (`dataHoraCadastro`, `dataPromessa`, etc.)              |
| `pageStartIndex`              | Integer      | Índice inicial da página (padrão: 0)                                       |
| `pageSize`                    | Integer      | Tamanho da página (padrão: 10)                                             |

📤 **Exemplo com filtros**

```
GET /api/v2/startshift05/ordemservico?filtroStatusOrdemServico=ABERTO&filtroCpfPaciente=12345678900&filtroDataPromessaMax=2025-11-30
```
## **Contagem de Registros**

**Endpoint:**
`GET /api/v2/startshift05/ordemservico/count`

Retorna a **quantidade total de Ordens de Serviço** considerando os filtros aplicados.
Ideal para uso junto a grids ou paginação dinâmica.

### 📤 Exemplo de uso

```
GET /api/v2/startshift05/ordemservico/count?filtroStatusOrdemServico=ABERTO
```

### 📦 Exemplo de retorno (CountDto)

```json
{
  "totalCount": 128
}
```

## ⚠️ Catálogo de Erros — Códigos e Possíveis Causas

| Código  | Possível Causa                                       |
| ------- | ---------------------------------------------------- |
| **400** | Parâmetros de filtro inválidos ou formato incorreto. |
| **401** | Falta de autenticação ou token inválido.             |
| **500** | Erro interno ao processar a listagem.                |
