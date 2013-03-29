Ext.define('aoa.store.LocalPractice', {
    extend: 'Ext.data.Store',
    config: {
        model: 'aoa.model.LocalPractice',
        autoLoad: true,
        sorters: 'name',
        grouper: {
            groupFn: function(record) {
                return record.get('name')[0].toUpperCase();
            }
        },
        proxy: {
            type: 'localstorage',
            id: 'LocalPractice'
        }
    }
});