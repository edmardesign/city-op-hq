# Revisão completa da rota Comércio

## Resultado

Reestruturar somente `/comercio` para explicar rapidamente o aplicativo local Bora Zé, mostrar as categorias atendidas e conduzir o comerciante a um cadastro progressivo próprio. Executivo, Embaixador e Mototáxi continuarão com conteúdo e comportamento atuais.

## Implementação

1. Atualizar hero, seções explicativas, cinco passos, categorias e chamada final com a copy solicitada e o CTA único “Quero colocar meu negócio no Bora Zé”.
2. Criar uma lista compartilhada de categorias de Comércio, usada tanto na página quanto no cadastro, mantendo “Outro” por último.
3. Isolar o cadastro de Comércio em um fluxo de sete etapas: localização conjunta, categoria, estabelecimento, responsável, WhatsApp, e-mail e Instagram opcional.
4. Na localização, usar todas as UFs e carregar os municípios da UF selecionada pela API oficial do IBGE, com estados de carregamento, erro e cidade desabilitada antes da UF.
5. Criar uma função segura exclusiva para Comércio, com validação no navegador e no servidor, captura das UTMs, gravação durável antes da tentativa de e-mail e retorno controlado quando o e-mail estiver indisponível.
6. Criar a tabela `commerce_leads` com validações, índices, permissões apenas de serviço e RLS habilitado.
7. Após salvar, abrir o WhatsApp oficial com somente categoria e cidade, sem dados pessoais ou UTMs.
8. Atualizar os metadados próprios de `/comercio` e validar computador, celular, banco, formulário e regressão dos outros três tipos.

## Detalhes técnicos

- A integração de e-mail usará o sistema transacional seguro do projeto, sem segredos no navegador.
- Como ainda não há domínio remetente configurado, o lead será salvo normalmente e marcado como e-mail pendente/falho; o cadastro não será perdido nem bloqueado.
- A mudança no componente compartilhado será condicionada a `type="comercio"`; os demais tipos manterão passos, validações e destinos existentes.