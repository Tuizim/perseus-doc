
# **Consulta Detalhada por ID**

**Endpoint:**
`GET /api/v2/startshift05/ordemservico/{id}`

Retorna **todos os dados de uma OS específica**, incluindo paciente, procedimentos e valor total calculado.

### 📤 Exemplo de uso

```
GET /api/v2/startshift05/ordemservico/42
Authorization: Bearer <token>
```

### 🧩 Exemplo de Retorno

```json
{
  "id": 42,
  "patient": {
    "id": 554,
    "name": "Luciana Ferreira"
  },
  "registrationDateTime": "2025-10-20T09:32:00Z",
  "changeDateTime": "2025-10-25T14:48:00Z",
  "promiseDate": "2025-11-04",
  "status": "EMPROCESSAMENTO",
  "procedures": [
    {
      "procedure": {
        "id": 131,
        "name": "Limpeza Profunda",
        "deadline": 5,
        "price": 38.38
      }
    },
    {
      "procedure": {
        "id": 148,
        "name": "Reparo Estético",
        "deadline": 10,
        "price": 388.38
      }
    }
  ],
  "totalPrice": 426.76
}
```

> 💡 O campo `totalPrice` é **calculado automaticamente** com base nos procedimentos vinculados.

## ⚠️ Catálogo de Erros — Códigos e Possíveis Causas

| Código    | Possível Causa                                    |
| --------- | ------------------------------------------------- |
| **.0015** | Ordem de Serviço não encontrada (ID inexistente). |
| **400**   | ID inválido ou malformado.                        |
| **401**   | Falta de autenticação ou token inválido.          |
| **500**   | Erro interno ao buscar a Ordem de Serviço.        |
