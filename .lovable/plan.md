# Revisão da página Mototáxi e Entregadores

## Objetivo
Atualizar somente `/mototaxi` e o cadastro `type="mototaxi"` para apresentar as oportunidades de corridas e entregas, preservando integralmente Embaixador, Executivo e Comércio.

## Implementação
- Reescrever o topo e as seções da página com a copy solicitada, incluindo as duas modalidades, o fluxo em seis passos, a explicação de canal adicional e o fechamento com CTA único.
- Criar um cadastro progressivo isolado para profissionais, com seis etapas: localização conjunta, modalidade, nome, WhatsApp, e-mail e Instagram opcional.
- Reutilizar a lista de UFs e a consulta oficial de municípios já usada em Comércio, mantendo cidade bloqueada até a seleção do estado.
- Criar uma função exclusiva para validar e salvar o cadastro antes de qualquer continuação externa.
- Criar a tabela protegida `driver_delivery_leads`, com dados pessoais, modalidade, UTMs e estado de entrega do e-mail.
- Tentar o e-mail no servidor após salvar, usando o mesmo padrão seguro preparado para Comércio; indisponibilidade do envio não perderá o cadastro.
- Abrir o WhatsApp somente com modalidade e cidade, sem dados pessoais ou UTMs.
- Atualizar os metadados de `/mototaxi` para contemplar mototaxistas e entregadores sem prometer renda.

## Validação
- Conferir textos, seis etapas, validações, município dependente da UF e botão final em computador e celular.
- Fazer um cadastro temporário completo, confirmar a gravação e a mensagem limpa do WhatsApp, depois remover o teste.
- Verificar que Embaixador, Executivo e Comércio continuam usando seus fluxos atuais.
- Validar tipos, qualidade do código e preview sem publicar.

## Dependência externa
O cadastro funcionará e será salvo imediatamente. O envio de e-mail ficará com falha controlada até existir um remetente autenticado; usaremos a infraestrutura de e-mail já escolhida para o projeto, sem expor credenciais.
