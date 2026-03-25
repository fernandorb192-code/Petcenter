# Pet Shop Sophia Rações -Especificação Técnica do Projeto

## 1. Visão Geral do Projeto

### Tipo de Projeto
Landing page single-page (página única) responsiva, otimizada para conversão via WhatsApp

### Objetivo Principal
Atrair clientes da região de Pacatuba-CE para o Pet Shop Sophia Rações através de uma presença digital profissional, focando em conversão direta para agendamento de serviços e pedidos de produtos via WhatsApp.

### Público-Alvo
- Donos de pets (cães e gatos) da região de Pacatuba-CE
- Pessoas que buscam atendimento próximo e familiar
- Clientes que valorizam conveniência (delivery de rações)

---

## 2. Identificação do Negócio

### Dados de Contato
| Campo | Valor |
|-------|-------|
| Nome Fantasia | Pet Shop Sophia Rações |
| WhatsApp | (85) 98516-3685 |
| Link WhatsApp | https://wa.me/5585985163685 |
| Instagram | @petshopsophiaracoes |

### Endereço
- Rua: Dr. Almir Pinto, 331
- Bairro: Centro
- Cidade: Pacatuba-CE
- CEP: 61800-000
- Ponto de Referência: Próximo ao Comercial Izaquiel

### Horário de Funcionamento
- Segunda a Sexta: 08:00 às 18:00
- Sábado: 08:00 às 12:00
- Domingo: Fechado

---

## 3. Seções do Site

### 3.1 Header (Cabeçalho)
- Logo do petshop (texto estilizado caso não tenha imagem)
- Navegação suave entre seções
- Botão CTA WhatsApp
- Menu hamburger mobile

### 3.2 Hero Section
- Banner principal com imagem de pets felizes
- Headline de impacto: "Cuidamos do seu pet com amor e dedicação"
- Subtítulo destacando atendimento familiar
- Botão flutuante "Falar no WhatsApp"
- Indicador de horário de funcionamento

### 3.3 Sobre Nós
- Apresentação do atendimento familiar e de proximidade
- Diferenciais: atenção personalizada, prova social (fotos de clientes)
- Localização privilegiada

### 3.4 Serviços
4 Cards com ícones e descrições:
1. **Banho e Tosa** - Limpeza completa, tosa higiênica e estética
2. **Delivery** - Entrega de rações e produtos em domicílio
3. **Farmácia Veterinária** - Medicamentos, vermífugos, antipulgas
4. **Consultoria em Nutrição** - Indicação da melhor ração por fase

Cada card com:
- Ícone representativo
- Título do serviço
- Breve descrição
- Botão "Agendar via WhatsApp"

### 3.5 Produtos
Seção de catálogo visual:
- **Rações** - Cães e Gatos (Magnus, Golden, Special Dog, GranPlus)
- **Acessórios** - Guias, coleiras, peitorais, comedouros
- **Higiene** - Shampoos, perfumes, tapetes higiênicos, areia
- **Petiscos** - Bifinhos, ossinhos, snacks
- **Brinquedos** - Bolinhas, mordedores, pelúcias

Cards de categoria com imagens ilustrativas e botão "Ver via WhatsApp"

### 3.6 Prova Social / Galeria
Grid de fotos de pets "clientes" após banho e tosa (como no Instagram)
- Fortalece confiança e aproximação
- Label: "Nossos clientes felices"

### 3.7 Localização
- Mapa incorporado do Google Maps
- Endereço completo
- Como chegar (ponto de referência)
- Botão "Abrir no Google Maps"

### 3.8 Footer (Rodapé)
- Logo e descrição breve
- Links rápido
- Redes sociais (Instagram)
- Horário de funcionamento
- Copyright

---

## 4. Funcionalidades WhatsApp-Integradas

### 4.1 Botão Flutuante WhatsApp
- Posição: Canto inferior direito
- Ícone do WhatsApp com animação de pulse
- Sempre visível durante scroll
- Abre link direto: https://wa.me/5585985163685

### 4.2 CTAs por Seção
Cada seção com botão específico que abre WhatsApp com mensagem pré-preenchida:

| Seção | Mensagem Padrão |
|-------|-----------------|
| Hero | "Olá! Gostaria de saber mais sobre os serviços do Pet Shop Sophia" |
| Banho/Tosa | "Olá! Gostaria de agendar banho e tosa para meu pet" |
| Delivery | "Olá! Gostaria de fazer um pedido de ração/produtos via delivery" |
| Farmácia | "Olá! Gostaria de informações sobre medicamentos/vermífugos" |
| Produtos | "Olá! Gostaria de saber mais sobre os produtos disponíveis" |

### 4.3 Mensagens Personalizáveis
Script que preenche automaticamente:
- URL com parâmetros de mensagem
- Codificação UTF-8 para caracteres especiais
-Fallback para链接 direto caso não funcione

---

## 5. Design Visual

### 5.1 Paleta de Cores
| Uso | Cor | Hex |
|-----|-----|-----|
| Primária | Laranja Amigável | #FF8C42 |
| Secundária | Azul Confiança | #4A90D9 |
| Acento | Verde Vida | #2ECC71 |
| Fundo Claro | Cream | #FFF8F0 |
| Fundo Escuro | Cinza Escuro | #2C3E50 |
| Texto | Charcoal | #333333 |
| Branco | White | #FFFFFF |

### 5.2 Tipografia
- **Headlines**: Poppins (bold, semi-bold)
- **Corpo de texto**: Open Sans (regular, medium)
- **Tamanhos**:
  - H1: 48px (mobile: 32px)
  - H2: 36px (mobile: 24px)
  - H3: 24px (mobile: 20px)
  - Body: 16px
  - Small: 14px

### 5.3 Espaçamento
- Section padding: 80px vertical (mobile: 40px)
- Container max-width: 1200px
- Grid gap: 24px
- Border radius cards: 16px
- Border radius buttons: 50px (pill shape)

### 5.4 Efeitos Visuais
- Sombras suaves nos cards: 0 4px 20px rgba(0,0,0,0.08)
- Hover nos cards: translateY(-8px) com transição 0.3s
- Gradiente sutil no hero: overlay com rgba(0,0,0,0.3)
- Ícones com efeito de scale no hover

---

## 6. Requisitos Técnicos

### 6.1 Estrutura de Arquivos
```
/sitepetshop
├── index.html          (página principal)
├── css/
│   └── styles.css      (estilos principais)
├── js/
│   └── main.js         (scripts e interações)
├── assets/
│   ├── images/         (imagens do projeto)
│   └── icons/          (ícones SVG)
└── SPEC.md             (esta especificação)
```

### 6.2 Tecnologias
- HTML5 semântico
- CSS3 com variáveis customizadas
- JavaScript vanilla (sem frameworks)
- Fontes: Google Fonts (Poppins, Open Sans)
- Ícones: Font Awesome ou SVG inline
- Animações: CSS transitions + keyframes

### 6.3 Responsividade
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px
- Grid adaptativo: 1 coluna mobile, 2 tablet, 3-4 desktop

### 6.4 Performance
- Lazy loading de imagens
- CSS minimizado
- Imagens otimizadas (WebP com fallback)
- CDN para fonts/icons

---

## 7.SEO On-Page

### 7.1 Meta Tags
```html
<title>Pet Shop Sophia Rações - Banho, Tosa e Delivery em Pacatuba-CE</title>
<meta name="description" content="Pet Shop Sophia Rações em Pacatuba-CE. Banho e tosa, delivery de rações, farmácia veterinária e acessórios para cães e gatos. Agende pelo WhatsApp!">
<meta name="keywords" content="pet shop, banho e tosa, ração, delivery, pacatuba, ceará, petshop">
<meta property="og:title" content="Pet Shop Sophia Rações - Cuidamos do seu pet com amor">
<meta property="og:description" content="Banho, tosa, ração e acessórios para cães e gatos em Pacatuba-CE">
<meta property="og:image" content="assets/images/og-image.jpg">
```

### 7.2 Estrutura semântica
- Header > nav
- Main > section (com IDs para ancora)
- Footer

### 7.3 Links importantes
- Schema.org LocalBusiness
- Google My Business (futuro)

---

## 8. Funcionalidades JavaScript

### 8.1 Smooth Scroll
Navegação suave entre seções com offset do header fixo

### 8.2 WhatsApp Link Generator
Função que gera links com mensagem pré-preenchida:
```javascript
function openWhatsApp(message) {
  const phone = '5585985163685';
  const text = encodeURIComponent(message);
  window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
}
```

### 8.3 Mobile Menu
Toggle do menu hamburger com animação

### 8.4 Animação no Scroll
Elementos surgem com fade-in ao rolar a página (Intersection Observer)

### 8.5 Validação de Formulário
Se houver formulário de contato (opcional):
- Validação de campos
- Feedback visual
- Prevenção de submit inválido

---

## 9. Imagens Necessárias

### 9.1 Imagens Principais
| Imagem | Uso | Tamanho recomendado |
|--------|-----|---------------------|
| Hero BG | Banner principal | 1920x1080 |
| Logo | Header | 200x80 |
| Pet banho 1 | Galeria/prova social | 400x400 |
| Pet banho 2 | Galeria/prova social | 400x400 |
| Pet banho 3 | Galeria/prova social | 400x400 |
| Pet banho 4 | Galeria/prova social | 400x400 |
| Pet banho 5 | Galeria/prova social | 400x400 |
| Pet banho 6 | Galeria/prova social | 400x400 |

### 9.2 Ícones (SVG ou Font Awesome)
- 🐕 Ícone banho/tosa
- 🚚 Ícone delivery
- 💊 Ícone farmácia
- 🍖 Ícone ração
- 📍 Ícone localização
- ⏰ Ícone horário

---

## 10. Cronograma de Desenvolvimento

### Fase 1: Estrutura (HTML)
- [ ] Criar index.html com todas as seções
- [ ] Adicionar meta tags SEO
- [ ] Configurar Google Fonts
- [ ] Integrar Font Awesome

### Fase 2: Estilização (CSS)
- [ ] Definir variáveis CSS
- [ ] Reset e base styles
- [ ] Estilizar header e navegação
- [ ] Estilizar hero section
- [ ] Estilizar cards de serviços
- [ ] Estilizar catálogo de produtos
- [ ] Estilizar galeria
- [ ] Estilizar footer
- [ ] Tornar responsivo
- [ ] Adicionar animações

### Fase 3: Funcionalidades (JS)
- [ ] Implementar smooth scroll
- [ ] Configurar links WhatsApp
- [ ] Criar menu mobile
- [ ] Adicionar animações scroll
- [ ] Testar todas as interações

### Fase 4: Revisão e Otimização
- [ ] Testar em múltiplos dispositivos
- [ ] Verificar acessibilidade
- [ ] Validar links WhatsApp
- [ ] Otimizar imagens
- [ ] Testar performance

---

## 11. Critérios de Sucesso

### 11.1 Funcionalidade
- [ ] Todos os botões WhatsApp redirecionam corretamente
- [ ] Site funciona em mobile, tablet e desktop
- [ ] Navegação suave entre seções
- [ ] Menu mobile abre/fecha corretamente
- [ ] Mapa carrega corretamente

### 11.2 Design
- [ ] Cores seguem paleta especificada
- [ ] Tipografia legível em todos tamanhos
- [ ] Espaçamento consistente
- [ ] Animações suaves
- [ ] Imagens carregam e têm qualidade

### 11.3 Conversão
- [ ] Botão WhatsApp sempre visível
- [ ] CTAs claros e atrativos
- [ ] Informações de contato visíveis
- [ ]Localização fácil de encontrar
- [ ]Horário de funcionamento claro

---

## 12. Próximos Passos

1. Aprovar especificação técnica
2. Obter/criar imagens do petshop
3. Confirmar logo (ou criar alternativa textual)
4. Iniciar implementação (modo Code)
5. Testar e validar
6. Publicar

---

*Especificação criada em: 2026-03-24*
*Projeto: Pet Shop Sophia Rações - Site de Conversão*
