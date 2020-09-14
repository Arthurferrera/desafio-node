const express = require('express');

const server = express();

server.use(express.json());

let numberRequests = 0;
const projects = [];

// Middleware que checa se o projeto existe
function checkProjectExists(req, res, next) {
  const { id } = req.params;
  const project = projects.find(p => p.id == id);
  
  if (!project) {
    return res.status(400).json({ error: 'Project not found' });
  }

  return next();
}

// Middleware que dá log no número de requisições
function logRequests(req, res, next) {
  numberRequests++;
  console.log(`Número de requisições: ${numberRequests}`);
  return next();
}

// Chamando o middleware global
server.use(logRequests);

// Listagem de todos os projetos
server.get('/projects', (req, res) => {
  return res.json(projects);
});

// Listagem de um projeto, validando se existe pelo middleware
server.get('/projects/:id', checkProjectExists, (req, res) => {
  const { id } = req.params;
  const project = projects.find(p => p.id == id);

  return res.json(project);
});

// Criação de um novo projeto
server.post('/projects', (req, res) => {
  const { id, title } = req.body;

  const project = {
    id,
    title,
    tasks: []
  };

  projects.push(project);
  
  return res.json(projects);
});

// Atualizando o titulo de um projeto, utilizando o middleware que verifica se o
// projeto existe
server.put('/projects/:id', checkProjectExists, async (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  
  const project = projects.find(p => p.id == id);

  project.title = title;

  return res.json(project);
});

// Deletando um projeto do array, utilizando o middleware que verifica se o
// projeto existe
server.delete('/projects/:id', checkProjectExists, async (req, res) => {
  const { id } = req.params;

  const projectIndex = projects.findIndex(p => p.id == id);
  projects.splice(projectIndex, 1);

  return res.send();
});

// Adicionando um Task em um projeto
server.post('/projects/:id/tasks', checkProjectExists, async (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(p => p.id == id);
  project.tasks.push(title);

  return res.json(project);
});

server.listen(3000);