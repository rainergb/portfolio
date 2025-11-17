# Regras do Projeto - Portf�lio

## 1. Componentiza��o
- **Tudo deve ser componentizado**
- Cada elemento da interface deve ser um componente reutiliz�vel
- Componentes devem ser pequenos, focados e com responsabilidade �nica
- Evitar c�digo duplicado atrav�s da componentiza��o adequada

## 2. Tipagem
- **Tudo deve ser tipado**
- Utilizar TypeScript em todos os arquivos
- Definir interfaces e tipos para todas as props, states e funções
- Evitar uso de `any` - preferir tipos específicos ou `unknown` quando necessário
- **Todas as tipagens devem estar organizadas na pasta `types`**
- Exportar tipos e interfaces para reutilização
