Flujo completo del MVP de trazabilidad de cacao

0. Preparación

Para cada wallet nueva que uses en la web:
	•	conectarla en Backpack
	•	hacer airdrop en localnet
	•	registrar actor
	•	aprobar actor con authority

⸻

1. Authority

Con wallet authority:
	1.	entrar a Validate Actors
	2.	aprobar:
	•	Producer
	•	Processor
	•	Transporter
	•	Exporter

Más adelante también usa:
	•	Issue Certificate
	•	Certify Batches
	•	Revoke Certificate

⸻

2. Producer

Con wallet producer:
	1.	Create Batch
	2.	revisar en My Batches
	3.	abrir View Detail
	4.	Record Harvest
	5.	Mark as Harvested

Resultado esperado
	•	estado del lote: harvested
	•	timeline con evento Harvest

⸻

3. Processor

Con wallet processor:
	1.	entrar a My Batches
	2.	identificar el lote del producer
	3.	Record Fermentation
	•	usando:
	•	Creator Wallet = wallet del producer
	•	Batch ID = ID correcto del lote
	4.	Update Status → fermented
	5.	Record Drying
	6.	Update Status → dried

Resultado esperado
	•	estado del lote: dried
	•	timeline con:
	•	Harvest
	•	Fermentation
	•	Drying

⸻

4. Transporter

Con wallet transporter:
	1.	entrar a su vista de lotes
	2.	Record Transport
	3.	Update Status → inTransit
	4.	Record Storage
	5.	Update Status → stored

Resultado esperado
	•	estado del lote: stored
	•	timeline con:
	•	Transport
	•	Storage

⸻

5. Authority otra vez

Con wallet authority:
	1.	Issue Certificate
	2.	Certify Batches
	•	cambiar estado a certified

Resultado esperado
	•	estado del lote: certified
	•	aparece al menos un certificado en el detalle del lote

⸻

6. Exporter

Con wallet exporter:
	1.	entrar a Export Batches
	2.	Record Export
	3.	Update Status → exported

Resultado esperado
	•	estado final del lote: exported
	•	timeline completo

⸻

Secuencia de estados del lote
created
→ harvested
→ fermented
→ dried
→ inTransit
→ stored
→ certified
→ exported

Regla importante

Para processor, transporter, exporter y authority, cuando una pantalla pida:
	•	Creator Wallet

debes poner:

la wallet original del producer que creó el batch, no la wallet del actor actual.

⸻

Verificación recomendada en cada paso

Ir entrando a:

/batches/ID

y comprobar:
	•	estado actual
	•	eventos del timeline
	•	certificados emitidos

⸻

Demo mínima ideal

Si quieres una demo completa y clara:
	1.	producer crea lote y lo deja en harvested
	2.	processor lo deja en dried
	3.	transporter lo deja en stored
	4.	authority emite certificado y lo deja en certified
	5.	exporter lo deja en exported

Si quieres, te la convierto en checklist tipo casillas [ ] para ir marcándola.