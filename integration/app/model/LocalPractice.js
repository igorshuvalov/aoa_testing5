Ext.define('aoa.model.LocalPractice', {
    extend: 'Ext.data.Model',
    config: {
        identifier: 'uuid',
        fields: [
            'practiceid',
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
