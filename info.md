# Commands


//connect to posgtr
docker exec -it 71cce8078543 bash
psql -U postgres -d news\-portal
docker-compose up --build

-- Step 1: Rename the existing primary key column to 'id'
ALTER TABLE article_ratings RENAME COLUMN rating_id TO id;
ALTER TABLE articles RENAME COLUMN article_id TO id;
ALTER TABLE users RENAME COLUMN user_id TO id;
ALTER TABLE categories RENAME COLUMN category_id TO id;

kubectl apply -f postgres-pvc.yaml
kubectl apply -f postgres-deployment.yaml
kubectl apply -f go-api-deployment.yaml
kubectl apply -f express-api-deployment.yaml
