---
sidebar_position: 100
---
# Apple System Security Advisory 

## Vulnerability Description

Recently, Apple officially released multiple high-risk vulnerabilities for their products, including two arbitrary code execution vulnerabilities CVE-2023-41064 and CVE-2023-41061, which are called the BLASTPASS exploit chain. Attackers can exploit them via malicious PassKit attachments in iMessages without any user interaction, allowing arbitrary code execution by sending the malware from the attacker's iMessage account to the victim.

The exploit chain has been publicly disclosed and is being widely exploited by NSO Group's Pegasus spyware. Apple has issued emergency patch updates, and recommends users upgrade patches as soon as possible.

Official announcement: https://support.apple.com/en-us/HT213905

## Affected Range

  | No. | System | Version | Remarks |
  |:-:|:-:|:-:|:-:|
  | 1 | macOS | Ventura < 13.5.2 |  |
  | 2 | iOS | < 16.6.1 | iPhone 8 and newer |

## Remediation Suggestions

Upgrade the os version of your apple device to the latest version.

Refers to the official upgrade announcement for details: <https://support.apple.com/en-us/HT211222>
