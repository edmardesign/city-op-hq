# Correção das quatro landings Bora Zé

## Objetivo
Preservar a base atual e corrigir direção comercial, conversão e apresentação das quatro páginas sem recriá-las do zero.

## Implementação
1. **Sistema visual e imagens**
   - Substituir a logomarca atual pela nova marca enviada.
   - Remover todas as imagens antigas renderizadas nas landings e cadastrar os uploads no fluxo de assets do projeto.
   - Usar a peça “negócio inteligente” em evidência apenas nos topos de Executivo e Embaixador.
   - Distribuir as imagens de app, comércio e mototáxi somente nas páginas correspondentes, com crop responsivo e sem filtros.
   - Refinar tipografia, espaços, superfícies, botões e movimentos para uma experiência minimalista, fluida e coerente com a paleta oficial.

2. **Cadastro progressivo compartilhado**
   - Trocar o formulário longo por modal/drawer mobile-first com uma pergunta por etapa, indicador de progresso, voltar sem perder respostas, validação contextual e transições discretas.
   - Adaptar a ordem e os campos por campanha.
   - Preservar UTMs e abrir o WhatsApp oficial `+55 75 8865-3204` com origem e respostas capturadas.

3. **Executivo**
   - Recuperar a venda direta da oportunidade e a conversa em segunda pessoa.
   - Manter a headline “Ganhe com negócios locais sem ser dono de um.”
   - Reorganizar a copy existente para reforçar mercado local, construção de carteira, oportunidade própria e escala, usando as verticais como prova — sem promessa de renda.

4. **Embaixador**
   - Recuperar a sequência persuasiva de oportunidade local: movimento econômico existente → operação digital → plataforma pronta → papel do operador → suporte → múltiplos mercados → qualificação.
   - Manter o novo argumento do dinheiro que já circula como parte da narrativa, não como substituto dela.
   - Deixar investimento aproximado de R$ 10 mil somente na etapa final da qualificação progressiva, com as quatro respostas solicitadas.

5. **Comércio e Mototáxi**
   - Preservar a estrutura curta do Comércio, elevando a persuasão sobre descoberta local, celular como nova porta de entrada e novo canal de pedidos.
   - Tornar Mototáxi orientada a mais chamadas, melhor aproveitamento do tempo e oportunidades de faturamento, sem garantias.
   - Aplicar CTAs e ordens de perguntas exatamente por campanha.

6. **Validação**
   - Testar `/`, `/executivo`, `/embaixador`, `/comercio` e `/mototaxi` em desktop e 360–430 px.
   - Testar abrir/avançar/voltar/validar/finalizar todos os cadastros e conferir mensagens do WhatsApp.
   - Confirmar navegação cruzada somente no rodapé, ausência de imagens antigas visíveis e metadados únicos.
   - Conferir build, tipos, lint e logs do preview.

## Detalhes técnicos
- Manter TanStack Start, componentes e rotas atuais.
- Concentrar o fluxo progressivo no sistema compartilhado para comportamento consistente.
- Usar apenas tokens semânticos no código de interface e manter suporte a redução de movimento.
- Não adicionar banco de dados nem alterar regras de negócio fora do fluxo solicitado.
