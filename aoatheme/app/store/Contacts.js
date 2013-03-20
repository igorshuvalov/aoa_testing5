Ext.define('aoatheme.store.Contacts', {
    extend: 'Ext.data.Store',

    config: {
        model: 'aoatheme.model.Contact',
        autoLoad: true,
        sorters: 'firstName',
        grouper: {
            groupFn: function(record) {
                return record.get('lastName')[0];
            }
        },
        proxy: {
            type: 'ajax',
            url: 'contacts.json'
        }
    }
});
