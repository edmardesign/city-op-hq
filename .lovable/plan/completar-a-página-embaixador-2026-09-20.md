# Completar a página Embaixador

## Objetivo
Adicionar à landing Embaixador as seções mostradas nos prints de referência, sem alterar as outras páginas, o topo já aprovado ou o cadastro progressivo.

## Implementação
1. Reorganizar a narrativa após o topo na sequência: oportunidade existente, modelo das empresas mais valiosas, evolução do mercado digital, rede nacional para cidades pequenas e médias, papel do Embaixador e estrutura entregue.
2. Adicionar simulador interativo de faturamento com premissas visíveis, valores tratados como estimativas e aviso de que resultados variam.
3. Criar blocos para benefícios, perfis indicados, comparação negócio tradicional × Bora Zé e indicadores principais (R$ 10.000+, uma vaga por cidade e operação digital).
4. Adicionar uma seção de segurança da decisão, sem promessa absoluta, e ampliar o FAQ com investimento, suporte, operação, cidade e resultados.
5. Manter as imagens oficiais já cadastradas, o visual preto/verde minimalista, os CTAs abrindo o fluxo progressivo e a informação de investimento apenas na etapa final da qualificação.

## Validação
- Conferir a página `/embaixador` em desktop e celular.
- Testar simulador, FAQ, CTAs, fluxo de perguntas e saída para o WhatsApp.
- Confirmar que Executivo, Comércio e Mototáxi não foram alterados e que o preview permanece sem erros.

## Detalhes técnicos
- Implementar em componentes pequenos e reutilizáveis, usando os tokens visuais existentes.
- Não incorporar os prints como imagens; reproduzir seu conteúdo em elementos acessíveis e responsivos.
- Evitar garantias de faturamento: os números serão apresentados como potencial condicionado à operação local.
