---
layout: doc
---

# Guide — Administrateur

Administrer comptes, facturation et sécurité.

En tant qu'Administrateur, vous disposez d'un accès complet à la plateforme.

## Gestion des comptes et des accès

- Créez et gérez les comptes utilisateurs (internes, clients, partenaires, apporteurs d'affaires) depuis **Utilisateurs**, et attribuez-leur un rôle.
- Créez aussi depuis **Utilisateurs** les comptes des **contributeurs externes** des pôles Commercial, Support, RH et Facturation, en choisissant le rôle du pôle concerné. Vous seul créez et révoquez ces comptes ; pour révoquer un accès, suspendez le compte. Un collaborateur ou un expert externe que le pôle RH doit pouvoir affecter à un projet a d'abord besoin de son propre compte.
- Gérez les organisations (clients, partenaires) depuis **Organisations**.
- Paramétrez les **types de projet** depuis **Types de projet** : phases, jalons et pourcentages de facturation par défaut de chaque type — ce sont ces modèles qui pré-remplissent automatiquement un nouveau projet à sa création par un chef de projet.

## Facturation

- Générez et envoyez la facture correspondante (acompte, intermédiaire, solde ou équipement) lorsqu'un jalon facturable est validé par le chef de projet.
- Générez le **bon de livraison** et l'**attestation de bonne fin d'exécution**, puis envoyez-les en signature électronique au client.
- Créez librement des devis et des factures pro forma, y compris avant la création d'un projet, depuis **Devis** et **Factures pro forma**.
- Configurez et supervisez les moyens de paiement en ligne (Mobile Money, carte bancaire) et suivez les paiements reçus depuis la fiche de facturation de chaque projet.

## Écosystème externe

- Paramétrez le taux de commission de chaque apporteur d'affaires depuis sa fiche utilisateur (couramment entre 5 et 15 %, ajustable au cas par cas) et suivez le cumul de ses commissions dues et versées.
- Validez les factures déposées par les partenaires sur l'onglet **Paiements partenaires** de chaque projet, et enregistrez leur règlement une fois celui-ci effectué.
- Générez le document d'avenant sur demande du chef de projet et suivez sa signature par le client.
- Depuis la fiche d'un partenaire ou d'un apporteur d'affaires, téléchargez les gabarits de contrat vierges (contrat-cadre, fiche de mission, convention de confidentialité, contrat de mandat) à leur transmettre — cette action est également disponible au chef de projet depuis l'équipe d'un projet.

## Soumissions des pôles

La page **Soumissions des pôles** rassemble ce que les contributeurs externes envoient et qui attend votre intervention :

- **Demandes de projet** (pôle Commercial) : choisissez le client — le client existant correspondant, ou sa création s'il est nouveau —, désignez le chef de projet, ajustez le nom si besoin, puis cliquez sur **Créer le projet**. Le projet est créé avec sa référence (`NAIA-0142`) et le chef de projet est notifié.
- **Besoins de développement à trier** (pôles Support et Commercial) : un besoin envoyé sans projet connu attend ici que vous choisissiez le projet concerné. **Créer la tâche** l'ajoute au projet, avec un badge indiquant son origine.
- **Écarter** retire une soumission invalide ; elle disparaît de la liste de son auteur, et le journal d'audit en garde la trace.

Vous êtes notifié, dans l'application et par e-mail, à chaque nouvelle soumission.

## Blocage pour impayé et sécurité

- Quand le pôle Facturation signale un paiement **en retard**, vous êtes alerté, comme la Direction. Depuis la fiche du projet, décidez de **Bloquer le projet** ou de **Ne pas bloquer**. Quand le paiement est revenu à jour, **débloquez le projet**.
- Le blocage est un verrou « doux » : les tâches déjà démarrées se terminent, mais personne — chef de projet compris — ne peut démarrer une nouvelle tâche ni valider un jalon. Tout le reste reste possible, y compris payer. Seul le projet concerné est bloqué, jamais les autres projets du client.
- Consultez le **journal d'audit** pour retracer les actions effectuées sur la plateforme.
- Gérez les aspects de sécurité de votre propre compte (mot de passe, authentification à deux facteurs) depuis **Paramètres > Sécurité** — activer la 2FA vous est proposé automatiquement à la connexion.

## Support de premier niveau

Vous assurez le support de premier niveau aux utilisateurs de la plateforme.

**Canaux :** la messagerie intégrée à un projet est le canal prioritaire (conserve l'historique dans son contexte) ; un e-mail de support dédié couvre les demandes hors contexte d'un projet précis (ex. problème de connexion).

**Catégorisation des demandes :**

| Catégorie              | Exemples                                                              | Délai de première réponse indicatif              |
| ---------------------- | --------------------------------------------------------------------- | ------------------------------------------------ |
| Accès / connexion      | Mot de passe oublié, compte suspendu à tort, 2FA bloquante            | 4 heures ouvrées                                 |
| Facturation / paiement | Facture non reçue, paiement en ligne échoué, désaccord sur un montant | 1 jour ouvré                                     |
| Fonctionnel            | Question d'utilisation, comportement inattendu d'une fonctionnalité   | 1 jour ouvré                                     |
| Anomalie technique     | Erreur bloquante, page inaccessible                                   | 4 heures ouvrées, escalade immédiate si bloquant |

**Traitement :** accusez réception → qualifiez la catégorie et vérifiez que la personne a légitimement accès à la ressource concernée → traitez directement si la résolution relève de vous (réinitialisation d'accès, correction de facture, déblocage d'un projet) → sinon, escaladez vers l'équipe de développement pour toute anomalie technique → confirmez la résolution auprès du demandeur.
