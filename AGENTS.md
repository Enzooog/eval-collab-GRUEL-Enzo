# Instructions pour les Agents IA et Collaborateurs

## Contexte du projet
Projet d'API de gestion des commandes (Option Dev).
Architecture orientée services, consommée par une application web et une application mobile. Équipe de 3 développeurs.

## Commandes de vérification
Avant toute soumission de code, exécuter localement :
- Linter & Style : `npm run lint`
- Tests unitaires et intégration : `npm test`
- Vérification des vulnérabilités de dépendances : `npm audit`

## Conventions de développement
- Commits : Respect strict du standard Conventional Commits (`feat:`, `fix:`, `docs:`, `chore:`).
- Branches :
  - `feat/<nom-fonctionnalité>` pour les ajouts de fonctionnalités
  - `fix/<nom-correctif>` pour les résolutions de bugs
  - `docs/<numéro-issue>-documentation` pour la documentation
- Pull Requests : Chaque PR doit référencer une issue (`Closes #<id>`), inclure une description claire et être relue avant fusion.

## Interdictions strictes
- Aucun secret dans le dépôt : Ne jamais écrire en clair ni commiter de mots de passe, clés d'API, tokens ou certificats. Utiliser impérativement des variables d'environnement.
- Interdiction de commit direct sur `main` : Toutes les modifications doivent passer par une branche dédiée et une Pull Request.
