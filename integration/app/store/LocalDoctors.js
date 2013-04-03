Ext.define('aoa.store.LocalDoctors', {
    extend: 'Ext.data.Store',
    config: {
        model: 'aoa.model.LocalDoctors',
        autoLoad: true,		
		proxy: {
			type: 'localstorage',
			id: 'LocalDoctors'	
		},
		fields: ['firstName','lastName','title','id']
    }
});