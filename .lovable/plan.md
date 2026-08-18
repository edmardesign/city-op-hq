# Plano de Transformação: EXECUTIVO BORA ZÉ

Redesenhar a landing page atual (Embaixador) para o novo produto **EXECUTIVO BORA ZÉ**, focando em expansão comercial e receita recorrente, mantendo o alto padrão visual e tecnológico.

## 🏗️ UI Architect

- **Hero & Cabeçalho**:
  - Inserir **Banner de Pré-lançamento** no topo com contador regressivo real para 15/09/2026 (Timezone America/Bahia).
  - Atualizar `SiteNav` e `SiteFooter`: remover "Quero minha cidade" por "QUERO SER EXECUTIVO".
  - Refatorar `Hero`: Headline "TRANSFORME O COMÉRCIO LOCAL EM UMA CARTEIRA DE RENDA RECORRENTE". Adicionar indicadores de R$97 (ativação), 2,5% (vendas) e R$497 (adesão).
- **Novas Seções**:
  - **Grande Ideia**: "Você não precisa ser dono do restaurante para ganhar". Cards visuais de Restaurante, Farmácia, Mercado, etc.
  - **Como Funciona**: 4 passos (Torne-se Executivo -> Encontre Negócios -> Ative -> Construa Carteira).
  - **Lógica dos Primeiros 5**: Comparativo visual entre R$497 (adesão) e R$485 (5 ativações).
  - **Visualização de Carteira**: Cards simulando ganhos recorrentes de estabelecimentos reais (Restaurante do João, etc.).
  - **Painel do Executivo**: Mockup premium mostrando métricas de carteira, comissões e status.
  - **Regra 6 em 90**: Seção explicativa com barra de progresso visual.
- **Simulador de Ganhos**:
  - Criar `PortfolioSimulator`: Sliders para "Qtd Estabelecimentos" (5-100) e "Venda Média" (R$2k-R$30k).
  - Toggle de período: 1º Ano (2,5%), 2º Ano (1%), 3º Ano+ (0,5%).
- **Formulário**:
  - Atualizar `QualificationForm`: Novos campos focados em vendas e potencial de ativação. Remover campos de capital para licença territorial.

## 🗄️ Supabase Engineer (Lovable Cloud)

- **Tabela de Leads**:
  - Tabela `executive_leads` com: nome, whatsapp, email, estado, cidade, experiência comercial, potencial_90d, data_inicio.
  - RLS: Apenas `service_role` (via server function) ou permissões restritas.
- **Persistência**:
  - Integrar formulário com Lovable Cloud para garantir que leads não sejam perdidos.

## 🔍 Code Auditor

- **Remoção de Legado**: Varredura completa para remover termos proibidos ("posse da cidade", "exclusividade", "vaga por município", "50% da receita").
- **Tipagem**: Garantir que novos estados do simulador e formulário sejam estritamente tipados.
- **Performance**: Contador regressivo deve ser eficiente e não causar re-renders desnecessários.

## 📈 SEO Optimizer

- **Metadados**: Atualizar título e descrição para foco em "Executivo Bora Zé" e "Renda Recorrente com Comércio Local".
- **JSON-LD**: Atualizar esquema de Produto/Serviço.

## 🚀 Deploy Ops

- **Validação**: Testar contador regressivo em diferentes fusos horários (forçando America/Bahia).
- **Build**: Garantir que a ocultação automática pós-contagem funcione.

---
### Detalhes Técnicos

- **Contador**: Utilizar `useEffect` com `setInterval` e data absoluta `new Date("2026-09-15T00:00:00-03:00")`.
- **Estilos**: Manter `oklch` para cores e tokens semânticos `var(--neon)`, `var(--violet)`.
- **Imagens**: Reutilizar `heroEcosystem`, `interfaceControl` e `platformEconomy` onde a narrativa ainda fizer sentido.
