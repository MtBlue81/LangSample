LangSample
==========

言語切替サンプル

* Ext JSはindex.htmlと同ディレクトリにextjsというディレクトリで配置することを想定しています。
* ext-lang-en.jsに必要なパッチは以下
```
    @@ -100,7 +100,12 @@
            monthYearText: 'Choose a month (Control+Up/Down to move years)',
            todayTip: "{0} (Spacebar)",
            format: "m/d/y",
    -        startDay: 0
    +        startDay: 0,
    +        ariaTitle: '{0}',
    +        ariaTitleDateFormat: 'F d, Y',
    +        longDayFormat: 'F d, Y',
    +        monthYearFormat: 'F Y'
        });

        Ext.define("Ext.locale.en.picker.Month", {
```
