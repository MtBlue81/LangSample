Ext.define('MyApp.view.ToDateField', {
    alias     : 'widget.todatefield',
    extend    : 'MyApp.view.DateField',
    fieldLabel : 'To',
    refreshLang : function() {
        var me = this;
        me.setFieldLabel(MyApp.view.ToDateField.prototype.fieldLabel);
        me.callParent();
    }
});
