# 1. Choix du mécanisme d'authentification pour l'API (Web et Mobile)

## Statut
Accepté

## Contexte
L'équipe développe une API backend consommée simultanément par deux clients :
- Une application web hébergée sur le même domaine.
- Une application mobile native.

L'équipe technique est restreinte (3 développeurs). Une exigence de sécurité critique impose de pouvoir forcer la déconnexion immédiate d'un compte utilisateur en cas de compromission.

Nous devons choisir entre :
1. Une authentification par sessions gérées via cookies HTTP-only.
2. Une authentification par jetons (JWT sans état ou jetons d'API révocables stockés).

## Décision
Nous choisissons une architecture basée sur des jetons d'accès révocables (API Tokens / Refresh Tokens) :
- Des jetons d'accès à courte durée de vie (15 min) complétés par un Refresh Token vérifié et persisté en base de données.
- Côté Web : transmission sécurisée dans un cookie `HttpOnly`, `SameSite=Strict`, `Secure`.
- Côté Mobile : stockage chiffré (Keychain/Keystore) et envoi via l'en-tête `Authorization: Bearer <token>`.

Nous rejetons les JWT purs « stateless » (sans état) car ils interdisent la révocation immédiate en cas de compte compromis sans infrastructure complexe de blacklist.

## Conséquences
- Positives : Révocation instantanée garantie en cas de compte compromis ; compatible à la fois avec le web et le mobile.
- Négatives : Nécessite une lecture en base de données lors de la validation ou du renouvellement du token.
