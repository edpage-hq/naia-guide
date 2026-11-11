---
layout: doc
---

# Guide — Administrateur

Gérer les comptes, la facturation et les paramètres, et valider les opérations de la Caisse.

En tant qu'Administrateur, vous avez accès à presque toute la plateforme. Deux domaines vous restent fermés : les dossiers RH et la paie, réservés au gestionnaire RH et à la Direction. La double authentification est obligatoire pour vous (voir [Sécurité du compte](./introduction#double-authentification)).

## Comptes et accès

Dans la section **Équipe** du menu :

- **Utilisateurs** : créez et gérez les comptes, attribuez un ou plusieurs rôles internes, ou un rôle externe. Les changements de rôle sont tracés dans le journal d'audit. Pour retirer un accès, suspendez le compte : un compte suspendu ne peut plus se connecter, ni sur le web ni sur l'application mobile.
- Créez aussi depuis **Utilisateurs** les comptes des **contributeurs externes** des pôles, et ceux des experts externes que le pôle RH doit pouvoir affecter à un projet.
- **Demandes de comptes** : traitez les demandes de création ou de retrait envoyées par le gestionnaire RH. Créez le compte (formulaire ou invitation), puis marquez la demande traitée ; un retrait suspend le compte et lui ôte ses rôles.
- Pour un commercial indépendant, choisissez les **produits confiés** sur sa fiche. Un produit retiré l'est après un préavis de 15 jours ; le reconfier pendant le préavis l'annule.

## Administration

La rubrique **Administration** regroupe :

- **Organisations** : clients et partenaires ;
- **Types de projet** : phases, jalons et pourcentages de facturation par défaut de chaque type, qui pré-remplissent un nouveau projet ;
- **Devises** ;
- **Paramètres** : les réglages du back-office (délais de paiement, délais surveillés, taux de commission, attribution des pistes, délais du support, mots interdits dans les codes…). Un changement prend effet tout de suite ou à une date future, jamais dans le passé ; l'ancienne valeur reste dans l'historique, avec son auteur et son motif ;
- **Papier en-tête** : le texte du pied de page de tous les documents émis. Chaque modification crée une nouvelle version datée ; un document garde la version en vigueur à son émission ;
- **Modèles juridiques** : contrat du commercial indépendant, convention d'apport, charte du partenaire d'influence, conventions des produits. Une version publiée ne se modifie jamais : publiez-en une nouvelle, avec un motif. Les signataires concernés la signent alors de nouveau ;
- **Soumissions des pôles** : voir ci-dessous ;
- **Échanges avec les produits** : les messages échangés avec ERA, ELEIS, Kura et SEDVER. Un message en échec ou en attente se renvoie d'ici ;
- **Produits WHMCS** : la correspondance entre les produits WHMCS et les offres de la grille. Un produit inconnu attend d'être classé ici.

## Facturation

Dans la section **Facturation** :

- **Devis** et **Factures pro forma** : créez-les librement, y compris avant tout projet ;
- **Factures** : les factures des jalons facturables sont émises automatiquement par la Caisse à la validation du jalon. Une facture reçoit son numéro à l'émission ; tant qu'elle est en brouillon, elle peut être supprimée. Une facture émise ne se supprime pas : elle se corrige par un **avoir** ;
- **Bons de livraison** : générez le bon de livraison et l'attestation de bonne fin d'exécution, puis envoyez-les en signature au client ;
- **Commissions projets** : les anciennes commissions d'apporteurs sur les projets, qui restent à payer. Depuis la V3, un apporteur ne touche plus rien sur un projet.

Préparez aussi le document d'**avenant** demandé par un chef de projet, et suivez sa signature par le client.

## Caisse

Vous avez dans la Caisse les mêmes droits que le caissier (voir le [guide Caissier](./caissier)), et en plus :

- vous créez, renommez et désactivez les caisses ;
- vous **validez ou refusez les dépenses** (sauf vos propres demandes, à moins d'être le seul administrateur), les **transferts entre caisses** et les **clôtures journalières** ;
- vous pouvez suspendre, reprendre ou annuler un **ordre de paiement**, avec un motif ;
- vous arrêtez les récurrences d'une proposition, avec un motif ;
- vous fixez le **prix sur devis** d'une offre (GED, modules ERA) depuis **Prix sur devis**.

Celui qui valide une opération ne la paie pas : Naia l'empêche.

## Commercial

Vous voyez et travaillez toutes les **Pistes**, attribuez-les avec un motif, gérez les **Codes** (activation, suspension, réactivation, chaque fois avec un motif), tenez la **Grille de prix** (offres et prix publics) et suivez les **Vidéos des partenaires**, les **Candidatures**, les **Contrats commerciaux** et les **Commissions ventes**. Les **Remises à valider** se lisent, mais ce sont les responsables commerciaux qui décident.

## Soumissions des pôles

La page **Soumissions des pôles** rassemble ce que les contributeurs externes envoient et qui attend votre intervention :

- **Demandes de projet** (pôle Commercial) : choisissez le client (existant, ou à créer s'il est nouveau), désignez le chef de projet, ajustez le nom si besoin, puis cliquez sur **Créer le projet**. Le projet est créé avec sa référence et le chef de projet est notifié.
- **Besoins de développement à trier** (pôles Support et Commercial) : un besoin envoyé sans projet connu attend ici que vous choisissiez le projet. **Créer la tâche** l'ajoute au projet, avec un badge qui indique son origine.
- **Écarter** retire une soumission invalide ; le journal d'audit en garde la trace.

## Blocage pour impayé et sécurité

- Quand le pôle Facturation signale un paiement **en retard**, vous êtes alerté, comme la Direction. Depuis la fiche du projet, décidez de **Bloquer le projet** ou de **Ne pas bloquer**. Quand le paiement est revenu à jour, **débloquez le projet**.
- Le blocage est un verrou « doux » : les tâches déjà démarrées se terminent, mais personne ne peut démarrer une nouvelle tâche ni valider un jalon. Tout le reste reste possible, y compris payer. Seul le projet concerné est bloqué.
- Le **Journal d'audit** (section Direction du menu) retrace les actions faites sur la plateforme.

## Support de premier niveau

Les demandes des utilisateurs arrivent au support (<support@edpage.net> et formulaire Naia), traité par l'[équipe support](./equipe-support). Vous intervenez quand la résolution relève de vous : accès, compte suspendu à tort, correction de facture, déblocage d'un projet.
