# 🪶 Guia Rápido – Documentação Perseus

> 💡 Contribuir é simples!  
> Em poucos passos você já pode criar, testar e enviar sua documentação.


## 🚀 1. Iniciando o Projeto

> Faça o fork, clone e rode o projeto localmente ⚡

```bash
git clone https://github.com/seu-usuario/perseusDoc.git
cd perseusDoc
npm install
npm run docs:dev
```

Acesse 👉 **[http://localhost:5173](http://localhost:5173)**

> 💡 Dica: o servidor recarrega automaticamente ao salvar arquivos.


## 📂 2. Crie sua pasta e arquivo

Cada módulo tem sua pasta:

```bash
perseusDoc
└─ OrdemDeServico/
   └─ Introducao.md
```

E dentro:

```md
# 📋 Introdução – Ordem de Serviço
Descrição breve do módulo e suas funcionalidades principais.
```

## 🧭 3. Adicione na Sidebar

No arquivo `.vitepress/config.js`:

```js
{
  text: 'Ordem de Serviço',
  items: [
    { text: 'Introdução', link: '/OrdemDeServico/Introducao' }
  ]
}
```

## 🔁 4. Commit & PR

```bash
git add .
git commit -m "Adiciona doc: Ordem de Serviço"
git push origin main
```

Depois abra um **Pull Request** no GitHub. 🎉

## ✅ Dicas Rápidas

* Use títulos claros e curtos
* Adicione exemplos e fluxos
* Teste antes de enviar (`npm run perseus:dev`)
* Escreva de forma simples e visual

> 🖋 **Documentar é cuidar do futuro do código.**
> Feito com 💜 pela equipe Perseus.