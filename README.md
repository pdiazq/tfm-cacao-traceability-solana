# Trazabilidad Alimentaria de Cacao en Solana

## Descripción

Este proyecto implementa un sistema de trazabilidad alimentaria para lotes de cacao utilizando la blockchain de **Solana**. La solución permite registrar y verificar de forma on-chain las principales etapas del ciclo de vida de un lote, desde su creación en origen hasta su exportación final, incorporando actores, eventos, estados y certificados verificables.

El sistema ha sido desarrollado como un **MVP académico** para el Trabajo Final de Máster, combinando un programa on-chain en **Rust + Anchor** con una interfaz web construida en **Next.js + React**. Cada lote se representa mediante cuentas derivadas por **PDA**, y su historial queda reflejado a través de eventos y certificados asociados.

La propuesta busca aportar transparencia, integridad y auditabilidad al sector agroalimentario, tomando como caso de uso la cadena de valor del cacao y adaptando el flujo de negocio a un entorno blockchain de bajo coste transaccional.

---

## Problema que Resuelve

En las cadenas de suministro alimentarias tradicionales suelen aparecer problemas como:

- falta de visibilidad integral del historial de un lote
- registros fragmentados entre varios actores
- documentación fácilmente alterable o difícil de verificar
- problemas para demostrar el origen, la calidad o la certificación
- dificultades para auditar el recorrido completo del producto

Este proyecto aborda estos problemas mediante una solución blockchain capaz de:

- identificar de forma única cada lote de cacao
- registrar eventos relevantes de su ciclo de vida
- controlar el estado oficial del lote
- emitir y revocar certificados verificables
- consultar la trazabilidad completa desde un dashboard web

---

## Tecnologías Utilizadas

- **Blockchain:** Solana
- **Programa on-chain:** Rust + Anchor
- **Frontend:** Next.js + React + TypeScript
- **Wallet integration:** Solana Wallet Adapter
- **Wallets compatibles:** Backpack, Phantom, Solflare
- **Testing:** TypeScript + ts-mocha
- **Diagramas:** SVG / Mermaid / documentación visual
- **IA/Herramientas utilizadas:** ChatGPT

---

## Arquitectura del Sistema

La solución se estructura en tres capas principales:

### 1. Capa de presentación

Desarrollada con Next.js y React, incluye:

- página principal del sistema
- registro de actores
- dashboards específicos por rol
- formularios para registrar eventos y certificados
- vista de detalle del lote

### 2. Capa de acceso a blockchain

Incluye:

- Wallet Adapter
- conexión RPC
- firma de transacciones
- interacción con wallets compatibles

### 3. Capa on-chain

Implementada en Rust con Anchor:

- inicialización del sistema
- registro y validación de actores
- creación de lotes
- registro de eventos
- actualización de estados
- emisión y revocación de certificados

### Diagrama de arquitectura

Ver archivo en:

- `docs/diagrama_arquitectura_cacao_solana_academico.svg`

---

## Flujo de Datos

El flujo principal del sistema sigue el recorrido completo de un lote de cacao:

1. Producer crea el lote
2. Producer registra la cosecha
3. Processor registra fermentación y secado
4. Transporter registra transporte y almacenamiento
5. Authority emite el certificado y marca el lote como certificado
6. Exporter registra la exportación y cierra el ciclo

### Diagrama de flujo

Ver archivo en:

- `docs/diagrama_flujo_cacao_solana.svg`

---

## Roles del Sistema

El MVP implementa los siguientes roles:

### Producer

- crea lotes
- registra el evento de cosecha
- actualiza el estado a `harvested`

### Processor

- registra fermentación
- registra secado
- actualiza el estado a `fermented` y `dried`

### Transporter

- registra transporte
- registra almacenamiento
- actualiza el estado a `inTransit` y `stored`

### Authority

- valida actores
- emite certificados
- revoca certificados
- actualiza el estado a `certified`

### Exporter

- registra exportación
- actualiza el estado a `exported`

---

## Ciclo de Vida del Lote

El flujo oficial implementado para un lote de cacao es:

```text
created
→ harvested
→ fermented
→ dried
→ inTransit
→ stored
→ certified
→ exported
```

Modelo de Datos On-Chain

El programa utiliza las siguientes cuentas principales:

ProgramConfig
• autoridad del sistema
• contadores globales

PendingActor
• solicitud de alta pendiente de aprobación

Actor
• wallet del actor
• nombre
• rol
• ubicación
• estado activo

Batch
• identificador del lote
• creador
• producto
• origen
• cantidad
• estado actual
• número de eventos
• número de certificados

BatchEvent
• evento asociado a un lote
• tipo
• actor
• ubicación
• timestamp
• metadata

Certificate
• certificado asociado a un lote
• tipo
• emisor
• document hash
• fechas
• estado

⸻

Decisiones de Diseño

Uso de PDAs en lugar de NFT

Cada lote se representa como una cuenta Batch derivada mediante PDA, en lugar de modelarse como NFT. Esta decisión sigue la recomendación del enunciado para el MVP y permite reducir complejidad, coste y tiempo de desarrollo, centrando la solución en la trazabilidad verificable.

Separación entre evento y estado oficial

El sistema distingue entre:
• evento registrado
• estado oficial actual

Esto significa que un evento, como Storage, puede existir en el timeline sin que el estado cambie automáticamente a stored. El cambio de estado requiere una instrucción explícita adicional. Esta decisión aporta mayor control de negocio y permite auditorías más precisas.

Document Hash

Los certificados almacenan un campo document_hash, pensado como referencia verificable al documento asociado. En este MVP se utiliza como identificador lógico. En una versión futura podría reemplazarse por un CID de IPFS o por un hash real de un PDF.

⸻

Instalación y Configuración

Requisitos Previos
• Node.js v18 o superior
• Yarn o npm
• Rust instalado
• Solana CLI instalado
• Anchor CLI instalado
• Wallet Solana compatible
• acceso a Solana localnet o Devnet

⸻

Estructura del Proyecto

pfm-rust-solana-2026/
├── traza/ # Programa Anchor + tests
├── web/ # Frontend Next.js
├── docs/ # Diagramas y documentación visual
├── screenshots/ # Capturas del sistema
└── README.md

Instalación de Dependencias

Programa on-chain:
cd traza
yarn install
anchor build

Frontend:
cd web
yarn install

Configuración Local:
Levantar localnet
cd traza
solana-test-validator --ledger test-ledger

Configurar CLI:
solana config set --url http://127.0.0.1:8899
solana config get

Consultar wallet:
solana address
solana balance

Ejecución del Proyecto:
Compilar programa
cd traza
anchor build

Ejecutar tests:
cd traza

ANCHOR\*PROVIDER_URL=http://127.0.0.1:8899 \
ANCHOR_WALLET=$HOME/.config/solana/id.json \
yarn run ts-mocha -p ./tsconfig.json -t 1000000 "tests/\*\*/\_.ts"

Ejecutar frontend:
cd web
yarn dev

Aplicación web:
http://localhost:3000

Programa Solana Desplegado

Entorno local de desarrollo
• Red: localnet
• Program ID: H79yGB29eEZAf1Gi3oPDAUG2Xcv8eoMSULbfyXPR3sNX

### Entorno de entrega

- **Red:** Devnet
- **Program ID:** `H79yGB29eEZAf1Gi3oPDAUG2Xcv8eoMSULbfyXPR3sNX`
- **Explorer del programa:** `https://explorer.solana.com/address/H79yGB29eEZAf1Gi3oPDAUG2Xcv8eoMSULbfyXPR3sNX?cluster=devnet`
- **Explorer del deploy:** `https://explorer.solana.com/tx/2f9SDba7vR9QzQhKbAKwV28Lk65Dqg4cq8CPrBuwee8FGHALFAcf3innRywxKVV26u2Vbr47dZKGvFZKxuUwGwFd?cluster=devnet`

⸻

Casos de Uso Implementados 1. Registro de actor
• el usuario solicita un rol dentro del sistema
• la autoridad valida la solicitud 2. Creación de lote
• el producer crea un lote de cacao con origen y cantidad 3. Registro de eventos
• cosecha
• fermentación
• secado
• transporte
• almacenamiento
• exportación 4. Control de estado del lote
• transición explícita entre estados válidos 5. Emisión de certificados
• emisión por parte de la autoridad
• revocación cuando corresponde 6. Consulta de trazabilidad
• visualización del lote
• timeline completo
• estado oficial actual
• último evento registrado
• certificados

⸻

Pruebas Realizadas

Tests automáticos

Se desarrollaron pruebas para validar:
• inicialización del programa
• registro y validación de actores
• creación de lotes
• restricciones por rol
• registro de eventos
• actualización de estados
• emisión y revocación de certificados

Pruebas funcionales manuales

Se comprobó el flujo completo de un lote de cacao desde:
• creación
• cosecha
• procesamiento
• transporte
• almacenamiento
• certificación
• exportación

Además, se verificó el despliegue del programa en Devnet.

⸻

Capturas de Pantalla

Ver carpeta:
• screenshots/01-home.png
• screenshots/02-register-actor.png
• screenshots/03-validate-actors.png
• screenshots/04-producer-dashboard.png
• screenshots/05-batch-detail.png
• screenshots/06-certificate-view.png
• screenshots/07-exported-batch.png

⸻

Diagramas Técnicos

Ver carpeta:
• docs/diagrama_arquitectura_cacao_solana.svg
• docs/diagrama_flujo_cacao_solana.svg

⸻

Documento final
Ver carpeta:
• docs/Sistema de trazabilidad alimentaria de cacao sobre Solana.pdf

⸻

Video Demostración

🎥 Video demo: https://www.youtube.com/watch?v=Xac43gL7-rk

El video incluye:
• problema que resuelve el sistema
• arquitectura general
• demostración funcional del MVP
• visualización del lote exportado
• evidencia de despliegue en Devnet
• innovaciones respecto al esqueleto base

⸻

Innovaciones Implementadas

El proyecto incorpora varias mejoras relevantes respecto a un esqueleto base genérico:
• adaptación completa al caso de uso de cacao
• sustitución de un flujo genérico basado en tokens por un sistema de:
• actores
• lotes
• eventos
• estados
• certificados
• implementación de un ciclo de vida realista del lote
• dashboards específicos por rol
• vista detallada del lote con:
• estado oficial actual
• último evento registrado
• timeline completo
• certificados asociados
• separación explícita entre evento y estado oficial
• mejora visual de la home y coherencia general del frontend
• despliegue del programa en Devnet

⸻

Limitaciones del MVP

Esta versión presenta algunas limitaciones propias de un MVP académico:
• no se implementó NFT por lote
• no se integró IPFS real para documentos
• algunas pantallas requieren introducir manualmente ciertos datos
• los eventos no cambian automáticamente el estado del lote
• no existe geolocalización real sobre mapa
• el sistema se centró en la lógica on-chain y dashboard, sin backend off-chain adicional

⸻

Trabajo Futuro

Como posibles mejoras futuras:
• integración real con IPFS
• automatización parcial de algunas transiciones de estado
• carga automática de creatorWallet y batchId
• despliegue funcional completo y operativa extendida en Devnet
• indexación off-chain para consultas avanzadas
• soporte para múltiples productos agroalimentarios
• mapas interactivos
• exploración de una versión NFT del lote

⸻

Uso de Herramientas de IA

Durante el desarrollo del proyecto se utilizaron herramientas de IA como apoyo en:
• depuración y revisión de código
• refactorización del frontend
• mejora de estructura del dashboard
• revisión de arquitectura
• redacción técnica y documentación

Herramientas utilizadas:
• ChatGPT

Todo el código generado con apoyo de IA fue revisado, comprendido y adaptado a las necesidades específicas del proyecto.

⸻

Manual Básico de Uso

1. Registrar actor
   • conectar wallet
   • ir a Register Actor
   • enviar solicitud
   • validar actor desde authority

2. Crear lote
   • entrar con wallet producer
   • crear batch
   • revisar en My Batches

3. Registrar eventos
   • cada actor registra los eventos correspondientes a su etapa

4. Actualizar estado
   • cada actor ejecuta la transición válida del estado oficial

5. Consultar trazabilidad
   • abrir /batches/{id}
   • revisar timeline, estado oficial, último evento y certificados

⸻

Autor
• Nombre: Pedro Alexander Díaz Quiroga
• Email: pdiazq@hotmail.com
• LinkedIn: https://www.linkedin.com/in/pedro-alexander-diaz-quiroga-ingenious/
• Máster: Máster en Blockchain
• Proyecto: Trazabilidad Alimentaria de Cacao en Solana

⸻

Licencia

MIT License
