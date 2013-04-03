Ext.define('aoa.model.LocalDoctor', {
    extend: 'Ext.data.Model',
    config: {
        identifier: 'uuid',
        fields: [
            'doctorid',
            'firstName',
            'lastName',
            'address1',
            'address2',
            'city',
            'state',
            'zip',
            'telephone',
            'email'
        ]
    }
});
