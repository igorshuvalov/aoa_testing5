Ext.define('testing.view.rightpanel', {
    extend: 'Ext.Panel',
    xtype: 'rightpanel',
    config: {
        id: 'rightpanel',
        layout: 'hbox',
        contact: {},
        html: 'Right Panel',
        updateContainer: function(data) {
            this.add({
                xtype: 'button',
                text: data.firstName
            });
        },
        items: [
            
        ]
    }
});