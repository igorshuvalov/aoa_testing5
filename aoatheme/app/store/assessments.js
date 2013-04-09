Ext.define('aoatheme.store.assessments', {
    extend: 'Ext.data.Store',
    config: {
        model: 'aoatheme.model.assessments',
		autoLoad: true,
        sorters: {
			property: 'timestamp',
			direction: 'DESC'
		},		
        grouper: function(record) {
            return record.get('timestamp')[0];
        },
		proxy: {
			type: 'localstorage',
			id: 'assessments'	
		},
        fields: [
            {name: 'regDate', type: 'string' },
			{name: 'status', type: 'string' },
            {name: 'doctorID', type: 'string' },
			{name: 'doctorName', type: 'string'},
            {name: 'practiceID', type: 'string' },
			{name: 'timestamp', type: 'string'}
        ]
    }
});