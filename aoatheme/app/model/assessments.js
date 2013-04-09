Ext.define('aoatheme.model.assessments', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            {name: 'regDate', type: 'string'},
			{name: 'status', type: 'string'},
            {name: 'doctorID', type: 'string'},
			{name: 'doctorName', type: 'string'},
            {name: 'practiceID', type: 'string'},
			{name: 'timestamp', type: 'string'}
        ],
		proxy: {
			type: 'localstorage',
			id: 'assessments'	
		},
		identifier: 'uuid'
    }
});