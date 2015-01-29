server-down:
	cd etc/pm2; pm2 stop processes.json

server-up:
	cd etc/pm2; pm2 start processes.json

server-res:
	cd etc/pm2; pm2 restart processes.json

db-up:
	node database/unviews.js
	knex --cwd database migrate:latest
	node database/views.js

db-down:
	node database/unviews.js
	knex --cwd database migrate:rollback

db-refresh: db-down db-up

.PHONY: test
