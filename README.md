# EU AI Act Classifier

A simple, interactive decision-tree tool that helps users determine how the EU AI Act (Regulation (EU) 2024/1689) applies to their AI system.

## What it does

The classifier walks users through a structured series of questions based directly on the EU AI Act and produces one of the following results:

- **Out of scope** — the system is not covered by the AI Act
- **Not an AI system** — the system does not meet the legal definition
- **Prohibited** — the practice is banned under Article 5
- **High-risk** — full compliance obligations apply under Chapter III
- **Not high-risk** — documentation required under Article 6(3)–(4)
- **GPAI model** — obligations under Chapter V apply
- **GPAI with systemic risk** — enhanced obligations under Article 55
- **Transparency obligations only** — Article 50 applies
- **Minimal risk** — no specific obligations

## Why this exists

This tool is part of a broader AI governance portfolio. It demonstrates practical understanding of the EU AI Act's classification logic, including:

- Scope exclusions (Article 2)
- The definition of an AI system (Article 3(1))
- Prohibited practices (Article 5)
- High-risk classification rules (Article 6 and Annex III)
- Exceptions to high-risk classification (Article 6(3))
- General-purpose AI model obligations (Chapter V)
- Transparency obligations (Article 50)

## Language support

The tool is available in English and Finnish. The language can be toggled at any time without losing progress.

## Disclaimer

This tool is based on Regulation (EU) 2024/1689 (the EU AI Act) and is intended for informational purposes only. It does not constitute legal advice. Always consult a qualified legal professional for guidance on compliance.

## Technical stack

- React (Create React App)
- No backend — all logic is client-side
- Hosted via GitHub Pages

## Legal basis

All classification logic is based on the official text of Regulation (EU) 2024/1689 of the European Parliament and of the Council of 13 June 2024.

## Contact

- https://www.linkedin.com/in/joonas6
