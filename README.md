Run
```
docker compose -f docker-compose-dev.yml up
```

Enter Container
```
docker compose -f docker-compose-dev.yml exec frontend bash
docker compose -f docker-compose-dev.yml exec backend bash
docker compose -f docker-compose-dev.yml exec {name} bash
```

Setup Frontend
```
yarn install
```

Setup Backend
```
bundle install
rails db:migrate
rails db:seed
```

Start Frontend
```
yarn dev
```

Start Backend
```
rails s -p 3001 -b '0.0.0.0'
```

Check Frontend
```
yarn pre-commit
```

Check Backend
```
```

Reset
```
docker container prune
docker compose -f docker-compose-dev.yml build --no-cache
```

URL
http://localhost:3000

Sqlite GUI
```
SQLite Viewer
```
