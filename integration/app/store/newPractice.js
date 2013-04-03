Ext.define('aoa.store.newPractice', {
    extend: 'Ext.data.Store',
    config: {
        model: 'aoa.model.PracticeFields',
        autoLoad: true,	
		sorters: 'practice_name',
        grouper: {
            groupFn: function(record) {
                return record.get('practice_name')[0];
            }
        },
		proxy: {
			type: 'localstorage',
			id: 'newPractice'	
		},
        fields: [
            { name: 'practice_name', type: 'string' },
            { name: 'address_1', type: 'string' },
            { name: 'address_2', type: 'string' },
            { name: 'city', type: 'string' },
            { name: 'state', type: 'string' },
            { name: 'zip', type: 'integer' },
            { name: 'phone', type: 'string' },
            { name: 'email', type: 'string' }
        ]
    }
});