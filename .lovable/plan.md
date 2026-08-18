# Plano de Transformação - Executivo Bora Zé (Direct Response)

Este plano detalha a revisão completa da landing page para o produto **Executivo Bora Zé**, focando na remoção de elementos legados do modelo "Embaixador" (especialmente o módulo de Mototáxi e exclusividade territorial) e na implementação de uma narrativa de Resposta Direta baseada na construção de carteira de estabelecimentos locais.

## Alterações de Conteúdo e Narrativa

### 1. Limpeza Global de Termos Legados
- Remover todas as referências a: mototáxi, mototaxista, corridas, entregas expressas, comissão por corrida, moto delivery.
- Remover termos do modelo antigo: exclusividade municipal, dono da cidade, licença territorial, 50% de lucro.
- Adaptar o FAQ para reforçar a inexistência de exclusividade, focando na liberdade comercial do Executivo.

### 2. Nova Seção: "Ganhar sem ser dono" (Desejo e Curiosidade)
- Implementar uma seção visual premium com a headline: "E SE VOCÊ PUDESSE GANHAR COM TUDO ISSO... SEM PRECISAR SER DONO DE NADA DISSO?".
- Exemplos visuais (Imagem + Frase curta):
    - **Farmácia**: Ganhar com medicamentos sem abrir farmácia.
    - **Gás**: Ganhar com botijões sem ter distribuidora.
    - **Restaurantes**: Ganhar com pedidos sem cozinha ou estoque.
    - **Pet Shop**: Ganhar com produtos pet sem abrir loja.
    - **Mercado**: Ganhar com compras sem possuir mercado.

### 3. Refatoração da Narrativa da "Nova Economia"
- Conectar a lógica de Uber/Airbnb/iFood com a oportunidade local.
- Frase de destaque: "A OPORTUNIDADE NÃO ESTÁ EM ABRIR CADA UM DESSES NEGÓCIOS. ESTÁ EM PARTICIPAR DA CONEXÃO ENTRE QUEM VENDE E QUEM COMPRA."

### 4. Ajuste do Mecanismo e Revelação
- Atrasar a revelação do nome "Bora Zé" até que a curiosidade sobre a participação financeira no comércio local esteja estabelecida.
- Definir o Executivo como quem "ajuda estabelecimentos a entrarem na plataforma e constrói sua própria carteira".
- Remover menções técnicas precoces (R$ 97, percentuais, tabelas de comissionamento) antes da oferta final.

### 5. Atualização do Simulador
- Remover variáveis de mototáxi/corridas.
- Focar exclusivamente na carteira de estabelecimentos.

## Detalhes Técnicos

- **Componentes**: 
    - Excluir `DualRevenue` (que continha o módulo mototáxi).
    - Criar `PortfolioOpportunity` (nova seção de desejo).
    - Atualizar `Market` e `Simulator` para remover referências a mototaxistas.
- **Ordem das Seções**: `Hero` -> `Authority` -> `EconomyNarrative` -> `PortfolioOpportunity` -> `ConnectionInsight` -> `MechanismRevelation` -> `HowItWorks` -> `Benefits` -> `Market` -> `Simulator` -> `Comparison` -> `Pricing` -> `Guarantee` -> `FAQ`.
- **Estilo**: Manter o tema "Neon/Cyber/Premium" original, usando tokens semânticos e Tailwind v4.

## Verificação e Auditoria
- Scan final em todo o projeto por palavras-chave proibidas.
- Teste de responsividade da nova seção visual.
- Validação do fluxo de botões para a seção de oferta (`#oferta`).
