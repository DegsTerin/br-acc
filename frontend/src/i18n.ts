import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  "pt-BR": {
    translation: {
      app: {
        title: "ICARUS",
        subtitle: "Ferramenta de análise de dados públicos brasileiros",
        disclaimer:
          "Dados de registros públicos. Não constitui acusação.",
      },
      nav: {
        search: "Buscar",
        graph: "Grafo",
        investigations: "Investigações",
      },
      search: {
        placeholder: "CPF, CNPJ ou nome...",
        button: "Buscar",
        noResults: "Nenhum resultado encontrado.",
        filterType: "Filtrar tipo",
        typeAll: "Todos",
        error: "Erro ao buscar. Tente novamente.",
      },
      entity: {
        person: "Pessoa",
        company: "Empresa",
        contract: "Contrato",
        finance: "Financeiro",
        sanction: "Sanção",
        election: "Eleição",
        publicOffice: "Cargo Público",
        legal: "Jurídico",
        health: "Saúde",
        environment: "Ambiental",
        labor: "Trabalhista",
        education: "Educação",
        regulatory: "Regulatório",
        property: "Patrimônio",
        detail: "Detalhes da Entidade",
      },
      graph: {
        depth: "Profundidade",
        entityTypes: "Tipos de entidade",
        noData: "Nenhum dado de grafo disponível.",
      },
      common: {
        source: "Fonte",
        confidence: "Confiança",
        connections: "conexões",
        sources: "fontes",
        loading: "Carregando...",
      },
    },
  },
  en: {
    translation: {
      app: {
        title: "ICARUS",
        subtitle: "Brazilian public data analysis tool",
        disclaimer:
          "Data patterns from public records. Not accusations.",
      },
      nav: {
        search: "Search",
        graph: "Graph",
        investigations: "Investigations",
      },
      search: {
        placeholder: "CPF, CNPJ, or name...",
        button: "Search",
        noResults: "No results found.",
        filterType: "Filter type",
        typeAll: "All",
        error: "Search failed. Please try again.",
      },
      entity: {
        person: "Person",
        company: "Company",
        contract: "Contract",
        finance: "Finance",
        sanction: "Sanction",
        election: "Election",
        publicOffice: "Public Office",
        legal: "Legal",
        health: "Health",
        environment: "Environment",
        labor: "Labor",
        education: "Education",
        regulatory: "Regulatory",
        property: "Property",
        detail: "Entity Detail",
      },
      graph: {
        depth: "Depth",
        entityTypes: "Entity types",
        noData: "No graph data available.",
      },
      common: {
        source: "Source",
        confidence: "Confidence",
        connections: "connections",
        sources: "sources",
        loading: "Loading...",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "pt-BR",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
