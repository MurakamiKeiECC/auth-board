dc := docker-compose -f ./compose.yml

.PHONY: up
up:
	$(dc) up -d --build

.PHONY: down
down:
	$(dc) down

.PHONY: restart
restart:
	make down
	make up

.PHONY: rm
rm:
	$(dc) down --rmi all

.PHONY: logs
logs:
	$(dc) logs -f

.PHONY: backend
backend:
	$(dc) exec -it backend /bin/sh

.PHONY: frontend
frontend:
	$(dc) exec -it frontend /bin/sh

.PHONY: migrate
migrate:
	$(dc) exec backend npx prisma migrate dev --name init

.PHONY: reset
reset:
	$(dc) exec backend npx prisma migrate reset

.PHONY: generate
generate:
	$(dc) exec backend npx prisma generate

.PHONY: seed
seed:
	$(dc) exec backend npx prisma db seed
