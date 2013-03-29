Ext.define('aoatheme.store.newDoctor', {
    extend: 'Ext.data.Store',
    config: {
        model: 'aoatheme.model.DoctorFields',
        autoLoad: true,	
		sorters: 'firstName',
        grouper: {
            groupFn: function(record) {
                return record.get('firstName')[0];
            }
        },
		proxy: {
			type: 'localstorage',
			id: 'newDoctor'	
		},
        fields: [
            { name: 'firstName', type: 'string' },
			{ name: 'lastName', type: 'string' },
			{ name: 'title', type: 'string' },
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