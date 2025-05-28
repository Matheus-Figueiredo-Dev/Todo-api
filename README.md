# 📝 To-do API

API RESTful para gerenciamento de tarefas (to-dos), desenvolvida com Node.js, TypeScript e MongoDB. O projeto implementa as operações básicas de CRUD e foi criado com o objetivo de treinar habilidades em back-end e uso de TypeScript.

---

## ⚙️ Tecnologias Utilizadas

- **Node.js** + **Express** — Servidor HTTP
- **TypeScript** — Tipagem estática
- **MongoDB** + **Mongoose** — Banco de dados NoSQL
- **Docker** — Containerização da aplicação
- **CORS** — Controle de acesso entre domínios
- **Nodemon** — Hot reload em desenvolvimento

---

📮 Endpoints da API
Método	Rota	Descrição
GET	/todos	Lista todas as tarefas
POST	/todos	Cria uma nova tarefa
PUT	/todos/:id	Atualiza uma tarefa existente
DELETE	/todos/:id	Remove uma tarefa

🧠 Objetivo
Este projeto foi desenvolvido como parte do meu aprendizado em desenvolvimento back-end com TypeScript, práticas de API REST, integração com MongoDB e uso de containers com Docker.

![image](https://github.com/user-attachments/assets/89fabe6c-2707-483d-a0e6-7d601fe4ee81)

![image](https://github.com/user-attachments/assets/d910b184-bb79-4a3e-a40f-0e190f1c7060)

![image](https://github.com/user-attachments/assets/731de402-e31f-4151-8590-f8b8a0bca3cb)

## 📦 Instalação e Execução

### Pré-requisitos

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [MongoDB ou Docker com MongoDB]

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/todo-api.git
cd todo-api

2. Instale as dependências
npm install

3. Suba o MongoDB com Docker (opcional)
docker-compose up -d
Isso depende do seu docker-compose.yml. Se quiser, me avisa que te ajudo a escrever ele também.

4. Rode o servidor
npm run start
cd todo-api

2. Instale as dependências
npm install

3. Suba o MongoDB com Docker (opcional)
docker-compose up -d
Isso depende do seu docker-compose.yml. Se quiser, me avisa que te ajudo a escrever ele também.

4. Rode o servidor
npm run start
