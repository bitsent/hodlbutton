# HODL Button

The button for BTC.

This software is released under the OPEN ONLY-BTC-SPECIFIC LICENSE.
That means that it is only permitted to use it on the BTC chain.
Usage on any other chain is a license breach.

# INSTRUCTIONS

Usage For Payments:

```js
      hodlbutton.create(
        "#buttonArea1",                         // where to put the button
        "Pay Me",                               // message
        "1cf7uvEBNqXrpampZheh5FnFtYLZCgHHH",    // address
        0.005                                   // amount in BTC
      );
```

Usage For Non-Payments:

```js
      hodlbutton.create(
        "#buttonArea2",
        "Just HODL"
      );
```