# 🏗️ Introdução

A **Ordem de Serviço (OS)** é o **núcleo central da aplicação**, sendo o ponto de integração entre **Paciente** e **Procedimentos**.  
Ela representa o registro operacional de uma ação executada sobre um paciente, agrupando informações essenciais como **data de criação**, **status**, **prazo de execução**, e **valores associados** aos procedimentos.

A OS é o **elemento central de negócio** sendo o quem relaciona **Paciente** e **Procedimento**.

## 🧭 Contexto Funcional

A **Ordem de Serviço (OS)** é criado pelo atendente sempre que um paciente precisa realizar um procedimento.  
Ela representa o **vínculo formal entre o paciente e os serviços realizados**, armazenando informações sobre:

- O **paciente responsável**;
- Os **procedimentos associados**;
- O **status atual** (aberto, em processamento, finalizado, cancelado);
- O **prazo prometido** de execução;
- E as **datas de criação e atualização**, garantindo rastreabilidade completa.

Em termos operacionais, a OS é o **ponto de partida para todo o ciclo de execução** — desde o cadastro inicial até o encerramento do atendimento.  


## 🧠 Objetivo da Entidade

> Garantir a **integração entre pacientes e procedimentos**, permitindo a **gestão centralizada dos atendimentos** com controle de status, histórico e valores.

## 🧩 Estrutura de Banco de Dados

### 🧍‍♂️ Relação com Paciente

Cada Ordem de Serviço está associada a **um paciente** por meio de uma **chave estrangeira (Foreign Key)**.


| Campo               | Tipo     | Obrigatório | Descrição                                                                   |
| ------------------- | -------- | ----------- | --------------------------------------------------------------------------- |
| `PacienteId`        | Integer  | ✅           | Identifica o paciente vinculado à OS                                        |
| `DataPromessa`      | Date     | ✅           | Data prometida para conclusão do serviço                                    |
| `Status`            | String   | ✅           | Estado atual da OS (`ABERTO`, `EMPROCESSAMENTO`, `FINALIZADO`, `CANCELADO`) |
| `DataHoraCadastro`  | DateTime | ✅           | Momento em que a OS foi criada                                              |
| `DataHoraAlteracao` | DateTime | ✅           | Última atualização no registro                                              |


### 🧾 Relação com Procedimentos

Como uma **Ordem de Serviço pode conter vários procedimentos**, e um **procedimento pode estar presente em várias ordens**, temos aqui uma relação **N:N (muitos para muitos)**.
Para representar isso, utiliza-se uma **tabela intermediária de ligação** (`OrdemProcedimento`).


| Campo               | Tipo                  | Obrigatório | Descrição                                |
| ------------------- | --------------------- | ----------- | ---------------------------------------- |
| `OsId`              | Integer               | ✅           | ID da Ordem de Serviço                   |
| `ProcedimentoId`    | Integer               | ✅           | ID do Procedimento vinculado             |
| `PrazoProcedimento` | Integer (0–90)        | ✅           | Prazo máximo de execução do procedimento |
| `ValorProcedimento` | Decimal (0.00–999.99) | ✅           | Valor monetário do procedimento          |
