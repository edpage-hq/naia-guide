---
layout: doc
---

# Guide — Administrator

Administer accounts, billing and security.

As an Administrator, you have full access to the platform.

## Account and access management

- Create and manage user accounts (internal, clients, partners, referrers) from **Users**, and assign them a role.
- Also from **Users**, create the accounts of the Commercial, Support, HR and Billing poles' **external contributors**, picking the matching pole's role. Only you create and revoke these accounts; to revoke access, suspend the account. A collaborator or external expert the HR pole must be able to assign to a project first needs their own account.
- Manage organizations (clients, partners) from **Organizations**.
- Configure **project types** from **Project types**: each type's default phases, milestones and billing percentages — these are the templates that automatically pre-fill a new project when a project manager creates it.

## Billing

- Generate and send the corresponding invoice (deposit, intermediate, balance, or equipment) when a billable milestone is validated by the project manager.
- Generate the **delivery note** and the **completion certificate**, then send them out for electronic signature to the client.
- Freely create quotes and pro forma invoices, even before a project exists, from **Quotes** and **Pro forma invoices**.
- Configure and oversee online payment methods (Mobile Money, card) and track payments received from each project's billing page.

## External ecosystem

- Set each referrer's commission rate from their user page (typically between 5 and 15%, adjustable case by case) and track the total of their commissions due and paid.
- Approve invoices submitted by partners on each project's **Partner payments** tab, and record their payment once it's been made.
- Generate the amendment document at the project manager's request and track its signature by the client.
- From a partner's or referrer's page, download the blank contract templates (framework agreement, mission sheet, confidentiality agreement, agency agreement) to hand to them — this action is also available to the project manager from a project's team.

## Pole submissions

The **Pole submissions** page gathers what external contributors send that needs your action:

- **Project requests** (Commercial pole): pick the client — the matching existing client, or create it if it's new —, appoint the project manager, adjust the name if needed, then click **Create the project**. The project is created with its reference (`NAIA-0142`) and the project manager is notified.
- **Development needs to triage** (Support and Commercial poles): a need sent without a known project waits here until you pick the project concerned. **Create the task** adds it to the project, with a badge showing its origin.
- **Discard** removes an invalid submission; it disappears from its author's list, and the audit log keeps a trace of it.

You're notified, in the app and by e-mail, of every new submission.

## Blocking for non-payment and security

- When the Billing pole reports a payment as **overdue**, you're alerted, as is Direction. From the project page, choose **Block the project** or **Do not block**. Once the payment is back up to date, **unblock the project**.
- Blocking is a "soft" lock: tasks already started can finish, but nobody — the project manager included — can start a new task or validate a milestone. Everything else remains possible, including paying. Only the project concerned is blocked, never the client's other projects.
- Review the **audit log** to trace actions taken on the platform.
- Manage your own account's security (password, two-factor authentication) from **Settings > Security** — enabling 2FA is automatically suggested to you when you sign in.

## First-level support

You handle first-level support for platform users.

**Channels:** a project's built-in messaging is the priority channel (keeps the history in its context); a dedicated support email covers requests outside the context of a specific project (e.g. a login issue).

**Categorizing requests:**

| Category          | Examples                                                     | Indicative first-response time                     |
| ----------------- | ------------------------------------------------------------ | -------------------------------------------------- |
| Access / login    | Forgotten password, wrongly suspended account, blocking 2FA  | 4 business hours                                   |
| Billing / payment | Invoice not received, failed online payment, disputed amount | 1 business day                                     |
| Functional        | Usage question, unexpected feature behavior                  | 1 business day                                     |
| Technical issue   | Blocking error, inaccessible page                            | 4 business hours, immediate escalation if blocking |

**Handling:** acknowledge the request → categorize it and verify the person legitimately has access to the resource in question → handle it directly if it's within your remit (resetting access, correcting an invoice, unblocking a project) → otherwise, escalate to the development team for any technical issue → confirm resolution with the requester.
