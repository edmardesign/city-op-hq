# Plano de Reversão e Adaptação: Executivo Bora Zé (Direct Response)

Este plano visa reverter a landing page para sua estrutura original de alta performance (Direct Response), realizando apenas as alterações cirúrgicas necessárias para pivotar o produto de "Embaixador" para "Executivo Bora Zé", conforme as novas diretrizes.

## Alterações de UI/UX

- **Reversão Estrutural**: Remover seções explicativas excessivas adicionadas recentemente e restaurar a ordem e o ritmo da página original.
- **Hero Section**: Atualizar a headline para uma promessa de faturamento direto: "FATURE R$4.500 POR MÊS COM DELIVERY + COMÉRCIO LOCAL NA SUA CIDADE". Remover menções a "Bora Zé" ou "Executivo" na headline.
- **VSL Vertical (9:16)**: Posicionar o vídeo principal imediatamente abaixo da subheadline, com proporção 9:16 centralizada (tanto desktop quanto mobile).
- **Simulador**: Manter o design e interatividade, mas ajustar a lógica para "Quantidade de Estabelecimentos" e "Vendas Médias", focando no resultado de renda mensal e anual (sem destacar percentuais técnicos).
- **Contador Regressivo**: Implementar na seção de oferta um contador real para 15/09/2026 (America/Bahia).
- **Remoção de Formulário**: Eliminar completamente o formulário de qualificação/candidatura. O fluxo será direto para o checkout.
- **CTAs**: Atualizar todos os botões para ações de compra ("QUERO COMEÇAR AGORA", etc.) e direcionar para a seção de oferta ou checkout.

## Alterações de Conteúdo (Copy)

- **Pivot de Produto**: Substituir "Embaixador" por "Executivo Bora Zé" apenas onde a revelação do produto ocorre naturalmente.
- **Remoção de Exclusividade**: Retirar todas as menções a exclusividade territorial, vagas por município ou "dono da cidade".
- **Narrativa Original**: Preservar a história sobre a nova economia (Uber, iFood, etc.) e a conexão do comércio local.
- **Ocultação de Detalhes Técnicos**: Remover o destaque de "R$97 por ativação" ou percentuais de comissionamento (2,5%, 1%, etc.) da comunicação principal, focando no potencial de ganhos.
- **Seção de Oferta**: Revelar o investimento de R$497 apenas no final da página, listando os benefícios incluídos (treinamento, ferramentas, suporte).

## Detalhes Técnicos

- **Componentes**: Refatorar `Hero`, `VSL`, `Simulator`, `Pricing` e `LandingPage` (assembly).
- **Remoção**: Deletar componentes como `QualificationForm`, `Profiles`, `RulesSection`, `CareerEvolution` e `StatsBar` (se não existiam na original ou se conflitam com o novo fluxo).
- **Navegação**: Ajustar `SiteNav` para refletir o novo fluxo de Direct Response.
- **Timezone**: Garantir que o contador use `new Date("2026-09-15T00:00:00-03:00")` para consistência.
