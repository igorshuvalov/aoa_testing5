Ext.define('aoa.model.LocalAssessment', {
    extend: 'Ext.data.Model',
    config: {
        identifier: 'uuid',
        fields: [
            'assessmentid',
            'regDate',
            'status'
        ]
    }
});
