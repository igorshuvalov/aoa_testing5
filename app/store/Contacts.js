Ext.define('aoa.store.Contacts', {
    extend: 'Ext.data.Store',

    config: {
        model: 'aoa.model.Contact',
        autoLoad: true,
        sorters: 'firstName',
        grouper: {
            groupFn: function(record) {
                return record.get('firstName')[0].toUpperCase();
            }
        },
        proxy: {
            type: 'ajax',
            url: 'contacts.json'
        }
    }
});
