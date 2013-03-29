Ext.define('aoa.store.LocalDoctor', {
    extend: 'Ext.data.Store',
    config: {
        model: 'aoa.model.LocalDoctor',
        autoLoad: true,
        sorters: 'name',
        grouper: {
            groupFn: function(record) {
                return record.get('name')[0].toUpperCase();
            }
        },
        proxy: {
            type: 'localstorage',
            id: 'LocalDoctor'
        }
    }
});