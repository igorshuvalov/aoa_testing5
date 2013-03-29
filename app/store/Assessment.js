Ext.define('aoa.store.Assessment', {
    extend: 'Ext.data.Store',

    config: {
        model: 'aoa.model.Assessment',
        autoLoad: true,
        sorters: 'regDate',
        grouper: {
            groupFn: function(record) {
                return record.get('regDate');
            }
        }
    }
});
