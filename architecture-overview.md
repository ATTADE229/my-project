# Architecture Overview

```mermaid
graph TB
    subgraph Client["Client Layer"]
        WEB[Web App]
        MOBILE[Mobile App]
    end
    
    subgraph API["API Layer"]
        GATEWAY[API Gateway]
    end
    
    subgraph Services["Backend Services"]
        AUTH[Auth Service]
        BUSINESS[Business Logic Service]
        PAYMENT[Payment Service]
    end
    
    subgraph Data["Data Layer"]
        DB[(Primary Database)]
        CACHE[(Cache)]
    end
    
    subgraph External["External Services"]
        EMAIL[Email Service]
        PAYMENT_PROVIDER[Payment Provider]
        ANALYTICS[Analytics]
    end
    
    WEB --> GATEWAY
    MOBILE --> GATEWAY
    GATEWAY --> AUTH
    GATEWAY --> BUSINESS
    GATEWAY --> PAYMENT
    AUTH --> DB
    BUSINESS --> DB
    BUSINESS --> CACHE
    PAYMENT --> PAYMENT_PROVIDER
    BUSINESS --> EMAIL
    BUSINESS --> ANALYTICS
    
    style Client fill:#e1f5ff
    style API fill:#f3e5f5
    style Services fill:#e8f5e9
    style Data fill:#fff3e0
    style External fill:#fce4ec
```

## Components

- **Client Layer**: Web and mobile applications
- **API Layer**: Central gateway for all requests
- **Backend Services**: Microservices handling different business logic
- **Data Layer**: Database and caching layer
- **External Services**: Third-party integrations