#HODL Button

The button for BTC.

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