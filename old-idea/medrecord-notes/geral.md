### MedRecord – Prontuário Eletrônico Simplificado**

### **📝 Descrição:**

Um sistema web para cadastro e consulta de prontuários médicos, permitindo que médicos e profissionais de saúde registrem informações básicas de pacientes, como histórico médico, alergias, medicamentos em uso e consultas realizadas.

---

### **🔧 Tecnologias Principais:**

- **Backend:** Java + Spring Boot
- **Banco de Dados:** PostgreSQL / H2 (para desenvolvimento rápido)
- **Frontend (opcional):** Angular
- **Autenticação:** Spring Security (se quiser incluir login)

---

### **📋 Funcionalidades Principais (MVP para 1 semana):**

1. **Cadastro de Pacientes**
    - Nome, CPF, data de nascimento, telefone, e-mail.
2. Cadastro de Médico
	- Nome, CPF, CRM, Especialização, Turno de trabalho 
3.  **Agendamento de Consultas**
    - Data, horário, médico responsável, motivo da consulta.
    
4. **Registro de Prontuários**
    - Histórico médico, alergias, medicamentos em uso.
    
5. **Busca de Pacientes**
    - Filtro por nome, CPF ou data de nascimento.
        
6. **Dashboard Básico**
    - Estatísticas simples (quantidade de pacientes, consultas agendadas).

---

### **🛠️ Estrutura do Projeto (Spring Boot):**

- **Entidades:**
    - `Paciente` (id, nome, cpf, dataNascimento, telefone, email)
    - `Prontuario` (id, paciente, historico, alergias, medicamentos)
    - `Consulta` (id, paciente, medico, dataHora, motivo)
- **Repositórios:** Spring Data JPA
- **Controllers:** RESTful ou MVC (dependendo do frontend)
- **Serviços:** Lógica de negócio (validações, regras)

---

### **🎯 Bônus:**

- **Autenticação:** Médicos e enfermeiros com diferentes níveis de acesso.
- **Exportação de dados:** Gerar PDF do prontuário.
- **API de CEP:** Integração com ViaCEP para autopreencher endereço.