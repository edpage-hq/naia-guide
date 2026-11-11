---
layout: doc
---

# Guide — Caissier

Tenir la Caisse : encaisser, émettre les reçus, payer, clôturer.

La Caisse est le journal de trésorerie d'edPage group, en FCFA, réparti sur plusieurs caisses : espèces siège, mobile money, banque, NEXTBOXX (compte Kura) et SEDVER. Le caissier enregistre, l'administrateur valide, la Direction lit tout. La double authentification est obligatoire pour vous (voir [Sécurité du compte](./introduction#double-authentification)).

Votre page **Aujourd'hui** liste ce qui vous attend : dépenses et ordres de paiement à payer, virements de clients à confirmer.

## Principes

- Le solde d'une caisse est la somme de son journal : entrées moins sorties. Sa première ligne est le fond de caisse d'ouverture, enregistré une seule fois.
- **Aucune ligne ne se modifie ni ne se supprime.** Une erreur se corrige par une **écriture inverse**, avec son motif, une seule fois par ligne. La ligne corrigée reste visible, barrée.
- **Celui qui valide ne paie pas** : vous ne pouvez pas payer une dépense ou un ordre que vous avez validé.

## Encaisser

Depuis la fiche d'une caisse, **Encaisser** un paiement : montant, mode, date, référence (transaction, reçu Kura…), et ce qu'il paie :

- une facture de projet ouverte : elle passe « payée » une fois soldée. Un paiement ne dépasse jamais ce qui reste dû ;
- une proposition envoyée ;
- une autre recette (licence, abonnement, maintenance, hébergement, services, tranche NEXTBOXX, commande SEDVER…), avec le nom du payeur.

Chaque paiement identifié reçoit son **reçu** (`REC-AAAA-XXX`), envoyé en PDF au payeur dont l'adresse est connue. Il se renvoie depuis le journal. Un reçu dont la ligne est corrigée s'imprime « annulé ».

**Compte d'attente** : un paiement que personne ne sait encore identifier entre dans le journal sans reçu. Affectez-le dès que vous savez ce qu'il paie ; le reçu est alors émis.

**Virements des clients** : un client qui déclare un virement joint sa preuve. Vérifiez-la sur le relevé, puis validez (le reçu est émis dans la caisse Banque, ou celle que vous choisissez) ou refusez avec un motif, que le client voit.

## Dépenses

Dans **Dépenses** :

1. Demandez une dépense (`DEP-AAAA-XXX`) : type (commission, expert, paie, remboursement, impôts et charges, frais), bénéficiaire, objet, montant et, si vous l'avez, le justificatif.
2. L'administrateur la valide ou la refuse. Au-dessus du seuil de son type, la Direction valide ensuite.
3. Une fois validée, payez-la depuis une caisse qui contient assez, avec le mode, la date et la référence. Le bénéficiaire reçoit un reçu de paiement.

Joignez le justificatif à la demande, au paiement ou après. Une dépense payée sans justificatif est signalée.

## Ordres de paiement

Les **Ordres de paiement** (`OP-AAAA-XXX`) naissent d'un événement validé : facture d'un partenaire, fiche de commissions, remboursement approuvé, bulletin de paie.

- L'ordre reste en pause pendant le délai de contrôle (48 h par défaut), puis il est prêt.
- Payez-le avec le mode de votre choix. Le mode préféré du bénéficiaire est présélectionné, et ses coordonnées s'affichent.
- Si aucune caisse ne contient assez, l'ordre attend et les administrateurs sont alertés.
- Une écriture inverse sur le paiement rend l'ordre à nouveau prêt.

## Transferts et clôture

- **Transfert entre caisses** : demandez-le (caisses de départ et d'arrivée, montant, motif) ; un administrateur le valide. Vous pouvez annuler votre demande tant qu'elle n'est pas validée.
- **Clôture journalière** : comptez ce que contient la caisse. Naia compare votre comptage au solde du journal ; un écart doit être justifié. L'administrateur valide la clôture ou vous la renvoie avec un motif. Après validation, plus aucune ligne datée avant le comptage ne peut être écrite dans cette caisse.

## Remboursements

Dans **Remboursements**, demandez le remboursement de tout ou partie d'un paiement confirmé, avec le montant, le motif et le bénéficiaire. La Direction approuve ou refuse ; l'approbation crée un ordre de paiement. Une fois l'ordre payé, l'avoir est émis et la commission calculée sur ce paiement est reprise.

NEXTBOXX et SEDVER (WHMCS) remboursent dans Kura et dans WHMCS, et Naia l'enregistre.

## Suivi

- **Impayés et échéances** : tout ce qui est dû, avec les rappels envoyés. Naia envoie lui-même les rappels avant échéance et les relances après échéance, chaque jour à 8 h.
- **États de caisse** : pour une période et une caisse (ou toutes), les soldes d'ouverture et de clôture, les entrées et sorties par nature et par mode, les recettes par produit et par client, les dépenses par type, les commissions à payer et les impayés. L'état s'exporte en PDF et en Excel, le journal en PDF, Excel et CSV, et un export SYSCOHADA est prévu pour le comptable.
- **NEXTBOXX (Kura)** : les tranches payées dans Kura. Tant que la lecture automatique de Kura n'est pas branchée, saisissez chaque tranche à la main, avec la référence du reçu Kura.
- **Commissions ventes** et **Factures**, **Avoirs** : en lecture.
