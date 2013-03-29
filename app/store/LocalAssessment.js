Ext.define('aoa.store.LocalAssessment', {
    extend: 'Ext.data.Store',
    config: {
        model: 'aoa.model.LocalAssessment',
        autoLoad: true,
        sorters: 'date',
        proxy: {
            type: 'localstorage',
            id: 'LocalAssessment'
        }
    }
});