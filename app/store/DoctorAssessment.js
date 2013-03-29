Ext.define('aoa.store.DoctorAssessment', {
    extend: 'Ext.data.Store',

    config: {
        model: 'aoa.model.Assessment',
        autoLoad: true,
        sorters: 'regDate',
        grouper: {
            groupFn: function(record) {
                return record.get('name')[0].toUpperCase();
            }
        }
    }
});
