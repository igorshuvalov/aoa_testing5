Ext.define('aoa.store.LocalDoctor', {
    extend: 'Ext.data.Store',
    config: {
        model: 'aoa.model.LocalDoctor',
        autoLoad: true,
        autoSync: true,
        sorters: 'name',
        grouper: {
            groupFn: function(record) {
                return record.get('firstName')[0].toUpperCase();
            }
        },
        proxy: {
            type: 'localstorage',
            id: 'LocalDoctor'
        }
    }
});