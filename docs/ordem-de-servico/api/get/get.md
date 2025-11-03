# 🔍 GET — Consulta de Ordem de Serviço

A API de consulta oferece **três endpoints principais**, permitindo tanto a listagem paginada quanto o detalhamento completo e a contagem total de Ordens de Serviço.

## 📘 Endpoints Disponíveis

| Método | Endpoint                                        | Descrição                                                   |
| ------- | ------------------------------------------------ | ----------------------------------------------------------- |
| **GET** | `/api/v2/startshift05/ordemservico`             | Retorna lista paginada e filtrável de Ordens de Serviço     |
| **GET** | `/api/v2/startshift05/ordemservico/{id}`        | Retorna os detalhes completos de uma Ordem de Serviço       |
| **GET** | `/api/v2/startshift05/ordemservico/count`       | Retorna a contagem total de Ordens de Serviço (com filtros) |