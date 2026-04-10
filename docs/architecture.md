```mermaid
  graph TB
    A[Frontend] -->|API Calls| B[Backend]
    B -->|Database Queries| C[Database]
    B -->|External Service Calls| D[External Services]
    A -->|User Input| B
```
