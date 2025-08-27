# Quintilhano's Forros e Divisórias - Website Institucional

Este é o repositório oficial do website da Quintilhano's Forros e Divisórias. O projeto está sendo desenvolvido com foco em performance, conversão e SEO, utilizando tecnologias web modernas e práticas de automação.

## 🚀 Sobre o Projeto

O objetivo deste projeto é criar um produto digital robusto que sirva como principal canal de captação e apresentação da empresa, seus serviços e portfólio.

## 🛠️ Estrutura do Projeto

O projeto é composto por arquivos estáticos e segue a seguinte estrutura:

- `/index.html`: Landing Page principal.
- `/css/`: Contém as folhas de estilo.
- `/js/`: Contém os scripts JavaScript.
- `/assets/`: Contém imagens e outros ativos de mídia.

##  simulated-ci-cd Pipeline de Build e Deploy (Simulado)

Este projeto está configurado para deploy contínuo no **GitHub Pages**.

### Como Funciona

1.  **Commit & Push:** Qualquer `push` para a branch `main` aciona o pipeline.
2.  **Build (Simulado):** Como o site é estático, não há um passo de "build" complexo. No futuro, este passo poderia incluir minificação de CSS/JS e otimização de imagens.
3.  **Deploy:** O conteúdo da branch `main` é automaticamente publicado no ambiente do GitHub Pages.

### Deploy Manual

Para fazer o deploy manual (ou configurar pela primeira vez):

1.  Vá para a aba **Settings** do repositório.
2.  No menu lateral, clique em **Pages**.
3.  Em **Source**, selecione a branch `main` e a pasta `/ (root)`.
4.  Clique em **Save**. O site estará disponível em `https://<seu-usuario>.github.io/<nome-do-repositorio>/`.
