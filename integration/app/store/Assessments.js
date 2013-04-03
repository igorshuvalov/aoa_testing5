Ext.define('aoa.store.Assessments', {
    extend: 'Ext.data.Store',
    config: {
        model: 'aoa.model.Assessments',
        sorters: 'asmID',		
        grouper: function(record) {
            return record.get('asmID')[0];
        },
        data: [
            {regDate: '08/04/2012', status: 'In Progress', name: 'Dr. Watson', asmID: 0, statusID: 1},
            {regDate: '08/07/2012', status: 'Completed', name: 'Dr. Marie Curie', asmID: 1, statusID: 0},
            {regDate: '08/09/2012', status: 'Completed', name: 'Dr Marcel Petiot', asmID: 2, statusID: 0}
        ]
    }
});