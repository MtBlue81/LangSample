Ext.define('MyApp.view.DateField', {
    alias     : 'widget.mydatefield',
    extend    : 'Ext.form.field.Date',
    refreshLang : function() {
        var me = this;
        me.clearInvalid();
        if (me.picker) {
            // picker refresh
            me.picker.getEl().remove();
            me.picker.destroy();
            delete(me.picker);
        }
    }
});
