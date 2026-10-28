---
title: How to compare two Salesforce records – field by field, even between orgs
description: Compare two or more Salesforce records side by side – every field, lookups by name, and their child records – in one org or between a sandbox and production.
---

# How to compare two Salesforce records

**Short answer:** Salesforce has no screen that puts two records side by side, so you open both and compare field by field – or export them and line them up in Excel. doDev, a free Chrome extension, compares up to five records of the same object in one go, in one org or across orgs, and highlights what differs.

## Compare them with doDev

1. [Install doDev](https://chromewebstore.google.com/detail/agcjfjpmlmfbdbgfohficnccnknimhbd?utm_source=dodev-site&utm_medium=how-to). To compare across orgs – for example the same account in a sandbox and in production – log into both in the same browser.
2. Open doDev and go to **Compare → Records**.
3. For each record, pick its org and paste its record Id (15 or 18 characters). **+ Add a record** adds up to five.
4. Click **Compare records**.

You get:

- **Every field side by side** – label, API name and one column per record, with only the values that differ highlighted. *Differences* and *the same* filter the list.
- **Lookups compared by name** – Owner, Parent Account and other lookups show the name of the record they point to, so two orgs with different record Ids still line up.
- **Fields one org doesn't have**, marked as such – handy when a sandbox has fields production doesn't yet.
- **Child records** – each child object (contacts, cases, history, your custom objects) with how many records each record has. A count opens those records in doDev's Data Explorer.

System fields that always differ – Id, created and last modified – are kept apart; check *System fields* to see them.

## Doing it without a tool

Open both records and compare them on screen, or query both with the same SOQL (for example in the Developer Console or Workbench), export the results and compare the rows in Excel. Across orgs, run the query in each org and remember that lookup fields hold different record Ids there.

---

More how-to guides: [all guides](./) · [doDev help](../help/#recs)
