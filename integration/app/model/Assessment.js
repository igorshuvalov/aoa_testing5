Ext.define('aoa.model.Assessment', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            'assessmentid',
            'regDate',
            'parsedRegDate',
            'status'
        ]
    }
});
