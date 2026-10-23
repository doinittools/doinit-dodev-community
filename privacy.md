---
title: Privacy policy
description: doDev runs entirely in your browser. It reads only the Salesforce org you are logged into and collects, stores and sends nothing.
---

# Privacy Policy

*Applies to: "doDev – Admin & Dev Toolkit for Salesforce" (the "Extension"), published by doInit Tools.*
*Last updated: 7 October 2026*

## Summary
The Extension runs entirely inside your browser. It reads information from the Salesforce org you are already logged into, shows it to you, and then forgets it. **We do not collect, store, sell or send your data anywhere.**

## What the Extension accesses
- **Your Salesforce session cookie** (`sid`), only on Salesforce domains. It is used to call the Salesforce APIs of *the same org it belongs to*, exactly as your browser already does when you use Salesforce.
- **Salesforce data you ask to see** – for example profiles, permission sets, users, sharing, metadata, source code and records. Only what the tool you run needs is requested.
- **Your Salesforce user's time zone**, so dates and times look the way Salesforce shows them.

## What the Extension does NOT do
- ✗ No data is sent to us or to any third party – there is no server of ours at all.
- ✗ No analytics, tracking, advertising or remote code.
- ✗ No connected app and nothing installed in your Salesforce org.
- ✗ Your session is never saved, and Salesforce records are never saved.
- ✗ Nothing is added to Salesforce pages – the Extension opens only when you click its toolbar icon.
- ✗ No cookies of its own.
- ✗ Nothing in Salesforce is changed, except when you choose to import or update records (see *Data you put in*).

## How your data is protected
- **Locked to your own orgs** – every request is checked before it is sent: HTTPS only, and only to a Salesforce org you are logged into in this browser. Any other address is refused.
- **No redirects followed** – a reply that points somewhere else is stopped, so your session can't be passed on.
- **Blocked by the browser too** – the Extension's pages are only allowed to connect to Salesforce, so even a fault in the code could not send data elsewhere.
- **Your session stays where it belongs** – sent only to its own org; never saved and never put in a web address.
- **No remote code** – everything runs from the installed package; nothing is downloaded or run on the fly.
- **Data shown as plain text** – a record value can never run code in the page.
- **Encrypted on your computer** – what is kept (below) is encrypted with AES-256-GCM, with a key the browser can use but not read out.
- **Checked messages** – the Extension's own pages only accept messages from each other.


## What is kept on your computer
Only these, encrypted, in your browser's storage for this Extension – never Salesforce records, and never sent anywhere:

- **Saved queries** – the query text and the name you give it. *Remove:* Delete in ☆ Saved.
- **Query history** – your last 100 queries: text, object, org name, time and row count. *Remove:* Clear history.
- **Recent runs** – the inputs you chose in each tool (e.g. names of profiles, users or orgs, an object or record Id), never results. *Remove:* the × next to each one.
- **Last session** – which tools were open, their names and last inputs or query, so they can be restored. *Remove:* close the tools.
- **Recent searches** – your last 8 searches in the search box per org (the name and Id of what you opened). *Remove:* Clear.
- **Preferences** – Compare Code & Metadata scope per pair of orgs, where Where Is It Used looks, hidden table columns. *Change them in the tool.*

Clearing your browser's site data for the Extension removes all of this, including the key.


## Data you put in
- **CSV files and pasted rows** (Data Import) are read inside the open page only – they are not uploaded anywhere except, when you confirm, as the records you chose to create, update or delete in your org.
- **Data Import** is the only feature that changes Salesforce. It shows a preview and a check first, and nothing is saved until you click the button that names the record count (a production org gets a warning next to it). Deleted records go to the Salesforce Recycle Bin.
- **⬆ Import** of a query file reads the file you choose inside the page only.
- **Where Is It Used** downloads Experience Cloud site definitions with the Metadata API's read-only *retrieve* call; the download is read in the open page and is not saved.

## Files you create
**Download** (CSV or Excel), **Copy**, **⬇ Export**, **Gap permission set** and **Print** create the file or text locally on your computer, through your browser. What you do with it afterwards is up to you.

## Permissions and why they are needed
- **cookies** – reads your existing Salesforce session, so the Extension can call the Salesforce API as you without asking you to log in again.
- **Access to Salesforce sites** – the Extension is allowed onto Salesforce's own domains (such as salesforce.com and force.com, including Salesforce Government Cloud and Salesforce on Alibaba Cloud) so it works with whichever org you use. **It only ever contacts the specific org(s) you are logged into in this browser** – for example *your-company.my.salesforce.com* – never all Salesforce sites, and never any other website.


## Limited Use
The use of information received from Salesforce APIs adheres to the Chrome Web Store User Data Policy, including the Limited Use requirements. Data is used only to provide the features you use, is never transferred to others, and is never used for advertising or to determine creditworthiness.

## Children
The Extension is a professional tool and is not directed at children.

## Changes
If this policy changes, the updated version will be published at the same address with a new date.

## Contact
Questions about this policy: email **doinittools@gmail.com** or open an issue at https://github.com/doinittools/doinit-dodev-community/issues (please do not include any Salesforce data).
