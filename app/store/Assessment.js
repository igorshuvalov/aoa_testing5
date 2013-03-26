Ext.define('testing.store.Assessment', {
    extend: 'Ext.data.Store',

    config: {
        model: 'testing.model.Assessment',
        autoLoad: true,
        sorters: 'regDate',
        grouper: {
            groupFn: function(record) {
                return record.get('name')[0].toUpperCase();
            }
        }
    }
});
