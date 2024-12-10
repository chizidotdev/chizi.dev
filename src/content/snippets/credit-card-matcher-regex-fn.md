---
title: Credit Card Matcher Regex Fn
description: Obtain credit/debit card type based on input.
date: 2023-08-27T22:22:37Z
published: true
featured: true
---

Function with regex matchers to obtain different credit/debit card types based on number input.

```typescript
export function getCardType(value: string) {
  // visa
  const visaRegex = new RegExp("^4[0-9]{12}(?:[0-9]{3})?$");
  if (value.match(visaRegex) != null) return "Visa";

  // Mastercard
  // Updated for Mastercard 2017 BINs expansion
  const masterCardRegex = new RegExp(
    "^5[1-5][0-9]{14}|^(222[1-9]|22[3-9]\\d|2[3-6]\\d{2}|27[0-1]\\d|2720)[0-9]{12}$"
  );
  if (value.match(masterCardRegex) != null) return "Mastercard";

  // Discover
  const discoverRegex = new RegExp(
    "^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)"
  );
  if (value.match(discoverRegex) != null) return "Discover";

  const americanExpressRegex = new RegExp("^3[47][0-9]{13}$");
  if (value.match(americanExpressRegex) != null) return "American Express";

  return "";
}
```
