<div align="center">

<img src="help/icon48.png" width="64" height="64" alt="doDev logo">

# doDev – Admin & Dev Toolkit for Salesforce

### [⬇️ Add to Chrome – free](https://chromewebstore.google.com/detail/agcjfjpmlmfbdbgfohficnccnknimhbd)

## Salesforce dev superpowers for everyone

✅ Free · ✅ No server · ✅ No account · ✅ No connected app · ✅ Nothing installed in your org · ✅ Any org you're logged into

[Website](https://doinittools.github.io/doinit-dodev-community/) · [How-to guides](https://doinittools.github.io/doinit-dodev-community/how-to/) · [Help](https://doinittools.github.io/doinit-dodev-community/help/) · [Privacy](privacy.md) · [Report a bug](../../issues/new?template=bug_report.md) · [Request a feature](../../issues/new?template=feature_request.md)

</div>

## Four toolboxes, one Salesforce login

| | Tool | What you get |
|:-:|---|---|
| 🔎 | [**Find**](https://doinittools.github.io/doinit-dodev-community/#find) | Who has access to a field, object or permission – and why · Who can open a record – and why · Where a field, class or flow is used · Any metadata, one page each |
| ⚖️ | [**Compare**](https://doinittools.github.io/doinit-dodev-community/#compare) | Profiles and permission sets · Two users – in one org or two · Apex, flows and metadata between orgs · Objects and org settings · Records, field by field |
| 🗂️ | [**Data**](https://doinittools.github.io/doinit-dodev-community/#data) | Query without writing SOQL · Start from a list view or a report · Export to Excel, CSV or JSON · Import, update or delete from CSV |
| ⏱️ | [**Monitor**](https://doinittools.github.io/doinit-dodev-community/#monitor) | Scheduled and batch Apex jobs · Failures in the last 7 days · What runs next · Any job by its Id or class |

> [!TIP]
> Press **Ctrl + K** to open any object, field, flow, Apex class, profile or permission set – one page each.

## 📚 How-to guides

- [Who has access to a field](https://doinittools.github.io/doinit-dodev-community/how-to/who-has-access-to-a-field)
- [Users with a system permission](https://doinittools.github.io/doinit-dodev-community/how-to/users-with-a-system-permission)
- [Who can access a record – and why](https://doinittools.github.io/doinit-dodev-community/how-to/why-can-a-user-see-a-record)
- [Everything a user can access](https://doinittools.github.io/doinit-dodev-community/how-to/everything-a-user-can-access)
- [Where a field is used](https://doinittools.github.io/doinit-dodev-community/how-to/where-is-a-field-used)
- [Find any metadata](https://doinittools.github.io/doinit-dodev-community/how-to/find-any-metadata)
- [Compare two profiles or permission sets](https://doinittools.github.io/doinit-dodev-community/how-to/compare-profiles-and-permission-sets)
- [Compare a profile between two orgs](https://doinittools.github.io/doinit-dodev-community/how-to/compare-profiles-between-two-salesforce-orgs)
- [Compare a profile with a permission set](https://doinittools.github.io/doinit-dodev-community/how-to/compare-profile-with-permission-set)
- [Permission set: sandbox vs production](https://doinittools.github.io/doinit-dodev-community/how-to/compare-permission-sets-between-sandbox-and-production)
- [Compare permission set groups](https://doinittools.github.io/doinit-dodev-community/how-to/compare-permission-set-groups)
- [Compare two users](https://doinittools.github.io/doinit-dodev-community/how-to/compare-two-users)
- [Compare a user in two orgs](https://doinittools.github.io/doinit-dodev-community/how-to/compare-users-in-two-salesforce-orgs)
- [What everyone in a role or profile has](https://doinittools.github.io/doinit-dodev-community/how-to/role-and-profile-members)
- [Compare Apex and metadata between orgs](https://doinittools.github.io/doinit-dodev-community/how-to/compare-apex-and-metadata-between-orgs)
- [Compare an object between orgs](https://doinittools.github.io/doinit-dodev-community/how-to/compare-an-object-between-orgs)
- [Compare org settings](https://doinittools.github.io/doinit-dodev-community/how-to/compare-org-settings)
- [Compare two records](https://doinittools.github.io/doinit-dodev-community/how-to/compare-two-salesforce-records)
- [Query data without SOQL](https://doinittools.github.io/doinit-dodev-community/how-to/query-salesforce-data-without-soql)
- [Import, update or delete from CSV](https://doinittools.github.io/doinit-dodev-community/how-to/import-update-delete-records-from-csv)
- [Monitor scheduled Apex jobs](https://doinittools.github.io/doinit-dodev-community/how-to/monitor-scheduled-apex-jobs)

**[All guides, step by step →](https://doinittools.github.io/doinit-dodev-community/how-to/)**

## ⚡ Setup vs. doDev

| The question | In Setup | With doDev |
|---|---|---|
| **Who can edit this field?** | Open every profile and permission set, one by one. | One list: every user, and the profile or permission set that gives it. |
| **Who has Export Reports?** | Check each profile and permission set. | Every user with it, and where it comes from. |
| **Why can this user see this record?** | Sharing settings, role hierarchy, teams, the Sharing button… | Every reason for every user, in one table. |
| **What's different in production?** | Two browser windows and a lot of scrolling. | Side by side: only in A, only in B, changed in both. |
| **Can I delete this field?** | Hope "Where is this used?" found everything. | Code, flows, formulas, layouts, reports and more – with the line. |
| **Show me this data in Excel** | Write SOQL, export, reformat. | Pick fields, run, Excel. |

## 🔒 Safe by design

> [!NOTE]
> Everything runs in your browser, using the Salesforce login you already have. Nothing is sent anywhere except to your own Salesforce org, and nothing is collected by us. Details: [privacy policy](privacy.md).

- **It only talks to Salesforce.** doDev asks for one permission (`cookies`) and access to Salesforce sites only. It cannot read or change any other website, and it adds nothing to the Salesforce pages you open.
- **No server, no account, no tracking.** Requests go straight from your browser to your own Salesforce org – and only to the org that login belongs to.
- **Read-only unless you ask.** The only tool that saves data is Data Import: it shows you what will change, and nothing is sent until you click its button.
- **Nothing installed in Salesforce.** No managed package, connected app or setup change in your org.
- **Reviewed by Google.** Every version is checked by the Chrome Web Store before it is published.

## ❓ FAQ

<details>
<summary><b>Is doDev really free?</b></summary>

Yes. No account and no paid tier. Install it from the [Chrome Web Store](https://chromewebstore.google.com/detail/agcjfjpmlmfbdbgfohficnccnknimhbd) and open it from any Salesforce page.

</details>

<details>
<summary><b>Chrome says "not trusted by Enhanced Safe Browsing". Is it safe?</b></summary>

Chrome shows this for extensions from publishers whose account is still new – Google trusts a publisher after a few months of following its policies. It isn't about what doDev does; you can safely choose **Continue to install**. Standard Chrome settings don't show the warning.

</details>

<details>
<summary><b>Which orgs does it work with?</b></summary>

Any org you are logged into in Chrome – production, sandboxes and Developer Edition orgs. Log into two orgs to compare them.

</details>

<details>
<summary><b>For IT teams: what exactly does it access?</b></summary>

The extension ID is `agcjfjpmlmfbdbgfohficnccnknimhbd`. What it accesses and how your data is protected are in the [privacy policy](privacy.md).

</details>

## 🐞 Bugs and ideas

This repository is the public home of doDev: report bugs, request features and read the privacy policy here. The extension's source code is kept in a separate private repository.

| | |
|---|---|
| 🐞 **Found a bug?** | [Open a bug report](../../issues/new?template=bug_report.md) |
| 💡 **Have an idea?** | [Request a feature](../../issues/new?template=feature_request.md) |

> [!WARNING]
> **Please don't post Salesforce data.** Describe the problem and include screenshots **without** customer names, record data, usernames or org IDs.

---

<sub>doDev is free to use. It is not affiliated with or endorsed by Salesforce, Inc. Salesforce is a trademark of Salesforce, Inc.</sub>
