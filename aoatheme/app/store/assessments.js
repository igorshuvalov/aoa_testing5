Ext.define('aoatheme.store.Assessments', {
    extend: 'Ext.data.Store',
    alias: 'store.Assessments',
    config: {
        model: 'aoatheme.model.Assessments',
        sorters: 'firstName',
        grouper: function(record) {
            return record.get('name')[0];
        },
        data: [
            {regDate: '08/04/2012', status: 'In Progress', name: 'Dr. Watson'},
            {regDate: '08/07/2012', status: 'Completed', name: 'Dr. Marie Curie'},
            {regDate: '08/09/2012', status: 'Completed', name: 'Dr Marcel Petiot'}
        ]
    }
});