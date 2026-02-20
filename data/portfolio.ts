export interface Skill {
  name: string;
  category: string;
}

export interface Project {
  name: string;
  githubLink: string;
  technologies: string;
  description: string;
  features: string[];
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  responsibilities: string[];
}

export interface Certification {
  name: string;
  institution: string;
  date: string;
  details?: string;
}

export interface Education {
  degree: string;
  institution: string;
  details: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  summary: string;
  contact: {
    email: string;
    phone: string;
    linkedin: string;
    github: string;
  };
  education: Education[];
  skills: Skill[];
  projects: Project[];
  experience: Experience[];
  certifications: Certification[];
  languages: { name: string; level: string }[];
}

export const portfolioData: PortfolioData = {
  name: "JHONATA JANSEN",
  title: "Desenvolvedor Backend Java | Spring Boot | SQL | Docker | AWS | APIs REST",
  summary:
`
Desenvolvedor Java com mais de 3 anos e meio de experiência, especializada em microsserviços e Spring Framework.

Desenvolvedor Java, especializado em microsserviços e Spring Framework.
Tenho experiência no design e implementação de APIs REST, além de competências em
bancos de dados relacionais (PostgreSQL, MySQL) e NoSQL (MongoDB). Tenho aplicado
princípios SOLID para garantir código limpo, modular e de fácil manutenção, bem como o
uso de práticas de testes unitários e funcionais para assegurar a qualidade contínua das
entregas.

Também possuo experiência com mensageria com uso de tecnologias como Kafka e
RabbitMQ.

Tenho facilidade em aprender novas tecnologias e busco colaborar de forma eficaz com a
equipe, visando as melhores entregas e soluções..
`,
  contact: {
    email: "codejhonatajansen@gmail.com",
    phone: "+55 47 98908-2590",
    linkedin: "https://linkedin.com/in/devjansen/",
    github: "https://github.com/DevJansen",
  },
  education: [
    {
      degree: "Bacharelado em Engenharia de Software",
      institution: "UNIASSELVI",
      details: "Em andamento (jul de 2024 - nov de 2029).",
    },

    {
      degree: "Especialização Back End - G9 (ONE)",
      institution: "Alura Latam",
      details: "Em andamento (out de 2025 - mar de 2026). Domínio em Java, POO e Spring Framework, com foco em desenvolvimento Back-end seguro e eficiente, e integração de IA com Java.",
    },
  ],
  skills: [
    // Linguagens de Programação
    { name: "Java", category: "Linguagens" },
    { name: "JavaScript", category: "Linguagens" },
    { name: "Python", category: "Linguagens" },
    { name: "SQL", category: "Linguagens" },
    { name: "Dart", category: "Linguagens" },
    { name: "Kotlin", category: "Linguagens" },
    
    // Backend & APIs
    { name: "Spring Boot", category: "Backend & APIs" },
    { name: "Spring Security", category: "Backend & APIs" },
    { name: "Spring Data JPA", category: "Backend & APIs" },
    { name: "Hibernate", category: "Backend & APIs" },
    { name: "REST API", category: "Backend & APIs" },
    { name: "Microsserviços", category: "Backend & APIs" },
    { name: "JSON / HTTP/HTTPS", category: "Backend & APIs" },
    { name: "Postman", category: "Backend & APIs" },
    
    // Frontend & FullStack
    { name: "HTML 5", category: "Frontend & FullStack" },
    { name: "CSS 3", category: "Frontend & FullStack" },
    { name: "JavaScript", category: "Frontend & FullStack" },
    { name: "TypeScript", category: "Frontend & FullStack" },
    //{ name: "Tailwind CSS", category: "Frontend & FullStack" },
    //{ name: "Framer Motion", category: "Frontend & FullStack" },
    //{ name: "Context API / Hooks", category: "Frontend & FullStack" },
    { name: "Design Responsivo", category: "Frontend & FullStack" },
    
    // Cloud & DevOps
    //{ name: "AWS (EC2, S3, RDS, VPC, IAM)", category: "Cloud & DevOps" },
    { name: "Docker", category: "Cloud & DevOps" },
    { name: "Docker Compose", category: "Cloud & DevOps" },
    //{ name: "Nginx", category: "Cloud & DevOps" },
    { name: "CI/CD", category: "Cloud & DevOps" },
    { name: "GitHub Actions", category: "Cloud & DevOps" },
    { name: "Linux", category: "Cloud & DevOps" },
    //{ name: "Infraestrutura como Código (IaC)", category: "Cloud & DevOps" },
    
    // Banco de Dados
    { name: "PostgreSQL", category: "Banco de Dados" },
    { name: "MySQL", category: "Banco de Dados" },
    { name: "MongoDB", category: "Banco de Dados" },
    { name: "SQL Query Optimization", category: "Banco de Dados" },
    { name: "Database Design (ORM/JPA)", category: "Banco de Dados" },
    
    // Metodologias & Conceitos
    { name: "Clean Code", category: "Metodologias & Conceitos" },
    { name: "SOLID", category: "Metodologias & Conceitos" },
    { name: "Design Patterns", category: "Metodologias & Conceitos" },
    { name: "TDD (Test-Driven Development)", category: "Metodologias & Conceitos" },
    { name: "Agile (Scrum, Kanban)", category: "Metodologias & Conceitos" },
       
    // Inteligência Artificial & ML
    //{ name: "AWS AI Services (Bedrock, Textract, Lex)", category: "Inteligência Artificial & ML" },
    //{ name: "Machine Learning Fundamentals", category: "Inteligência Artificial & ML" },
    //{ name: "IA Generativa", category: "Inteligência Artificial & ML" },
    //{ name: "Python", category: "Inteligência Artificial & ML" },
    
    // Ferramentas & Outros
    { name: "Git / GitHub", category: "Ferramentas & Outros" },
    { name: "VS Code / IntelliJ IDEA", category: "Ferramentas & Outros" },
    { name: "Notion / Figma (Básico)", category: "Ferramentas & Outros" },
    { name: "Problem Solving", category: "Ferramentas & Outros" },
    { name: "Análise Técnica", category: "Ferramentas & Outros" },
    { name: "Trabalho em Equipe", category: "Ferramentas & Outros" },
  ],
  projects: [
    {
      name: "Simulador de Terminal Bancário",
      githubLink: "https://github.com/Devjansen",
      technologies: "Java 17, Maven, JUnit, Docker, Clean Architecture, SOLID",
      description: "Simulador de terminal bancário refatorado para seguir os princípios de Clean Architecture e SOLID. Foco em testes robustos (JUnit) e containerização (Docker).",
      features: [
        "Aplicação em linha de comando (CLI)",
        "Implementação dos princípios SOLID",
        "Testes unitários com JUnit",
        "Gerenciamento de dependências com Maven",
        "Containerização com Docker",
        "Simulação de operações bancárias (saque, depósito, transferência)"
      ],
    },
    {
      name: "Conversor de Moedas",
      githubLink: "https://github.com/Devjansen",
      technologies: "Java 17, Gson, Lombok, REST API",
      description: "Aplicação Java console para conversão de valores entre moedas e criptomoedas, utilizando taxas de câmbio em tempo real de APIs externas. Inclui histórico de conversões.",
      features: [
        "Conversão entre 15 moedas e 10 criptomoedas",
        "Integração com API de cotação em tempo real",
        "Histórico de conversões persistido localmente",
        "Interface de console amigável",
        "Tratamento de erros de API"
      ],
    },

    {
      name: "Amigo Secreto",
      githubLink: "https://github.com/Devjansen",
      technologies: "JavaScript, HTML5, CSS3, DOM Manipulation, OOP",
      description: "Aplicação web interativa para sorteio de Amigo Secreto com estética Cyberpunk. Demonstra manipulação avançada de DOM e Programação Orientada a Objetos em JavaScript.",
      features: [
        "Programação orientada a objetos (OOP) em JavaScript",
        "Manipulação avançada de DOM",
        "Animações CSS3 e layout temático",
        "Validação de dados no frontend",
        "Sorteio aleatório de participantes"
      ],
    },
  ],

  
  experience: [
    {
      title: "Desenvolvedor Backend Java | Spring Boot | SQL | Docker | AWS | APIs REST",
      company: "Freelancer/Projetos Pessoais",
      period: "2023 - Atual",
      location: "Remoto",
      responsibilities: [
        "Desenvolvimento Freelancer de APIs REST.",
        "Microserviços com Java Spring Boot.", 
        "Realização de testes unitários com JUnit.", 
        "Utilização de banco de dados SQL e NoSQL.",
        "Mensageria com Kafka e RabbitMQ.",
        "Utilização de Docker e Docker-composse.",
        "Utilização de padrão MVC, SOLID e Clean Code.", 
        "Uso de banco de dados SQL com JPA.",
        "Trabalho com metodologia Scrum e Kamban."
      ],
    },
    {
      title: "Técnico júnior",
      company: "Elevadores Atlas Schindler",
      period: "Fevereiro de 2024 a Abril de 2025",
      location: "Itajaí",
      responsibilities: [
        "Manutenção preventiva e corretiva de equipamentos, identificando falhas e executando reparos para garantir o funcionamento correto.",
        "Suporte técnico aos clientes, esclarecendo dúvidas e auxiliando na resolução de problemas.", 
        "Atendimento a clientes internos e externos, solucionando dúvidas e problemas técnicos relacionados aos produtos e serviços oferecidos.", 
        "Instalação de sistemas e equipamentos, realizando testes para verificar o funcionamento correto e a segurança operacional.",
        "Avaliação e identificação de problemas, buscando soluções para restaurar a funcionalidade de forma preventiva e evitando prejuízos.",
        "Elaboração de relatórios técnicos sobre os serviços realizados, registrando os procedimentos adotados, peças substituídas e resultados obtidos.",
        "Colaboração com equipes multidisciplinares em projetos de melhoria contínua, visando otimizar processos produtivos."
      ],
    },
        {
      title: "Técnico em eletrônica",
      company: "RKP Engenharia Clínica",
      period: "Julho de 2021 a Julho de 2023",
      location: "Itajaí",
      responsibilities: [
        "Colaboração em projetos de manutenção, realizando diagnósticos em equipamentos eletrônicos para garantir seu funcionamento adequado.",
        "Interação com a equipe de engenharia, discutindo melhorias em processos para otimizar a eficiência das operações.", 
        "Atendimento a demandas de clientes, oferecendo suporte técnico sobre produtos eletrônicos e solucionando dúvidas frequentes.", 
        "Realização de inspeções em equipamentos, assegurando o cumprimento de normas de segurança e qualidade estabelecidas.",
        "Análise de problemas de funcionamento dos equipamentos, determinando soluções adequadas às falhas detectadas.",
        "Testagem de equipamentos eletrônicos após os serviços de manutenção, garantindo o bom funcionamento do produto e a satisfação do cliente com o trabalho realizado.",
        "Montagem e instalação de equipamentos eletrônicos, realizando testes com o intuito de detectar possíveis falhas na parte elétrica, prezando pela qualidade de funcionamento dos dispositivos."
      ],
    },

  ],
  certifications: [
    {
      name: "Bootcamp Santander 2025 - Banck-End com Java",
      institution: "DIO",
      date: "ago de 2025",
      details: "Competências: Java · Spring Boot · Spring Framework · MongoDB · SQL · NoSQL · maven · Gradle · MySQL",
    },
    {
      name: "Formação Java Web Full-Stack e Spring Boot REST API",
      institution: "JDev Treinamento",
      date: "jun de 2025",
      details: "Competências: Java · Desenvolvimento Java · JSF (JavaServer Faces) · JSP (JavaServer Pages) · SQL · Spring Framework MVC · Hibernate · JPA · Java EE · CDI · Apache Tomcat · WebServices · API REST · Spring Boot · Serviços Web RESTful · Spring Data · Spring Security · AJAX · JSON Web Token (JWT) · JSON · JavaScript · HTML · CSS · HTML5 · AngularJS",
    },
    {
      name: "Java Com Spring Completo",
      institution: "Javanauta",
      date: "jun de 2025",
      details: "Java · Spring Boot · Docker · PostgreSQL · MongoDB · maven · Gradle · IntelliJ IDEA · Postman API · Swagger API",
    },
     {
      name: "Java Completo Programação Orientada a Objetos + Projetos",
      institution: "Udemy",
      date: "jun de 2025",
      details: "Competências: Java · JDBC · JPA (Java Persistence API) · Hibernate · MySQL · MongoDB · Spring Boot · Git · GitHub · GitFlow · Mapeamento objeto-relacional · ORM · SQL · NoSQL · Spring Data",
    },
       
  ],
  languages: [
    { name: "Português", level: "Nativo" },
    { name: "Inglês", level: "Básico" },
    { name: "Espanhol", level: "Básico" },
  ],
};
