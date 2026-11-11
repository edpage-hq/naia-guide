---
layout: doc
---

# Guide — Administrator

Manage accounts, billing and settings, and validate Cash operations.

As Administrator, you have access to almost the whole platform. Two areas stay closed to you: HR files and payroll, reserved for the HR manager and Management. Two-factor authentication is mandatory for you (see [Account security](./introduction#two-factor-authentication)).

## Accounts and access

In the menu's **Team** section:

- **Users**: create and manage accounts, assign one or more internal roles, or an external role. Role changes are recorded in the audit log. To remove access, suspend the account: a suspended account can no longer sign in, neither on the web nor on the mobile app.
- Also create from **Users** the accounts of the poles' **external contributors**, and those of external experts the HR pole must be able to assign to a project.
- **Account requests**: handle the creation or removal requests sent by the HR manager. Create the account (form or invitation), then mark the request handled; a removal suspends the account and takes away its roles.
- For an independent sales agent, choose the **products entrusted** on their page. A product is withdrawn after 15 days' notice; entrusting it again during the notice cancels the withdrawal.

## Administration

The **Administration** section gathers:

- **Organizations**: clients and partners;
- **Project types**: each type's default phases, milestones and billing percentages, which pre-fill a new project;
- **Currencies**;
- **Settings**: the back-office values (payment delays, monitored deadlines, commission rates, lead assignment, support deadlines, forbidden words in codes…). A change takes effect immediately or at a future date, never in the past; the old value stays in the history, with its author and reason;
- **Letterhead**: the footer text of every issued document. Each change creates a new dated version; a document keeps the version in force when it was issued;
- **Legal templates**: the independent sales agent contract, referrer agreement, influence partner charter, product agreements. A published version is never edited: publish a new one, with a reason. The signatories concerned then sign it again;
- **Pole submissions**: see below;
- **Exchanges with the products**: the messages exchanged with ERA, ELEIS, Kura and SEDVER. A failed or pending message can be resent from here;
- **WHMCS products**: the mapping between WHMCS products and the grid's offers. An unknown product waits to be sorted here.

## Billing

In the **Billing** section:

- **Quotes** and **Proforma invoices**: create them freely, even before any project;
- **Invoices**: invoices for billable milestones are issued automatically by the Cash module when the milestone is validated. An invoice gets its number when issued; while it's a draft, it can be deleted. An issued invoice is never deleted: it's corrected with a **credit note**;
- **Delivery notes**: generate the delivery note and the certificate of completion, then send them to the client for signature;
- **Project commissions**: the former referrer commissions on projects, still to be paid. Since V3, a referrer earns nothing on a project.

Also prepare the **amendment** document requested by a project manager, and follow its signature by the client.

## Cash

In the Cash module you have the same rights as the cashier (see the [Cashier guide](./caissier)), plus:

- you create, rename and deactivate cash desks;
- you **validate or refuse expenses** (except your own requests, unless you're the only administrator), **transfers between cash desks** and **daily closings**;
- you can suspend, resume or cancel a **payment order**, with a reason;
- you stop a proposal's recurrences, with a reason;
- you set the **price on quote** of an offer (GED, ERA modules) from **Prices on quote**.

Whoever validates an operation doesn't pay it: Naia prevents it.

## Sales

You see and work all **Leads**, assign them with a reason, manage **Codes** (activation, suspension, reactivation, each time with a reason), keep the **Price grid** (offers and public prices) and follow **Partner videos**, **Applications**, **Commercial contracts** and **Sales commissions**. **Discounts to decide** are readable, but the sales managers decide.

## Pole submissions

The **Pole submissions** page gathers what external contributors send that needs your intervention:

- **Project requests** (Commercial pole): pick the client (existing, or to create if new), appoint the project manager, adjust the name if needed, then click **Create the project**. The project is created with its reference and the project manager is notified.
- **Development needs to sort** (Support and Commercial poles): a need sent without a known project waits here for you to pick the project. **Create the task** adds it to the project, with a badge showing its origin.
- **Dismiss** removes an invalid submission; the audit log keeps a trace.

## Blocking for non-payment and security

- When the Billing pole reports an **overdue** payment, you're alerted, like Management. From the project's page, decide to **Block the project** or **Don't block**. Once the payment is back up to date, **unblock the project**.
- Blocking is a "soft" lock: tasks already started finish, but no one can start a new task or validate a milestone. Everything else stays possible, including paying. Only the project concerned is blocked.
- The **Audit log** (Management section of the menu) traces the actions done on the platform.

## First-level support

Users' requests reach support (<support@edpage.net> and the Naia form), handled by the [support team](./equipe-support). You step in when the fix is yours: access, account wrongly suspended, invoice correction, unblocking a project.
