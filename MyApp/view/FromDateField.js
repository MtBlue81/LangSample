Ext.define('MyApp.view.FromDateField', {
    alias     : 'widget.fromdatefield',
    extend    : 'MyApp.view.DateField',
    fieldLabel : 'From',
    refreshLang : function() {
        var me = this;
        me.setFieldLabel(MyApp.view.FromDateField.prototype.fieldLabel);
        me.callParent();
    }
});
