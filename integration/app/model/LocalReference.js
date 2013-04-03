Ext.define('aoa.model.LocalReference', {
    extend: 'Ext.data.Model',
    config: {
        identifier: 'uuid',
        fields: [
            'referenceid',
            'practiceid',
            'doctorid',
            'assessmentid'
        ]
    }
});
