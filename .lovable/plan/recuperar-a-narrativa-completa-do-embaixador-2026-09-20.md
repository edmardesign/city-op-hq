# Recuperar a narrativa completa do Embaixador

## Objetivo
Reestruturar somente a página `/embaixador` para recuperar a narrativa comercial e a projeção de ganhos da referência enviada, mantendo o design atual do Bora Zé, o topo já aprovado e o cadastro progressivo.

## Alterações
1. Manter no topo exatamente:
   - “Fature R$ 10.000+ por mês com nosso SUPER APP”.
   - “Existe uma grande oportunidade passando na sua frente AGORA. Não abraçá-la vai fazer você se arrepender pelo resto da sua vida.”
2. Manter como segunda seção o bloco “O dinheiro já está circulando. Sua oportunidade é participar desse movimento.”, com as seis categorias e descrições fornecidas: Delivery, Mercado, Farmácia, Gás e água, Bebidas e Moto-táxi.
3. Substituir a narrativa genérica atual pela sequência comercial da referência, adaptada à marca Bora Zé: modelo das grandes plataformas, linha do tempo Uber/iFood, oportunidade local, rede nacional em cidades pequenas e médias, nova economia, perfis indicados, mercado já existente e estrutura entregue ao Embaixador.
4. Remover da página Embaixador qualquer linguagem de “construção de carteira”.
5. Refazer o simulador no mesmo formato funcional da referência, com controles para estabelecimentos ativos e mototaxistas ativos, exibindo GMV de delivery, comissão de delivery, corridas mensais, comissão de mototáxi e faturamento potencial total. As premissas e o caráter estimativo ficarão visíveis.
6. Incluir as seções “duas frentes de receita”, comparativo detalhado entre negócio tradicional e Bora Zé, análise da cidade, segurança da decisão, apresentação do projeto e FAQ ampliado.
7. Não copiar integralmente textos proprietários do site de referência: preservar textos fornecidos pelo usuário, números e estrutura factual, reescrevendo os demais trechos para o Bora Zé sem alterar a intenção comercial.
8. Evitar afirmações não comprovadas como exclusividade, prazo garantido, recompra ou devolução integral; essas condições só serão exibidas se já estiverem confirmadas no projeto. Onde necessário, usar linguagem condicionada à proposta e ao contrato.

## Validação
- Conferir `/embaixador` em desktop e celular.
- Testar os dois controles do simulador e conferir todos os cálculos.
- Testar CTAs, cadastro progressivo, retorno entre etapas e saída para o WhatsApp.
- Confirmar que Executivo, Comércio e Mototáxi permanecem inalterados.
- Confirmar ausência de erros de compilação e execução.

## Detalhes técnicos
- Reaproveitar os componentes e tokens atuais, alterando apenas a página e os blocos do Embaixador.
- Manter os valores derivados do simulador em variáveis calculadas, sem estado duplicado.
- Preservar acessibilidade, navegação por teclado, contraste e redução de movimento.
