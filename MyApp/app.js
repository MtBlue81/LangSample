Ext.Loader.setConfig({
    enabled: true
});
Ext.onReady(function() {
    Ext.tip.QuickTipManager.init();
});

Ext.application({

    name      : 'MyApp',

    appFolder : 'MyApp',

    controllers : [
        'Main'
    ],

    launch: function() {
        Ext.create('MyApp.view.FormPanel').render(Ext.getBody());
    }
});
