# Campanha Executivo BoraZé! 2026

## Objetivo
Atualizar somente a experiência pública do Executivo, mantendo Comércio, Mototáxi e Embaixador intactos. O domínio `embaixador.boraze.app.br` já entrega a página Executivo publicada; a implementação continuará isolada na rota `/executivo`, sem alterar a página inicial de Parceiros.

## Implementação
- Reescrever todas as seções de `ExecutivePage` com a campanha 2026 e a nomenclatura “Executivo BoraZé!” / “Super App”.
- Preservar o desenho, a imagem principal, a paleta, fontes e ritmo visual atuais; remover somente os CTAs do cabeçalho e do topo nessa página.
- Substituir o simulador por um bloco útil sobre atuação online, atuação presencial e treinamento, sem projeção de ganhos.
- Adicionar FAQ curta e transparente sobre experiência, trabalho remoto, visitas, comunidade gratuita e ganhos variáveis.
- Criar o fechamento único com contador regressivo fixo para `2026-10-20T00:00:00-03:00`, estados acessíveis e CTA único abaixo do contador.
- Após a data, substituir o contador pela mensagem “Acompanhe o lançamento na comunidade”, sem sugerir checkout aberto.

## Cadastro Executivo
- Criar um formulário progressivo exclusivo do Executivo, preservando uma pergunta por tela, progresso, voltar e valores após falha.
- Etapas exatas: nome, WhatsApp com DDD e melhor e-mail.
- Exibir consentimento claro para receber avisos do lançamento, sem adicionar etapa ou campo de qualificação.
- Validar no navegador e no servidor, bloquear envio duplicado e só mostrar sucesso após persistência confirmada.
- No sucesso, mostrar “Falta só entrar na comunidade!” e o botão para o grupo oficial; não abrir conversa individual nem afirmar que a pessoa já entrou.

## Banco e notificação
- Criar e aplicar `executive_launch_leads` com UUID, data, nome, telefone normalizado, e-mail, campanha fixa, consentimento, UTMs e estado da notificação.
- Manter a tabela privada: acesso somente pelo servidor, RLS ativo, sem leitura pública e com permissão apenas para `service_role`.
- Salvar o lead antes de tentar o e-mail; registrar `sent`, `failed` ou `pending_configuration` para reenvio posterior.
- Reutilizar o padrão de envio existente com assunto exato `EXECUTIVO BORAZÉ 2026` e corpo contendo nome, telefone, e-mail, data e origem.
- Não inventar remetente ou credenciais. Hoje não há uma conexão Resend disponível; o cadastro continuará funcionando e ficará como pendente se essa configuração permanecer ausente.

## Verificação
- Confirmar o domínio público e a rota `/executivo`, sem publicar alterações.
- Validar página e contador em desktop e celular.
- Testar o modal completo, validações, bloqueio de duplo envio, preservação após erro e tela final da comunidade.
- Fazer um cadastro sintético identificado, confirmar persistência e estado real do e-mail, e remover apenas esse registro de teste.
- Verificar regressões em `/`, `/comercio`, `/mototaxi` e `/embaixador`.
- Conferir tipos, testes aplicáveis e build final.

## Detalhes técnicos
- Componentes compartilhados receberão opções explícitas para ocultar CTA do cabeçalho/topo apenas no Executivo; os padrões das outras campanhas não mudam.
- O contador usará relógio absoluto, limite mínimo zero e tratamento específico para hidratação e preferência por movimento reduzido.
- A função de submissão será exclusiva do Executivo e executada no servidor, com validação Zod e acesso privilegiado carregado apenas dentro do handler.
