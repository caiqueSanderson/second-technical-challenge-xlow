# 🛍️ Desafio Técnico II - Processo Seletivo XLOW 2024 

## 🚀 Descrição do Desafio 

Este projeto tem como objetivo a criação de um **Slider de Imagens** em React com as seguintes funcionalidades:

- **Rolagem infinita**: O slider permite que as imagens sejam apresentadas em loop contínuo, sem interrupções.
- **Rolagem automática**: O slider muda de imagem automaticamente em intervalos regulares.
- **Setas de navegação**: O usuário pode navegar entre as imagens utilizando setas para a esquerda e para a direita.
- **Bolinhas clicáveis**: Pequenos indicadores de navegação (bolinhas) que permitem ao usuário clicar e navegar diretamente para a imagem correspondente.

## Funcionalidades

- **Imagens**: As imagens são adicionadas ao Slider por meio de um **array de objetos**, contendo as seguintes informações:
  - **URL**: O link da imagem.
  - **ALT**: Texto alternativo para a imagem.
  - **LINK**: Um hyperlink que redireciona o usuário quando clicado na imagem.

## Como Funciona

O Slider é criado em React e exibe uma lista de imagens dinamicamente com base nos dados fornecidos. A navegação pode ser feita de forma manual com as setas ou de forma automática, com as bolinhas clicáveis permitindo que o usuário navegue diretamente para uma imagem específica.

### Estrutura de Dados

As imagens são fornecidas através de um array de objetos com a seguinte estrutura:

```
    const images = [
    {
        url: 'https://linkdaimagem.com/imagem1.jpg',
        alt: 'Texto alternativo para a imagem 1',
        link: 'https://linkdavidao.com/imagem1'
    },
    {
        url: 'https://linkdaimagem.com/imagem2.jpg',
        alt: 'Texto alternativo para a imagem 2',
        link: 'https://linkdavidao.com/imagem2'
    },
    // Adicione mais imagens conforme necessário
    ];
```

## 📜 Como executar o projeto

### 1️ Clone este repositório:
```
git clone https://github.com/caiqueSanderson/second-technical-challenge-xlow.git
```

### 2️ Instale as dependências:

#### Navegue até o diretório do projeto e instale as dependências:
```
cd desafio-slider
npm install
```

### 3 Execute o projeto:
```
npm run dev
```

## 🛠️ Tecnologias Usadas
- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Vite**: Ferramenta de build para projetos modernos em JavaScript.
- **CSS**: Estilização do Slider e dos componentes.
- **JavaScript**: Lógica para a rolagem automática e navegação.

## Licença

#### Este projeto está licenciado sob a licença MIT - veja o arquivo LICENSE para mais detalhes.

