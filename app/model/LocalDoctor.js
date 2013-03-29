Ext.define('aoa.model.LocalDoctor', {
    extend: 'Ext.data.Model',
    config: {
        identifier: 'uuid',
        fields: [
            'doctorid',
            'name',
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
