
#### java

```

src/
├── main/
│   ├── java/com/medrecord/
│   │   ├── controller/   # Endpoints REST
│   │   ├── model/        # Entidades (Paciente, Médico, etc.)
│   │   ├── repository/   # JPA Repositories
│   │   ├── service/      # Lógica de negócio
│   │   └── MedRecordApplication.java
│   └── resources/
│       ├── application.properties
│       └── data.sql      # Dados iniciais (opcional)

```

#### angular

```

src/app/
├── core/                 # Serviços globais, interceptors
├── modules/              # Funcionalidades agrupadas
│   ├── pacientes/        # Tudo relacionado a pacientes
│   │   ├── components/   # Componentes específicos
│   │   ├── pages/        # Páginas completas
│   │   ├── services/     # Services específicos
│   │   └── models/       # Interfaces/types
│   └── medicos/          # Mesma estrutura para médicos
├── shared/               # Componentes/compartilhados reutilizáveis
├── app.config.ts         # Configurações globais (mantido)
├── app.routes.ts         # Rotas principais (mantido)
└── app.component.*       # Componente raiz (mantido)

```
