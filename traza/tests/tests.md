# Tests del Proyecto

Estas pruebas validan la lógica principal del sistema de trazabilidad de cacao sobre Solana.

## Ejecución de tests

Para ejecutar las pruebas en localnet:

```bash
cd traza

ANCHOR_PROVIDER_URL=http://127.0.0.1:8899 \
ANCHOR_WALLET=$HOME/.config/solana/id.json \
yarn run ts-mocha -p ./tsconfig.json -t 1000000 "tests/**/*.ts"


Resultado observado

La suite principal del proyecto completó correctamente:
	•	22 tests passing
	•	Tiempo aproximado de ejecución: 13 segundos

Cobertura funcional validada

Las pruebas automatizadas cubren los siguientes casos:
	1.	Inicialización del programa
	2.	Registro y validación de actor Producer
	3.	Registro y validación de actor Processor
	4.	Registro y validación de actor Transporter
	5.	Registro y validación de actor Exporter
	6.	Creación de lote de cacao por Producer
	7.	Registro de evento Harvest por Producer
	8.	Verificación de que Processor no puede registrar Harvest
	9.	Registro de evento Fermentation por Processor
	10.	Registro de evento Transport por Transporter
	11.	Cambio de estado Created -> Harvested por Producer
	12.	Verificación de que Transporter no puede mover Harvested -> Fermented
	13.	Cambio de estado Harvested -> Fermented por Processor
	14.	Cambio de estado Fermented -> Dried por Processor
	15.	Cambio de estado Dried -> InTransit por Transporter
	16.	Cambio de estado InTransit -> Stored por Transporter
	17.	Emisión de certificado por Authority
	18.	Verificación de que Exporter no puede mover Stored -> Certified
	19.	Registro y validación de actor Authority
	20.	Cambio de estado Stored -> Certified por Authority
	21.	Cambio de estado Certified -> Exported por Exporter
	22.	Revocación de certificado por Authority

Objetivo de los tests

Estas pruebas verifican:
	•	el correcto registro de actores y roles
	•	la creación de lotes
	•	el registro de eventos por rol autorizado
	•	la prohibición de acciones no permitidas
	•	la validez de las transiciones de estado
	•	la emisión y revocación de certificados
	•	el recorrido completo del lote hasta exportación

Evidencia de ejecución

La evidencia de ejecución exitosa se incluye en el video de demostración y puede complementarse con capturas del terminal dentro de la carpeta screenshots/.

Salida resumida de la suite

traza - cacao traceability

✓ Initialize program
✓ Register and validate Producer actor
✓ Register and validate Processor actor
✓ Register and validate Transporter actor
✓ Register and validate Exporter actor
✓ Producer creates cacao batch
✓ Producer can record Harvest event
✓ Processor cannot record Harvest event
✓ Processor can record Fermentation event
✓ Transporter can record Transport event
✓ Producer can move status Created -> Harvested
✓ Transporter cannot move status Harvested -> Fermented
✓ Processor can move status Harvested -> Fermented
✓ Processor can move status Fermented -> Dried
✓ Transporter can move status Dried -> InTransit
✓ Transporter can move status InTransit -> Stored
✓ Authority issues certificate
✓ Exporter cannot move status Stored -> Certified
✓ Register and validate Authority actor
✓ Authority can move status Stored -> Certified
✓ Exporter can move status Certified -> Exported
✓ Authority revokes certificate

22 passing (13s)


```

Conclusión

La suite principal de pruebas automatizadas del proyecto se ejecutó correctamente con un total de 22 casos superados en aproximadamente 13 segundos. Las pruebas validan la inicialización del programa, el registro y validación de actores, la creación de lotes, el registro de eventos por rol, las restricciones de acceso, las transiciones válidas e inválidas del estado del lote, la emisión de certificados, la certificación final y la exportación del lote.
