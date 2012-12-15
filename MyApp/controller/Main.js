Ext.define('MyApp.controller.Main', {

    extend: 'Ext.app.Controller',

    views : ['FormPanel'],

    refs  : [{
        ref     : 'form',
        selector: 'myapp-form'
    }],

    init : function() {
        var me = this;
        me.control({
            'myapp-form button': {
                click: function(btn) {
                    me.getScript(btn.type);
                }
            }
        });
    },
    getScript: function(lang) {
        var me = this;
        Ext.Ajax.request({
            url : 'extjs/locale/ext-lang-'+lang+'.js',
            success: function(response){
                new Function(response.responseText)();
            }
        });
        Ext.Ajax.request({
            url : 'MyApp/locale/lang-'+lang+'.js',
            success: function(response){
                new Function(response.responseText)();
                me.getForm().items.each(function(item) {
                    item.refreshLang();
                });
            }
        });
    }
});
