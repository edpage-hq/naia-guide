---
layout: doc
---

# Guide — Cashier

Keep the Cash module: collect payments, issue receipts, pay, close.

The Cash module is edPage group's cash journal, in FCFA, split across several cash desks: head-office cash, mobile money, bank, NEXTBOXX (Kura account) and SEDVER. The cashier records, the administrator validates, Management reads everything. Two-factor authentication is mandatory for you (see [Account security](./introduction#two-factor-authentication)).

Your **Today** page lists what's waiting for you: expenses and payment orders to pay, client transfers to confirm.

## Principles

- A cash desk's balance is the sum of its journal: inflows minus outflows. Its first line is the opening float, recorded only once.
- **No line is ever edited or deleted.** An error is corrected by a **reverse entry**, with its reason, only once per line. The corrected line stays visible, struck through.
- **Whoever validates doesn't pay**: you can't pay an expense or an order you validated.

## Collecting a payment

From a cash desk's page, **Collect** a payment: amount, method, date, reference (transaction, Kura receipt…), and what it pays:

- an open project invoice: it switches to "paid" once settled. A payment never exceeds what's left to pay;
- a sent proposal;
- another income (licence, subscription, maintenance, hosting, services, NEXTBOXX instalment, SEDVER order…), with the payer's name.

Each identified payment gets its **receipt** (`REC-AAAA-XXX`), sent as a PDF to the payer whose address is known. It can be resent from the journal. A receipt whose line is corrected prints as "cancelled".

**Suspense account**: a payment no one can identify yet enters the journal without a receipt. Allocate it as soon as you know what it pays; the receipt is then issued.

**Client transfers**: a client who declares a transfer attaches its proof. Check it on the statement, then validate (the receipt is issued in the Bank desk, or the one you choose) or refuse with a reason, which the client sees.

## Expenses

In **Expenses**:

1. Request an expense (`DEP-AAAA-XXX`): type (commission, expert, payroll, refund, taxes and charges, costs), beneficiary, purpose, amount and, if you have it, the supporting document.
2. The administrator validates or refuses it. Above its type's threshold, Management validates next.
3. Once validated, pay it from a cash desk that holds enough, with the method, date and reference. The beneficiary receives a payment receipt.

Attach the supporting document to the request, to the payment or afterwards. An expense paid without one is flagged.

## Payment orders

**Payment orders** (`OP-AAAA-XXX`) come from a validated event: a partner invoice, a commission sheet, an approved refund, a payslip.

- The order stays paused during the review period (48 h by default), then it's ready.
- Pay it with the method of your choice. The beneficiary's preferred method is pre-selected, and their details are shown.
- If no cash desk holds enough, the order waits and the administrators are alerted.
- A reverse entry on the payment makes the order ready again.

## Transfers and closing

- **Transfer between cash desks**: request it (from and to desks, amount, reason); an administrator validates it. You can cancel your request until it's validated.
- **Daily closing**: count what the desk holds. Naia compares your count with the journal's balance; a gap must be justified. The administrator validates the closing or sends it back to you with a reason. Once validated, no line dated before the count can be written in that desk any more.

## Refunds

In **Refunds**, request the refund of all or part of a confirmed payment, with the amount, reason and beneficiary. Management approves or refuses; approval creates a payment order. Once the order is paid, the credit note is issued and the commission calculated on that payment is taken back.

NEXTBOXX and SEDVER (WHMCS) refund in Kura and in WHMCS, and Naia records it.

## Follow-up

- **Unpaid and due**: everything owed, with the reminders sent. Naia sends reminders before the due date and follow-ups after it on its own, every day at 8 am.
- **Cash statements**: for a period and a desk (or all), opening and closing balances, inflows and outflows by nature and by method, income by product and by client, expenses by type, commissions to pay and unpaid items. The statement exports to PDF and Excel, the journal to PDF, Excel and CSV, and a SYSCOHADA export is provided for the accountant.
- **NEXTBOXX (Kura)**: the instalments paid in Kura. Until the automatic reading of Kura is connected, enter each instalment by hand, with the Kura receipt reference.
- **Sales commissions**, **Invoices** and **Credit notes**: read-only.
