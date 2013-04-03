Ext.define('aoa.model.PracticeFields', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            { name: 'practice_name', type: 'string' },
            { name: 'address_1', type: 'string' },
            { name: 'address_2', type: 'string' },
            { name: 'city', type: 'string' },
            { name: 'state', type: 'string' },
            { name: 'zip', type: 'integer' },
            { name: 'phone', type: 'string' },
            { name: 'email', type: 'string' }
        ],
		identifier: 'uuid'
    }
});