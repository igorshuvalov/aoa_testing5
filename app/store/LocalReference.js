Ext.define('aoa.store.LocalReference', {
    extend: 'Ext.data.Store',
    config: {
        model: 'aoa.model.LocalReference',
        autoLoad: true,        
        proxy: {
            type: 'localstorage',
            id: 'LocalReference'
        }
    }
});