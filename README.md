# NextTrack - Plataforma de Gerenciamento de Missões

O NextTrack é uma aplicação web moderna desenvolvida para gerenciar e acompanhar o progresso de missões e tarefas. A plataforma oferece uma interface intuitiva e responsiva, permitindo que os usuários visualizem e completem suas missões de forma eficiente.

> ℹ️ Este projeto foi proposto e desenvolvido como parte de um processo seletivo técnico. Ele demonstra competências em desenvolvimento front-end com foco em boas práticas, responsividade e experiência do usuário.

## 🚀 Tecnologias Utilizadas

- **Next.js 15**: Framework React para desenvolvimento web
- **React 19**: Biblioteca JavaScript para construção de interfaces
- **TypeScript**: Adiciona tipagem estática ao JavaScript
- **Styled Components**: Para estilização com CSS-in-JS
- **Radix UI**: Componentes de UI acessíveis e personalizáveis
- **Jest e React Testing Library**: Para testes unitários e de integração

## 🛠️ Configuração do Ambiente

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone [URL_DO_REPOSITÓRIO]
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
```

4. Acesse a aplicação em [http://localhost:3000](http://localhost:3000)

## 🧪 Executando os Testes

O projeto utiliza Jest e React Testing Library para garantir a qualidade do código. Para executar os testes:

```bash
# Executar todos os testes
npm test

# Executar testes em modo watch
npm run test:watch

# Gerar relatório de cobertura
npm run test:coverage
```

## 🎨 Design e Responsividade

### Design System
- **Cores**: Utilização de uma paleta consistente com tons de azul e verde
- **Tipografia**: Fonte Geist para melhor legibilidade
- **Espaçamento**: Sistema de grid baseado em rem para consistência
- **Componentes**: Design modular e reutilizável

### Responsividade
- **Sidebar**: Colapsa automaticamente em telas menores que 768px
- **Layout**: Adapta-se a diferentes tamanhos de tela
- **Tooltips**: Aparecem em hover quando a sidebar está colapsada

## 📋 Estrutura do Projeto

```
src/
├── app/              # Rotas e páginas
├── components/       # Componentes React
├── data/            # Dados estáticos
├── provider/        # Providers e contexto
├── styles/          # Estilos globais
├── tests/           # Testes
└── types/           # Definições de tipos TypeScript
```

## ➕ Adicionando Novas Missões

Para adicionar novas missões ao sistema:

1. Acesse o arquivo `src/data/missions.tsx`
2. Adicione um novo objeto seguindo a estrutura:

```typescript
{
    id: '6', // ID único
    icon: <NovoIcon />, // Ícone do Radix UI
    iconBg: '#3B82F6', // Cor de fundo do ícone
    title: 'Nova Missão', // Título da missão
    description: 'Descrição da missão', // Descrição detalhada
    status: 'pending' // Status inicial
}
```

## 🔄 Funcionalidades Principais

- **Dashboard de Missões**: Visualização clara de todas as missões
- **Barra de Progresso**: Acompanhamento visual do progresso
- **Sidebar Responsiva**: Navegação intuitiva em qualquer dispositivo
- **Status de Missões**: Marcação de missões como completadas ou pendentes
- **Tooltips Informativos**: Informações adicionais em hover

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
