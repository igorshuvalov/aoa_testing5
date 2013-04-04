Ext.define('aoatheme.store.notes', {
    extend: 'Ext.data.Store',
    config: {
        model: 'aoatheme.model.notes',
        sorters: 'id',		
        grouper: function(record) {
            return record.get('id')[0];
        },
		// fields: ['itemTitle','description','id']
        data: [
			{itemTitle: 'General', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rhoncus mauris massa. Etiam tempor dapibus erat vel tincidunt. Nulla in pulvinar velit.', id: '0'},
			{itemTitle: 'Biometry', description: 'Donec varius pellentesque volutpat. Vestibulum sit amet risus nibh. Curabitur rhoncus erat porta metus posuere sollicitudin. Etiam erat eros, rutrum eget malesuada eget, ornare non lorem.', id: '1'},
			{itemTitle: 'Implantation', description: 'Etiam in tempus orci. Sed orci leo, consequat vitae fermentum id, dignissim ut nunc. In vulputate commodo leo nec consequat. Integer quis est a ipsum ornare dignissim.', id: '2'},
			{itemTitle: 'Another item', description: 'Ut fermentum, justo a consequat euismod, orci turpis tincidunt nisl, nec eleifend enim mauris pharetra sem. Nulla tortor neque, consectetur sed pharetra eget, convallis ut leo.', id: '3'},
			{itemTitle: 'One more item', description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin in tempor est.', id: '4'},
			{itemTitle: 'Last item', description: 'Sed sed ipsum orci. Sed mollis, diam id pellentesque iaculis, erat est tincidunt libero, quis sollicitudin dui quam consectetur metus.', id: '5'}
        ]
    }
});