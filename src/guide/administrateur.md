---
layout: doc
---

# Guide — Administrateur

Administrer comptes, facturation et sécurité.

En tant qu'Administrateur, vous disposez d'un accès complet à la plateforme.

## Gestion des comptes et des accès

- Créez et gérez les comptes utilisateurs (internes, clients, partenaires, apporteurs d'affaires) depuis **Utilisateurs**, et attribuez-leur un rôle.
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

## Suspension et sécurité

- Suspendez ou levez la suspension d'un projet en cas de facture impayée, concurremment au chef de projet du projet concerné.
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

**Traitement :** accusez réception → qualifiez la catégorie et vérifiez que la personne a légitimement accès à la ressource concernée → traitez directement si la résolution relève de vous (réinitialisation d'accès, correction de facture, levée de suspension) → sinon, escaladez vers l'équipe de développement pour toute anomalie technique → confirmez la résolution auprès du demandeur.
