
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
│       └── application.properties

```

#### angular

```
src/app/
├── app.component.ts
├── app.config.ts
├── app.html
├── app.routes.ts
├── app.scss
├── app.spec.ts
├── assets
├── core
│   ├── auth
│   │   ├── guards
│   │   ├── interfaces
│   │   └── services
│   │       └── auth.service.ts
│   ├── interceptors
│   └── utils
├── enviroments
├── models
│   ├── consulta.model.ts
│   ├── medico.model.ts
│   └── paciente.model.ts
├── modules
│   ├── auth
│   │   ├── components
│   │   ├── pages
│   │   └── services
│   ├── doctor
│   │   ├── components
│   │   │   ├── consulta-card
│   │   │   ├── dashboard
│   │   │   └── patient-list
│   │   ├── pages
│   │   │   ├── dashboard.page.ts
│   │   │   ├── patient-detail.page.ts
│   │   │   ├── patient.page.ts
│   │   │   └── perfil.page.ts
│   │   └── services
│   ├── home
│   │   ├── components
│   │   └── home.page.ts
│   ├── patient
│   │   ├── components
│   │   │   ├── consulta-card
│   │   │   └── receituario-view
│   │   ├── pages
│   │   │   ├── agendar-consulta.page.ts
│   │   │   ├── dashboard-page.ts
│   │   │   ├── minhas-consultas.page.ts
│   │   │   └── perfil.page.ts
│   │   └── services
│   └── shared
│       ├── components
│       │   ├── card
│       │   ├── footer
│       │   ├── header
│       │   └── loading
│       ├── directives
│       └── pipes
├── pages
│   ├── auth
│   │   ├── login
│   │   │   └── login.component.ts
│   │   └── register
│   └── home
│       └── home.component.ts
├── services
│   ├── api.service.ts
│   └── notification.service.ts
└── shared
    ├── components
    │   ├── login-form
    │   └── register-form
    ├── ui
    └── utils
```
