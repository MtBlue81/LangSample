Ext.define('MyApp.view.FormPanel', {
    extend   : 'Ext.form.Panel',
    alias    : 'widget.myapp-form',
    requires : [
       'MyApp.view.ToDateField',
       'MyApp.view.FromDateField'
    ],

    width       : 300,
    bodyPadding : 10,
    frame       : true,

    items : [{
        xtype   : 'fromdatefield',
        anchor  : '100%',
        name    : 'from_date',
        maxValue: new Date()
    }, {
        xtype   : 'todatefield',
        anchor  : '100%',
        name    : 'to_date',
        value   : new Date()
    }],

    buttons : [{
        text : 'English',
        type : 'en'
    }, {
        text : 'Japanese',
        type : 'ja'
    }]
});
