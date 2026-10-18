# doDev

**Free Chrome extension for Salesforce admins and developers** – find any metadata, see who can access what and why, compare users, permissions and orgs, query data without writing SOQL, and monitor jobs.

This repository is the public home of doDev: **report bugs, request features and read the privacy policy here**. The extension's source code is kept in a separate private repository.

| | |
|---|---|
| ⬇ **Install** | [Add doDev to Chrome – Chrome Web Store](https://chromewebstore.google.com/detail/agcjfjpmlmfbdbgfohficnccnknimhbd) |
| 🐞 **Found a bug?** | [Open a bug report](../../issues/new?template=bug_report.md) |
| 💡 **Have an idea?** | [Request a feature](../../issues/new?template=feature_request.md) |
| 🔒 **Privacy policy** | [privacy.md](privacy.md) · [web page](https://doinittools.github.io/doinit-dodev-community/privacy) |

## What it does
- **Data** – Data Explorer (list-view style queries, SOQL/SOSL, record view), Data Import from CSV.
- **Find** – Who Has Metadata Access, Who Has Record Access, Where Is It Used, Find Any Metadata (objects, fields, Apex, LWC, Aura, Visualforce, flows, profiles, permission sets, labels…).
- **Compare** – users, permissions, role & profile members, code & metadata, objects and org settings – within one org or across orgs.
- **Monitor** – scheduled and async jobs.

## Privacy in one line
Everything runs in your browser, using the Salesforce login you already have. Nothing is sent anywhere except to your own Salesforce org, and nothing is collected by us. Details: [privacy policy](privacy.md).

## Is doDev safe?
- **It only talks to Salesforce.** doDev asks for one permission (`cookies`) and access to Salesforce sites only. It cannot read or change any other website, and it adds nothing to the Salesforce pages you open.
- **Your data stays in your browser.** There is no doDev server, no account to create and no tracking. Requests go straight from your browser to your own Salesforce org, using the login you already have – and only to the org that login belongs to.
- **It reads – it doesn't change anything – unless you ask.** The only tool that saves data is Data Import: it shows you what will change, and nothing is sent until you click its button.
- **Nothing installed in Salesforce.** No managed package, connected app or setup change in your org.
- **Reviewed by Google.** Every version is checked by the Chrome Web Store before it is published.

**"This extension is not trusted by Enhanced Safe Browsing"?** Chrome shows this for extensions from publishers whose account is still new – Google trusts a publisher after a few months of following its policies. It isn't about what doDev does; you can safely choose **Continue to install**. Standard Chrome settings don't show the warning.

**For IT teams:** the extension ID is `agcjfjpmlmfbdbgfohficnccnknimhbd`. Details of what it accesses and how your data is protected are in the [privacy policy](privacy.md).

## Please don't post Salesforce data
When you report a problem, describe it and include screenshots **without** customer names, record data, usernames or org IDs.

---
doDev is free to use. It is not affiliated with or endorsed by Salesforce, Inc. Salesforce is a trademark of Salesforce, Inc.
