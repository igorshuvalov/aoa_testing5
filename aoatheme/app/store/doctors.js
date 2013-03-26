Ext.define('aoatheme.store.Doctors', {
    extend: 'Ext.data.Store',
    config: {
        model: 'aoatheme.model.Doctors',
        sorters: 'id',		
        grouper: function(record) {
            return record.get('id')[0];
        },
		// fields: ['firstName','lastName','title','id']
        data: [
			{firstName: 'Julius', lastName: 'Caesar 1', title: 'Dr.', id: 'd01'},
			{firstName: 'Julius', lastName: 'Caesar 2', title: 'Dr.', id: 'd02'},
			{firstName: 'Julius', lastName: 'Caesar 3', title: 'Dr.', id: 'd03'},
			{firstName: 'Julius', lastName: 'Caesar 4', title: 'Dr.', id: 'd04'},
			{firstName: 'Julius', lastName: 'Caesar 5', title: 'Dr.', id: 'd05'},
			{firstName: 'Julius', lastName: 'Caesar 6', title: 'Dr.', id: 'd06'},
			{firstName: 'Julius', lastName: 'Caesar 7', title: 'Dr.', id: 'd07'},
			{firstName: 'Julius', lastName: 'Caesar 8', title: 'Dr.', id: 'd08'},
			{firstName: 'Julius', lastName: 'Caesar 9', title: 'Dr.', id: 'd09'},
			{firstName: 'Julius', lastName: 'Caesar 10', title: 'Dr.', id: 'd10'},
			{firstName: 'Julius', lastName: 'Caesar 11', title: 'Dr.', id: 'd11'},
			{firstName: 'Julius', lastName: 'Caesar 12', title: 'Dr.', id: 'd12'}
        ]
    }
});