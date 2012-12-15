Ext.onReady(function() {
    Ext.define("MyApp.locale.ja.view.ToDateField", {
        override: "MyApp.view.ToDateField",
        fieldLabel : "To"
    });
    Ext.define("MyApp.locale.ja.view.FromDateField", {
        override: "MyApp.view.FromDateField",
        fieldLabel : "From"
    });
});

