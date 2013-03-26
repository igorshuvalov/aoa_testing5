Ext.define('aoatheme.store.LocalDoctors', {
    extend: 'Ext.data.Store',
    config: {
        model: 'aoatheme.model.LocalDoctors',
        autoLoad: true,		
		proxy: {
			type: 'localstorage',
			id: 'LocalDoctors'	
		},
		fields: ['firstName','lastName','title','id']
    }
});